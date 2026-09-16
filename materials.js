// Trilha preparatória ampla. A lista definitiva depende do edital da SEFAZ-TO.
const modules = [
  {
    id: 'portugues', area: 'Conhecimentos gerais', name: 'Língua Portuguesa',
    summary: 'Interpretação, coesão, sintaxe e pontuação.',
    lessons: [
      ['Interpretação de textos', 'Identifique a tese, os argumentos e a conclusão antes de responder. Distinga informação explícita de inferência: a inferência deve ser sustentada pelo texto, não por conhecimento externo. Observe conectivos como porém, portanto e embora, que alteram a relação entre ideias.'],
      ['Coesão e gramática', 'Pronomes retomam termos anteriores e evitam repetição. Concordância relaciona verbo e sujeito ou nome e seus determinantes. Regência define a preposição exigida; a crase resulta da fusão da preposição a com o artigo a. Analise a função da palavra na frase antes de aplicar uma regra.'],
      ['Pontuação', 'A vírgula pode separar termos deslocados, enumerações e orações explicativas. Em regra, não separe sujeito e verbo nem verbo e complemento. Compare o sentido produzido com e sem a vírgula em orações adjetivas.']
    ],
    questions: [
      ['Uma inferência válida deve ser:', 'Sustentada por elementos do texto', 'Baseada apenas na opinião do leitor', 'Contrária à tese do autor', 'Igual a uma citação literal', 0, 'A inferência decorre de pistas textuais.'],
      ['Na frase “Embora chovesse, saímos”, embora indica:', 'Concessão', 'Causa', 'Conclusão', 'Finalidade', 0, 'Embora introduz ideia concessiva.'],
      ['Em regra, a vírgula não separa:', 'Sujeito e verbo', 'Itens de uma enumeração', 'Vocativo', 'Adjunto adverbial deslocado', 0, 'Sujeito e predicado mantêm ligação sintática direta.']
    ]
  },
  {
    id: 'logica', area: 'Conhecimentos gerais', name: 'Raciocínio Lógico e Matemática',
    summary: 'Proposições, porcentagem, conjuntos e probabilidade.',
    lessons: [
      ['Proposições', 'Uma proposição tem valor verdadeiro ou falso. A negação de “todo A é B” é “algum A não é B”. A implicação P → Q só é falsa quando P é verdadeira e Q é falsa. Reescreva frases em linguagem simples antes de montar a tabela-verdade.'],
      ['Porcentagem', 'Um aumento de 20% multiplica por 1,20; uma redução de 20% multiplica por 0,80. Aumentos e descontos sucessivos são multiplicativos. Para comparar bases diferentes, transforme valores em razões antes de concluir.'],
      ['Conjuntos e probabilidade', 'Na união de dois conjuntos, some as quantidades e subtraia a interseção para não contar elementos duas vezes. Em casos equiprováveis, probabilidade é casos favoráveis divididos pelos possíveis. Defina bem o espaço amostral.']
    ],
    questions: [
      ['A negação de “todos passaram” é:', 'Alguém não passou', 'Ninguém passou', 'Todos reprovaram', 'Alguém passou', 0, 'Basta um contraexemplo para negar a afirmação universal.'],
      ['Aumentar 100 em 20% produz:', '120', '80', '102', '200', 0, '100 × 1,20 = 120.'],
      ['Se A tem 10 elementos, B tem 8 e a interseção tem 3, a união tem:', '15', '18', '21', '5', 0, '10 + 8 − 3 = 15.']
    ]
  },
  {
    id: 'informatica', area: 'Conhecimentos gerais', name: 'Informática e Segurança',
    summary: 'Planilhas, redes, dados e proteção da informação.',
    lessons: [
      ['Planilhas e dados', 'Referências relativas mudam ao copiar fórmulas; referências absolutas, como $A$1, permanecem fixas. Filtros exibem subconjuntos sem apagar registros. Antes de ordenar uma tabela, selecione o intervalo completo para manter as linhas coerentes.'],
      ['Redes e segurança', 'HTTPS protege a comunicação durante o transporte, mas não garante que o site seja legítimo. Autenticação multifator reduz o risco de uso indevido de senhas. Cópias de segurança precisam de recuperação testada e, idealmente, uma cópia isolada.'],
      ['Qualidade dos dados', 'Valide formato, duplicidade, ausência e consistência. Um identificador deve apontar para o mesmo registro em toda a base. Documente origem e data de atualização antes de usar dados para decisão.']
    ],
    questions: [
      ['Em uma planilha, $A$1 é referência:', 'Absoluta', 'Relativa', 'Circular', 'Externa', 0, 'Os cifrões fixam coluna e linha.'],
      ['HTTPS por si só garante que o site é confiável?', 'Não', 'Sim', 'Apenas em redes públicas', 'Apenas no celular', 0, 'A conexão pode ser protegida mesmo em um site malicioso.'],
      ['Um filtro de planilha normalmente:', 'Oculta temporariamente linhas fora do critério', 'Apaga dados', 'Criptografa células', 'Remove fórmulas', 0, 'Filtrar altera a visualização, não os registros.']
    ]
  },
  {
    id: 'constitucional', area: 'Direito', name: 'Direito Constitucional',
    summary: 'Constituição, direitos, federação e controle.',
    lessons: [
      ['Supremacia constitucional', 'A Constituição é parâmetro de validade das normas inferiores. O controle preventivo atua antes da formação definitiva da norma; o repressivo, depois. O controle difuso surge em um caso concreto, enquanto o concentrado usa ações próprias perante o tribunal competente.'],
      ['Federação e competências', 'União, estados, Distrito Federal e municípios têm autonomia nos limites constitucionais. Diferencie competência legislativa de competência administrativa. Em matéria tributária, a Constituição distribui competências para instituir impostos.'],
      ['Direitos e Administração', 'Direitos fundamentais orientam a atuação estatal. O art. 37 da Constituição apresenta princípios da Administração Pública, entre eles legalidade, impessoalidade, moralidade, publicidade e eficiência. Questões costumam cobrar a aplicação prática desses princípios.']
    ],
    questions: [
      ['O controle difuso ocorre, em regra:', 'Em caso concreto', 'Somente antes da lei', 'Apenas por decreto', 'Sem processo judicial', 0, 'A questão constitucional aparece incidentalmente em um caso.'],
      ['A Constituição distribui entre entes federativos:', 'Competências tributárias', 'O mesmo imposto a todos', 'Apenas cargos públicos', 'Somente taxas', 0, 'Cada ente recebe competências definidas constitucionalmente.'],
      ['Qual é princípio expresso do art. 37?', 'Impessoalidade', 'Lucratividade', 'Sigilo permanente', 'Hierarquia tributária', 0, 'Impessoalidade integra o conjunto de princípios expressos.']
    ]
  },
  {
    id: 'administrativo', area: 'Direito', name: 'Direito Administrativo',
    summary: 'Atos, poderes, responsabilidade e controle.',
    lessons: [
      ['Atos administrativos', 'Estude competência, finalidade, forma, motivo e objeto. Vício de legalidade leva à anulação; uma decisão válida pode ser revogada por conveniência e oportunidade quando a lei permitir. Nem todo ato admite revogação.'],
      ['Poderes e controle', 'O poder de polícia condiciona atividades privadas em proteção ao interesse público, dentro dos limites legais. O controle administrativo pode ocorrer pela própria Administração; há também controle judicial e legislativo conforme suas competências.'],
      ['Responsabilidade do Estado', 'A responsabilidade civil estatal, em regra, segue o art. 37, § 6º, da Constituição para danos causados por agentes nessa qualidade. Analise conduta, dano e nexo causal; excludentes e direito de regresso exigem exame do caso.']
    ],
    questions: [
      ['A retirada de ato ilegal chama-se:', 'Anulação', 'Revogação', 'Delegação', 'Homologação', 0, 'Anulação enfrenta vício de legalidade.'],
      ['Poder de polícia envolve:', 'Limitar atividade privada nos termos da lei', 'Criar tributo por portaria', 'Julgar crimes', 'Alterar a Constituição', 0, 'Há condicionamento legal de direitos e atividades.'],
      ['Nexo causal relaciona:', 'Conduta e dano', 'Cargo e salário', 'Lei e decreto', 'Receita e despesa', 0, 'É o vínculo entre ação estatal e prejuízo.']
    ]
  },
  {
    id: 'tributario', area: 'Direito tributário', name: 'Sistema Tributário Nacional',
    summary: 'Competências, princípios, obrigação e crédito.',
    lessons: [
      ['Competência e espécies', 'Competência tributária é atribuída pela Constituição e não se confunde com capacidade de arrecadar. Impostos, taxas e contribuições de melhoria têm hipóteses distintas. Identifique sempre o ente competente e o fato gerador.'],
      ['Limitações ao poder de tributar', 'A legalidade exige lei para instituir ou aumentar tributo, ressalvadas hipóteses constitucionais. Anterioridade e irretroatividade protegem a previsibilidade da cobrança. Imunidade nasce da Constituição; isenção é dispensa legal do pagamento em situações previstas.'],
      ['Obrigação e crédito', 'A obrigação principal surge com o fato gerador e tem por objeto pagar tributo ou penalidade pecuniária. O lançamento constitui o crédito tributário. Suspensão, extinção e exclusão são categorias diferentes no CTN; memorize exemplos de cada uma.']
    ],
    questions: [
      ['Imunidade tributária decorre:', 'Da Constituição', 'De contrato privado', 'De mera decisão administrativa', 'De nota fiscal', 0, 'A imunidade é limitação constitucional.'],
      ['O lançamento constitui:', 'O crédito tributário', 'A Constituição', 'A competência tributária', 'O orçamento', 0, 'É o procedimento de constituição do crédito.'],
      ['Competência tributária é distribuída pela:', 'Constituição', 'Nota de empenho', 'Portaria interna', 'Sentença arbitral', 0, 'A repartição de competências é constitucional.']
    ]
  },
  {
    id: 'estadual', area: 'Direito tributário', name: 'Tributos e Legislação do Tocantins',
    summary: 'ICMS, IPVA, ITCMD e consulta à legislação estadual.',
    lessons: [
      ['Tributos estaduais', 'Estados e Distrito Federal têm competência para instituir ICMS, IPVA e ITCMD conforme a Constituição. Estude hipótese de incidência, contribuinte, base de cálculo, não cumulatividade e benefícios de cada imposto conforme a legislação vigente.'],
      ['ICMS na prática', 'No ICMS, operações com mercadorias e determinadas prestações de serviço exigem atenção ao local da operação, documentação fiscal, créditos e débitos. Um exemplo didático: imposto devido pela saída menos crédito admitido pela entrada, observadas as regras legais.'],
      ['Como estudar a norma', 'Consulte a versão vigente do Código Tributário Estadual, do regulamento do ICMS e dos atos da SEFAZ-TO. Registre número da norma, data de consulta e alterações. Alíquotas, prazos e benefícios podem mudar; não os memorize a partir de resumos antigos.']
    ],
    source: 'https://portal.sefaz.to.gov.br/legislacao',
    questions: [
      ['Qual imposto está na competência estadual?', 'ICMS', 'ISS', 'IPI', 'IOF', 0, 'O ICMS é de competência dos estados e do Distrito Federal.'],
      ['A não cumulatividade do ICMS relaciona:', 'Débitos e créditos permitidos', 'Somente despesas de pessoal', 'Apenas multas', 'Apenas bens imóveis', 0, 'Créditos admitidos podem compensar débitos.'],
      ['Para conferir uma alíquota vigente no Tocantins, use:', 'A legislação estadual atualizada', 'Um resumo sem data', 'Uma questão antiga isolada', 'Uma tabela de outro estado', 0, 'A norma vigente é a fonte adequada.']
    ]
  },
  {
    id: 'contabilidade', area: 'Contabilidade', name: 'Contabilidade Geral',
    summary: 'Patrimônio, lançamentos e demonstrações.',
    lessons: [
      ['Equação patrimonial', 'Ativo reúne recursos controlados capazes de gerar benefícios; passivo reúne obrigações presentes; patrimônio líquido é a participação residual. A equação básica é Ativo = Passivo + Patrimônio Líquido. Uma compra a prazo aumenta ativo e passivo simultaneamente.'],
      ['Partidas dobradas', 'Todo lançamento mantém igualdade entre débitos e créditos. Débito não significa necessariamente despesa, e crédito não significa receita. A natureza da conta determina o efeito do lançamento. Pratique com caixa, fornecedores, capital, receita e despesa.'],
      ['Demonstrações', 'O balanço mostra a posição patrimonial em uma data. A demonstração do resultado evidencia receitas e despesas de um período. Fluxos de caixa mostram entradas e saídas de caixa por atividades. Compare finalidade e regime de cada demonstração.']
    ],
    questions: [
      ['A equação patrimonial é:', 'Ativo = Passivo + Patrimônio Líquido', 'Ativo = Receita + Despesa', 'Passivo = Caixa + Receita', 'Lucro = Ativo + Passivo', 0, 'É a identidade básica do balanço.'],
      ['Uma compra a prazo normalmente aumenta:', 'Ativo e passivo', 'Apenas receita', 'Apenas caixa', 'Somente patrimônio líquido', 0, 'Surge um bem ou direito e uma obrigação.'],
      ['A DRE apresenta:', 'Receitas e despesas do período', 'Somente saldos bancários', 'Apenas imobilizado', 'Apenas tributos', 0, 'A demonstração apura o resultado do período.']
    ]
  },
  {
    id: 'custos', area: 'Contabilidade', name: 'Contabilidade de Custos',
    summary: 'Custos, despesas, margem e ponto de equilíbrio.',
    lessons: [
      ['Classificação', 'Custo relaciona-se à produção de bens ou serviços; despesa, ao esforço de vender ou administrar. Custos diretos podem ser atribuídos objetivamente ao produto; indiretos exigem critério de rateio. Custos fixos não variam com o volume dentro da faixa relevante.'],
      ['Margem de contribuição', 'A margem unitária é preço de venda menos custos e despesas variáveis unitários. Ela ajuda a cobrir custos fixos e formar lucro. Se o preço é 100 e os gastos variáveis são 60, a margem é 40.'],
      ['Ponto de equilíbrio', 'No modelo simples, divida os custos e despesas fixos pela margem de contribuição unitária. Se os fixos são 4.000 e a margem é 40, o ponto de equilíbrio é 100 unidades. Verifique hipóteses antes de aplicar o cálculo.']
    ],
    questions: [
      ['Preço 100 e gastos variáveis 60 geram margem de:', '40', '60', '100', '160', 0, '100 − 60 = 40.'],
      ['Custo indireto costuma exigir:', 'Critério de rateio', 'Pagamento antecipado', 'Isenção tributária', 'Correção monetária', 0, 'Não é atribuído diretamente ao produto.'],
      ['Fixos de 4.000 e margem unitária de 40 geram equilíbrio em:', '100 unidades', '40 unidades', '160 unidades', '4.040 unidades', 0, '4.000 ÷ 40 = 100.']
    ]
  },
  {
    id: 'auditoria', area: 'Controle', name: 'Auditoria',
    summary: 'Risco, evidência, controles e amostragem.',
    lessons: [
      ['Planejamento e risco', 'A auditoria planeja procedimentos conforme riscos de distorção relevante e conhecimento da entidade. Materialidade orienta o foco do trabalho. Risco maior pode exigir evidência mais persuasiva.'],
      ['Evidência', 'Inspeção, observação, confirmação externa, recálculo e procedimentos analíticos são técnicas diferentes. Evidência precisa ser suficiente em quantidade e apropriada em qualidade. Uma confirmação independente costuma ter força diferente de mera declaração interna.'],
      ['Controles e amostragem', 'Controles internos reduzem riscos, mas não eliminam todas as falhas. Em amostragem, a conclusão sobre a população depende do desenho, seleção e avaliação dos itens. Documente achados, critérios, causas e efeitos.']
    ],
    questions: [
      ['Materialidade ajuda a definir:', 'Foco e extensão dos procedimentos', 'A alíquota do ICMS', 'A competência tributária', 'O preço de venda', 0, 'Ela orienta o planejamento da auditoria.'],
      ['Confirmação externa é obtida de:', 'Terceiro independente', 'Somente da gerência', 'Um palpite do auditor', 'Uma fórmula vazia', 0, 'A fonte externa pode fortalecer a evidência.'],
      ['Controles internos:', 'Reduzem riscos, sem eliminá-los totalmente', 'Eliminam qualquer fraude', 'Substituem todas as provas', 'Dispensam documentação', 0, 'Há limitações inerentes aos controles.']
    ]
  },
  {
    id: 'publica', area: 'Gestão pública', name: 'AFO e Contabilidade Pública',
    summary: 'Orçamento, receita, despesa e patrimônio público.',
    lessons: [
      ['Planejamento orçamentário', 'PPA, LDO e LOA cumprem papéis complementares: planejamento de médio prazo, orientação anual e autorização orçamentária. Compare vigência, iniciativa e finalidade, sem confundir dotação com dinheiro disponível em caixa.'],
      ['Receita e despesa', 'A execução da despesa passa por empenho, liquidação e pagamento. O empenho reserva dotação; a liquidação verifica o direito adquirido pelo credor; o pagamento quita a obrigação. A receita tem etapas próprias de previsão e execução.'],
      ['Patrimônio público', 'A contabilidade aplicada ao setor público registra também variações patrimoniais, ativos e passivos, além do orçamento. Um fato pode afetar o patrimônio sem gerar fluxo de caixa imediato. Consulte normas e manuais vigentes para detalhes.']
    ],
    questions: [
      ['A sequência típica da despesa é:', 'Empenho, liquidação, pagamento', 'Pagamento, empenho, liquidação', 'Liquidação, pagamento, empenho', 'Previsão, arrecadação, pagamento', 0, 'São estágios da execução da despesa.'],
      ['A LOA é:', 'A lei orçamentária anual', 'O plano plurianual', 'Uma nota fiscal', 'Um demonstrativo bancário', 0, 'Ela estima receitas e fixa despesas para o exercício.'],
      ['A liquidação verifica:', 'O direito do credor', 'A aprovação do PPA', 'A criação de imposto', 'A posse do servidor', 0, 'Confere objeto, valor e credor conforme documentos.']
    ]
  },
  {
    id: 'economia', area: 'Economia', name: 'Economia e Finanças Públicas',
    summary: 'Oferta, demanda, inflação e política fiscal.',
    lessons: [
      ['Mercados', 'Em um modelo simples, a demanda tende a cair quando o preço sobe, mantidos outros fatores. Mudança no preço causa movimento ao longo da curva; renda, preferências ou custos podem deslocar curvas. Distinga essas situações em gráficos.'],
      ['Indicadores', 'Inflação mede a variação de um índice de preços, não o nível isolado de um produto. PIB mede o valor da produção final no período. Taxas nominais e reais diferem pelo efeito da inflação.'],
      ['Setor público', 'Tributos financiam serviços e influenciam decisões. Gastos e receitas formam a política fiscal. Déficit, dívida e resultado primário são conceitos relacionados, mas distintos. Avalie sempre o período e a unidade de medida.']
    ],
    questions: [
      ['Inflação é:', 'Variação de um índice de preços', 'Preço de um produto isolado', 'A dívida total', 'O saldo do caixa', 0, 'Ela mede mudança agregada de preços.'],
      ['Mudança no próprio preço normalmente causa:', 'Movimento ao longo da curva de demanda', 'Deslocamento obrigatório da oferta', 'Fim do mercado', 'Alteração da Constituição', 0, 'Outros fatores deslocam a curva.'],
      ['Taxa real considera o efeito:', 'Da inflação', 'Do número de servidores', 'Da alíquota apenas', 'Do endereço da empresa', 0, 'A taxa real desconta a perda do poder de compra.']
    ]
  },
  {
    id: 'estatistica', area: 'Métodos quantitativos', name: 'Estatística',
    summary: 'Medidas, dispersão e interpretação de dados.',
    lessons: [
      ['Tendência central', 'Média soma os valores e divide pela quantidade; mediana é o valor central após ordenação; moda é o mais frequente. Valores extremos afetam mais a média que a mediana. Escolha a medida adequada à distribuição.'],
      ['Dispersão', 'Amplitude é máximo menos mínimo. Variância e desvio padrão descrevem espalhamento em torno da média. O desvio padrão usa a unidade original dos dados, facilitando interpretação.'],
      ['Amostras', 'Uma amostra deve representar a população para sustentar inferências. Viés de seleção pode distorcer resultados mesmo com muitos registros. Correlação, sozinha, não prova causalidade.']
    ],
    questions: [
      ['Na série 2, 3, 100, a mediana é:', '3', '2', '35', '100', 0, 'O valor central após ordenar é 3.'],
      ['A amplitude de 4, 8, 10 é:', '6', '10', '4', '22', 0, '10 − 4 = 6.'],
      ['Correlação isoladamente:', 'Não prova causalidade', 'Prova causalidade', 'Elimina viés', 'Define a amostra', 0, 'Outras explicações podem produzir a associação.']
    ]
  },
  {
    id: 'historia', area: 'Conhecimentos locais', name: 'Tocantins: História e Geografia',
    summary: 'Formação do estado, território e economia regional.',
    lessons: [
      ['Formação do estado', 'O Tocantins foi criado pela Constituição de 1988 a partir da porção norte de Goiás. Estude o processo histórico de emancipação, a construção de Palmas e a organização político-administrativa. Confira datas e marcos em fontes oficiais.'],
      ['Território', 'Analise localização, municípios, rede hidrográfica e características dos biomas presentes no estado. Relacione infraestrutura e ocupação territorial com atividades produtivas. Use mapas atualizados para fixar relações espaciais.'],
      ['Economia regional', 'Agropecuária, comércio, serviços e logística integram a economia tocantinense. Compare dados recentes de produção e população em fontes estatísticas oficiais, observando ano e metodologia.']
    ],
    source: 'https://www.to.gov.br/',
    questions: [
      ['O Tocantins foi criado pela Constituição de:', '1988', '1967', '1824', '1891', 0, 'A Constituição de 1988 criou o estado.'],
      ['O território do Tocantins foi desmembrado de:', 'Goiás', 'Pará', 'Maranhão', 'Bahia', 0, 'Foi formado a partir do norte de Goiás.'],
      ['Para comparar dados regionais, observe:', 'Ano e metodologia', 'Apenas o título', 'Só a cor do gráfico', 'A primeira página', 0, 'Dados de períodos e métodos diferentes podem não ser comparáveis.']
    ]
  }
];

