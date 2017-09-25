var disciplinas = [{
  "id": 0,
  "nome": "Computação e Sociedade",
  "ementa": "História da computação. Estudo e análise de casos de aplicação de computadores na sociedade e para o meio ambiente. Subáreas da computação e áreas interdisciplinares. Importância e desafios da computação no Brasil e no mundo. Cursos de computação e aspectos profissionais: tipos de cursos, perfis profissionais, demanda do mercado,organizações e associações na área, regulamentação da profissão. mercado, organizações e associações na área, regulamentação da profissão. Leis e normas relacionadas à Informática. Questões ambientais, raciais, de saúde e de inclusão digital relacionadas à Computação. Ética na Computação. Empresas de tecnologia da informação. Incubadoras de empresas."
}, {
  "id": 1,
  "nome": "Introdução à Programação",
  "ementa": "Introdução a algoritmos. Conceitos básicos de programas: constantes; tipos de dados primitivos; variáveis; atribuição; entrada e saída de dados; expressões; estruturas de decisão; estruturas de repetição. Ponteiro. Estruturas de dados homogêneas e heterogêneas: vetores, matrizes, cadeias de caracteres, registros. Subprogramas: funções; passagens de parâmetros por valor e por referência, recursividade. Manipulação de arquivos: abertura, fechamento, leitura e gravação. Tipos de acesso a arquivos: sequencial e indexado. Tipos de arquivos (texto e binário). Transcrição de algoritmos para uma linguagem de programação. Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas."
}, {
  "id": 2,
  "nome": "Cálculo 1A",
  "ementa": "Números reais. Funções reais de uma variável real e suas inversas. Noções sobre cônicas. Limite e continuidade. Derivadas e aplicações. Integrais. Técnicas de Integração. Integrais impróprias. Polinômio de Taylor. Aplicações."
}]

var idx = lunr(function() {
  this.ref('id')
  this.field('nome')
  this.field('ementa')

  disciplinas.forEach(function(doc) {
    this.add(doc)
  }, this)
})

var documentIndexes = []

var resultados = idx.search('programação')

var resultadosBusca = document.getElementById('resultados-busca')

if (resultados.length > 0) {

  resultados.forEach(match => documentIndexes.push(Number(match.ref)))

  documentIndexes.forEach(id => {

    var resultadoTitle = '<li><h4>' + disciplinas[id].nome + '</h4>';
    var resultadoementa = '<p>' + disciplinas[id].ementa + '</p></li>';

    resultadosBusca.innerHTML += resultadoTitle + resultadoementa;
  })

}
