from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse
from datetime import datetime, timezone
import hashlib
import html
import json
import re
import os

ROOT = Path(__file__).resolve().parent
CACHE_FILE = ROOT / "updates-cache.json"
LIVE_SCRIPT = """
<script>
(() => {
    const modules = {
        constitucional: ['Controle de constitucionalidade', ['O controle difuso ocorre, em regra:', 'Em caso concreto', 'Somente no Senado', 'Antes da lei existir', 'Apenas por decreto']],
        tributario: ['Princípios tributários', ['A legalidade tributária exige:', 'Lei para criar ou aumentar tributo', 'Decreto para todo tributo', 'Autorização judicial', 'Apenas publicação em jornal']],
        contabilidade: ['Patrimônio e contas', ['O ativo reúne:', 'Bens e direitos', 'Somente dívidas', 'Apenas despesas', 'Somente capital']]
    };
    const saved = JSON.parse(localStorage.getItem('rota-sefaz-progress') || '{}');
    const panel = document.querySelector('#simulado');
    const cards = [...document.querySelectorAll('.reading-card')];
    let key = 'constitucional', question = 0, score = 0, answered = false;
    function meters() {
        cards.forEach(card => {
            const percent = Math.round(((saved[card.dataset.reading]?.score || 0) / 5) * 100);
            let label = card.querySelector('.live-progress');
            if (!label) { label = document.createElement('small'); label.className = 'live-progress'; card.append(label); }
            label.textContent = `progresso real: ${percent}%`;
        });
    }
    function render() {
        const item = modules[key], choices = item[1].slice(1), correct = 0;
        answered = false;
        panel.innerHTML = `<div class="quiz-copy"><p class="eyebrow accent">SIMULADO · ${item[0].toUpperCase()} · QUESTÃO ${question + 1} / 5</p><h2>${item[1][0]}</h2><p>Escolha uma alternativa. O resultado atualiza o medidor deste material.</p><div class="quiz-options">${choices.map((choice, index) => `<button class="quiz-option" data-choice="${index}">${String.fromCharCode(65 + index)}. ${choice}</button>`).join('')}</div><div class="quiz-feedback" id="liveFeedback"></div><button class="button" id="liveNext" disabled>${question === 4 ? 'Concluir' : 'Próxima'} →</button></div><div class="quiz-preview"><span>MATERIAL ATIVO</span><p>${item[0]}</p><div>5 questões por módulo · progresso salvo neste aparelho.</div></div>`;
        panel.querySelectorAll('[data-choice]').forEach(button => button.onclick = () => {
            if (answered) return;
            answered = true;
            const selected = Number(button.dataset.choice);
            if (selected === correct) { score += 1; button.classList.add('correct'); $('#liveFeedback').textContent = 'Correto. O conceito foi identificado.'; }
            else { button.classList.add('wrong'); panel.querySelector('[data-choice="0"]').classList.add('correct'); $('#liveFeedback').textContent = 'Revise o material e compare as alternativas.'; }
            saved[key] = { score, answered: question + 1 };
            localStorage.setItem('rota-sefaz-progress', JSON.stringify(saved));
            meters();
            $('#liveNext').disabled = false;
        });
        $('#liveNext').onclick = () => { if (question < 4) { question += 1; render(); } else { $('#liveFeedback').textContent = `Módulo concluído: ${score}/5 acertos.`; $('#liveNext').disabled = true; } };
    }
    window.addEventListener('load', () => {
        const style = document.createElement('style'); style.textContent = '.live-progress{display:block;color:#1e694f;font:9px monospace;margin-top:8px}'; document.head.append(style);
        cards.forEach(card => card.addEventListener('click', () => { key = card.dataset.reading; question = 0; score = saved[key]?.score || 0; render(); panel.scrollIntoView({ behavior: 'smooth' }); }));
        meters();
    });
})();
</script>
"""
SOURCES = [
    {"id": "sefaz", "name": "SEFAZ Tocantins", "url": "https://www.to.gov.br/sefaz", "kind": "órgão oficial"},
    {"id": "diario", "name": "Diário Oficial do Estado", "url": "https://diariooficial.to.gov.br/", "kind": "atos e editais"},
    {"id": "gov", "name": "Portal Gov.br", "url": "https://www.gov.br/pt-br/servicos/acompanhar-publicacoes-do-diario-oficial-da-uniao", "kind": "serviços públicos"},
]


def load_cache():
    if CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            pass
    return {"checked_at": None, "items": [], "changed": False}


def save_cache(cache):
    CACHE_FILE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def fetch_source(source):
    request = Request(source["url"], headers={"User-Agent": "Rota-SEFAZ-TO/1.0"})
    try:
        with urlopen(request, timeout=15) as response:
            content = response.read(250000).decode("utf-8", errors="ignore")
        text = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", " ", content, flags=re.I)
        text = re.sub(r"<[^>]+>", " ", text)
        text = re.sub(r"\s+", " ", html.unescape(text)).strip()
        fingerprint = hashlib.sha256(text.encode("utf-8")).hexdigest()
        return {**source, "ok": True, "fingerprint": fingerprint, "preview": text[:220]}
    except Exception as error:
        return {**source, "ok": False, "error": str(error), "fingerprint": None}


def check_updates(force=False):
    cache = load_cache()
    checked_at = cache.get("checked_at")
    if not force and checked_at:
        checked = datetime.fromisoformat(checked_at)
        if (datetime.now(timezone.utc) - checked).total_seconds() < 7 * 86400:
            return cache
    previous = {item["id"]: item.get("fingerprint") for item in cache.get("items", [])}
    items = [fetch_source(source) for source in SOURCES]
    cache = {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "items": items,
        "changed": any(item.get("fingerprint") and item.get("fingerprint") != previous.get(item["id"]) for item in items),
    }
    save_cache(cache)
    return cache


class Handler(BaseHTTPRequestHandler):
    def send_json(self, data, status=200):
        payload = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/updates":
            self.send_json(check_updates())
            return
        if path == "/api/updates/check":
            self.send_json(check_updates(force=True))
            return
        target = ROOT / ("rota-sefaz-to.html" if path == "/" else path.lstrip("/"))
        if target.exists() and target.is_file() and ROOT in target.parents:
            content_type = "text/html; charset=utf-8" if target.suffix == ".html" else "text/plain; charset=utf-8"
            self.send_response(200)
            self.send_header("Content-Type", content_type)
            self.end_headers()
            content = target.read_bytes()
            if target.name == "rota-sefaz-to.html":
                content = content.replace(b"renderMaterialQuiz()}}}document.querySelectorAll", b"renderMaterialQuiz()}};document.querySelectorAll")
                content += LIVE_SCRIPT.encode("utf-8")
            self.wfile.write(content)
            return
        self.send_error(404)

    def log_message(self, format, *args):
        print(format % args)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "4173"))
    print(f"Rota SEFAZ-TO em http://localhost:{port}")
    print("Abra esse endereco no computador ou celular conectado a mesma rede.")
    ThreadingHTTPServer(("0.0.0.0", port), Handler).serve_forever()