const libraryStyle = document.createElement('style');
libraryStyle.textContent = `.reading{margin-top:11px}.reading-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.reading-card{border:1px solid var(--line);background:#f8faf3;padding:15px;text-align:left;cursor:pointer;min-height:126px}.reading-card:hover,.reading-card[aria-pressed="true"]{border-color:var(--green);background:#edf5e7}.reading-card span,.reading-card small{display:block}.reading-card span{font:9px monospace;color:var(--green)}.reading-card b{display:block;margin:9px 0;font-size:12px}.reading-card small{color:#718079;font-size:10px;line-height:1.4}.reading-detail{margin-top:16px;padding:24px;background:#edf5e7;border-left:3px solid var(--green);font-size:13px;line-height:1.7;max-width:900px}.reading-detail h3{margin:0 0 12px;font-size:22px}.reading-detail h4{margin:25px 0 8px;font-size:16px}.reading-detail p{margin:0 0 14px}.reading-detail .source{display:inline-block;margin:8px 12px 0 0;color:var(--green)}.reading-meta{font:10px monospace;color:#718079}.study-chapter{border-top:1px solid #c9d8ca;padding-top:16px;margin-top:18px}.study-example{background:#fff;border-left:3px solid var(--lime);padding:14px;margin:12px 0 22px}.source-box{background:#fff;border:1px solid var(--line);padding:14px;margin-top:25px}.source-box strong{display:block}.quiz-options{display:grid;gap:8px;margin:15px 0}.quiz-option{border:1px solid #bfd1c2;background:#fff;color:var(--ink);padding:12px;text-align:left;cursor:pointer}.quiz-option.correct{background:#dcefe5;border-color:var(--green)}.quiz-option.wrong{background:#f8e8df;border-color:var(--orange)}.quiz-feedback{min-height:24px;color:var(--green);font-size:11px}.quiz-footer{display:flex;align-items:center;justify-content:space-between;gap:12px}.reading-note{color:#718079;font-size:10px;line-height:1.5;margin:12px 0 0}@media(max-width:850px){.reading-list{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:650px){.reading-list{grid-template-columns:1fr}}`;
document.head.append(libraryStyle);
const narrationStyle = document.createElement('style');
narrationStyle.textContent = `.study-audio{background:#173b2d;color:#fff;border-radius:6px;padding:16px;margin:18px 0 24px}.study-audio strong{display:block;margin-bottom:10px;font-size:14px}.study-audio p{color:#cfdfd3;margin:8px 0 0;font-size:11px}.study-audio-controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.study-audio button,.study-audio select{border:1px solid #8bb5a0;border-radius:4px;background:#f8faf3;color:#173b2d;padding:8px 10px;font:12px Arial;cursor:pointer}.study-audio button:disabled{opacity:.5;cursor:not-allowed}.study-audio label{display:flex;align-items:center;gap:5px;font-size:11px}.study-audio select.audio-chapter{max-width:min(100%,290px)}.study-audio-status{display:block;min-height:17px;margin-top:10px;color:#d6e9db;font:11px Arial}`;
document.head.append(narrationStyle);

const reading = document.createElement('section');
reading.className = 'panel reading';
reading.id = 'leituras';
reading.innerHTML = `<div class="heading"><div><p class="eyebrow accent">APOSTILAS POR MATÉRIA</p><h2>Materiais de estudo</h2></div><span class="mono">${modules.length} módulos</span></div><p class="reading-note">Conteúdo autoral organizado pela interseção dos editais de Auditor Fiscal de SP (2025), GO (2025) e CE (2026). A legislação do Tocantins e as matérias complementares exigem conferência no edital futuro.</p><div class="reading-list"></div><article class="reading-detail" id="readingDetail">Escolha um módulo para abrir a apostila e responder às questões.</article>`;
document.querySelector('#simulado').before(reading);
const list = reading.querySelector('.reading-list');
const detail = reading.querySelector('#readingDetail');
const quizPanel = document.querySelector('#simulado');
const progressKey = 'rota-sefaz-modules-v2';
let progress;
try { progress = JSON.parse(localStorage.getItem(progressKey) || '{}'); } catch { progress = {}; }
let active = null;
let questionIndex = 0;
let score = 0;
let answered = false;
const narrator = { chapters: [], chapter: 0, part: 0, mode: 'stopped', token: 0 };

function speechParts(value) {
  const sentences = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [value];
  const parts = [];
  for (const sentence of sentences) {
    const words = sentence.trim().split(/\s+/);
    let part = '';
    for (const word of words) {
      if (part && (part + ' ' + word).length > 220) { parts.push(part); part = ''; }
      part += (part ? ' ' : '') + word;
    }
    if (part) parts.push(part);
  }
  return parts;
}
function stopNarration(message = 'Leitura parada.') {
  narrator.token++;
  narrator.mode = 'stopped';
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const player = detail.querySelector('.study-audio');
  if (player) {
    player.querySelector('[data-audio="play"]').textContent = '▶ Reproduzir';
    player.querySelector('[data-audio="pause"]').disabled = true;
    player.querySelector('.study-audio-status').textContent = message;
  }
}
function setNarrationStatus(message) {
  const player = detail.querySelector('.study-audio');
  if (!player) return;
  player.querySelector('.study-audio-status').textContent = message;
  player.querySelector('[data-audio="pause"]').disabled = narrator.mode !== 'running';
  player.querySelector('[data-audio="play"]').textContent = narrator.mode === 'paused' ? '▶ Continuar' : '▶ Reproduzir';
}
function speakNext(token) {
  if (token !== narrator.token || narrator.mode !== 'running') return;
  if (narrator.chapter >= narrator.chapters.length) {
    stopNarration('Leitura concluída.');
    return;
  }
  const chapter = narrator.chapters[narrator.chapter];
  if (narrator.part >= chapter.parts.length) {
    narrator.chapter++;
    narrator.part = 0;
    speakNext(token);
    return;
  }
  const player = detail.querySelector('.study-audio');
  if (!player) return;
  player.querySelector('[data-audio="chapter"]').value = String(narrator.chapter);
  const utterance = new SpeechSynthesisUtterance(chapter.parts[narrator.part]);
  utterance.lang = 'pt-BR';
  utterance.rate = Number(player.querySelector('[data-audio="speed"]').value);
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.toLowerCase() === 'pt-br') || voices.find(v => v.lang.toLowerCase().startsWith('pt'));
  if (voice) utterance.voice = voice;
  utterance.onend = () => { if (token === narrator.token && narrator.mode === 'running') { narrator.part++; speakNext(token); } };
  utterance.onerror = event => {
    if (token !== narrator.token || event.error === 'canceled' || event.error === 'interrupted') return;
    stopNarration('Não foi possível reproduzir a voz neste navegador.');
  };
  setNarrationStatus(`Capítulo ${narrator.chapter + 1} de ${narrator.chapters.length}: ${chapter.title}`);
  window.speechSynthesis.speak(utterance);
}
function startNarration(index) {
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    setNarrationStatus('Este navegador não oferece leitura em voz alta.');
    return;
  }
  stopNarration('Preparando leitura…');
  narrator.chapter = index;
  narrator.part = 0;
  narrator.mode = 'running';
  const token = narrator.token;
  // Impede que o player resumido da página fique visualmente em reprodução.
  const shortPlayer = document.querySelector('#play');
  if (shortPlayer) { shortPlayer.dataset.playing = 'false'; shortPlayer.textContent = '▶'; }
  speakNext(token);
}
function installNarration(guide) {
  narrator.chapters = [
    ...guide.sections.map(([title, body, example]) => ({title, parts: speechParts(`${title}. ${body} ${example ? 'Exemplo resolvido. ' + example : ''}`)})),
    ...workedCases[active.id].map(([title, body]) => ({title, parts: speechParts(`${title}. ${body}`)}))
  ];
  const player = document.createElement('div');
  player.className = 'study-audio';
  player.innerHTML = `<strong>Ouvir esta apostila</strong><div class="study-audio-controls"><button type="button" data-audio="play">▶ Reproduzir</button><button type="button" data-audio="pause" disabled>Ⅱ Pausar</button><button type="button" data-audio="stop">■ Parar</button><label>Capítulo <select class="audio-chapter" data-audio="chapter" aria-label="Escolher capítulo para leitura">${narrator.chapters.map((chapter, index) => `<option value="${index}">${index + 1}. ${chapter.title}</option>`).join('')}</select></label><label>Velocidade <select data-audio="speed" aria-label="Velocidade da leitura"><option value="0.8">0,8×</option><option value="1">1×</option><option value="1.25">1,25×</option><option value="1.5">1,5×</option><option value="2">2×</option></select></label></div><span class="study-audio-status" role="status">Pronto para ler todos os capítulos e casos resolvidos.</span><p>Usa a voz em português disponível no seu navegador. A leitura continua automaticamente até o fim da apostila.</p>`;
  detail.querySelector('h3').after(player);
  const speed = localStorage.getItem('rota-sefaz-audio-speed') || '1';
  if ([...player.querySelector('[data-audio="speed"]').options].some(o => o.value === speed)) player.querySelector('[data-audio="speed"]').value = speed;
  player.querySelector('[data-audio="play"]').onclick = () => {
    if (narrator.mode === 'paused') {
      window.speechSynthesis.resume(); narrator.mode = 'running';
      setNarrationStatus(`Capítulo ${narrator.chapter + 1} de ${narrator.chapters.length}: ${narrator.chapters[narrator.chapter].title}`);
    } else startNarration(Number(player.querySelector('[data-audio="chapter"]').value));
  };
  player.querySelector('[data-audio="pause"]').onclick = () => {
    if (narrator.mode !== 'running') return;
    window.speechSynthesis.pause(); narrator.mode = 'paused';
    setNarrationStatus(`Pausado no capítulo ${narrator.chapter + 1}.`);
  };
  player.querySelector('[data-audio="stop"]').onclick = () => stopNarration();
  player.querySelector('[data-audio="chapter"]').onchange = event => {
    const index = Number(event.target.value);
    if (narrator.mode !== 'stopped') startNarration(index);
    else setNarrationStatus(`Capítulo ${index + 1} selecionado. Pressione Reproduzir.`);
  };
  player.querySelector('[data-audio="speed"]').onchange = event => {
    localStorage.setItem('rota-sefaz-audio-speed', event.target.value);
    if (narrator.mode === 'running') setNarrationStatus(`Velocidade ${event.target.value}×; aplicada na próxima frase.`);
  };
}

function renderCards() {
  list.innerHTML = modules.map(m => `<button class="reading-card" data-module="${m.id}" aria-pressed="${active?.id === m.id}"><span>${m.area.toUpperCase()}</span><b>${m.name}</b><small>${m.summary}</small><small>${m.lessons.length} aulas · ${m.questions.length} questões · melhor resultado: ${progress[m.id] ?? '—'}/${m.questions.length}</small></button>`).join('');
  list.querySelectorAll('.reading-card').forEach(card => card.onclick = () => openModule(card.dataset.module));
}
function openModule(id, scroll = true) {
  stopNarration();
  active = modules.find(m => m.id === id);
  questionIndex = 0; score = 0;
  renderCards();
  const guide = studyGuide[active.id];
  detail.innerHTML = `<p class="reading-meta">${active.area.toUpperCase()} · ${guide.overlap}</p><h3>${active.name}</h3><p>${active.summary}</p>${guide.sections.map(([title, body, example]) => `<section class="study-chapter"><h4>${title}</h4><p>${body}</p>${example ? `<div class="study-example"><strong>Exemplo resolvido</strong><p>${example}</p></div>` : ''}</section>`).join('')}<section class="study-chapter"><h4>Aplicação em prova</h4>${workedCases[active.id].map(([title, body]) => `<div class="study-example"><strong>${title}</strong><p>${body}</p></div>`).join('')}</section><div class="source-box"><strong>Base da seleção de temas</strong><p>Os links abaixo são os programas oficiais usados na comparação. O texto desta apostila é uma síntese didática, não uma reprodução dos editais.</p>${editalSources.map(source => `<a class="source" href="${source.url}" target="_blank" rel="noopener">${source.name} ↗</a>`).join('')}${active.source ? `<a class="source" href="${active.source}" target="_blank" rel="noopener">Fonte oficial do Tocantins ↗</a>` : ''}</div><p class="reading-note">Após a leitura, responda às questões do módulo abaixo.</p>`;
  installNarration(guide);
  renderQuestion();
  if (scroll) detail.scrollIntoView({behavior:'smooth', block:'start'});
}
function renderQuestion() {
  if (!active) return;
  answered = false;
  const [prompt, ...rest] = active.questions[questionIndex];
  const choices = rest.slice(0, 4);
  quizPanel.innerHTML = `<div class="quiz-copy"><p class="eyebrow accent">SIMULADO · ${active.name.toUpperCase()} · ${questionIndex + 1}/${active.questions.length}</p><h2>${prompt}</h2><p>Escolha uma alternativa para ver a explicação.</p><div class="quiz-options">${choices.map((choice, i) => `<button class="quiz-option" data-choice="${i}">${String.fromCharCode(65 + i)}. ${choice}</button>`).join('')}</div><div class="quiz-feedback" id="moduleFeedback" aria-live="polite"></div><div class="quiz-footer"><span>${score} acertos</span><button class="button" id="moduleNext" disabled>${questionIndex === active.questions.length - 1 ? 'Concluir' : 'Próxima'} →</button></div></div><div class="quiz-preview"><span>MATERIAL ATIVO</span><p>${active.name}</p><div>O melhor resultado fica salvo neste dispositivo.</div></div>`;
  quizPanel.querySelectorAll('[data-choice]').forEach(button => button.onclick = () => {
    if (answered) return;
    answered = true;
    const q = active.questions[questionIndex];
    const correct = q[5];
    const selected = Number(button.dataset.choice);
    quizPanel.querySelectorAll('[data-choice]')[correct].classList.add('correct');
    if (selected === correct) score++;
    else button.classList.add('wrong');
    quizPanel.querySelector('#moduleFeedback').textContent = `${selected === correct ? 'Correto.' : 'Revise.'} ${q[6]}`;
    quizPanel.querySelector('.quiz-footer span').textContent = `${score} acertos`;
    quizPanel.querySelector('#moduleNext').disabled = false;
  });
  quizPanel.querySelector('#moduleNext').onclick = () => {
    if (questionIndex < active.questions.length - 1) { questionIndex++; renderQuestion(); return; }
    progress[active.id] = Math.max(progress[active.id] || 0, score);
    localStorage.setItem(progressKey, JSON.stringify(progress));
    renderCards();
    quizPanel.querySelector('.quiz-copy').innerHTML = `<p class="eyebrow accent">MÓDULO CONCLUÍDO</p><h2>${score} de ${active.questions.length} acertos</h2><p>Releia os pontos difíceis e tente novamente.</p><button class="button" id="moduleRestart">Refazer módulo ↻</button>`;
    quizPanel.querySelector('#moduleRestart').onclick = () => {questionIndex = 0; score = 0; renderQuestion();};
  };
}
renderCards();
openModule('constitucional', false);
