function topicosMapper(topico) {

  var descricao = "";

  if (topico.descricao) {
    descricao = topico.descricao.join(' ')
  }
  if (topico.conteudo[0].subtopico) {
    topico.conteudo.forEach(conteudo => {
      descricao += conteudo.subtopico + " " + conteudo.detalhe.join(" ")
    })
  }

  return {
    "topico": topico.topico,
    "descricao": descricao,
  }

}

var stringBusca = 'curricular';

$.getJSON('data.json').done(dados => {
  var disciplinas = dados.disciplina;
  var topicos = dados.informacoes;
  var indiceDisciplinas = lunr(function() {
    this.ref('id')
    this.field('nome')
    this.field('ementa')
    this.field('swebok')
    this.field('bibliografiaBasica')
    this.field('bibliografiaComplementar')

    disciplinas.forEach(function(disc) {
      this.add({
        "id": disc.id,
        "nome": disc.nome,
        "ementa": disc.ementa.join(" "),
        "swebok": disc.swebok.join(" "),
        "bibliografiaBasica": disc.bibliografiaBasica.join(" "),
        "bibliografiaComplementar": disc.bibliografiaComplementar.join(" ")
      })
    }, this)
  })

  var indicePPC = lunr(function() {
    this.ref('topico')
    this.field('descricao')

    topicos.map(topicosMapper).forEach(topico => this.add(topico));
  })

  var documentIndexesDisciplinas = []
  var documentIndexesPPC = []

  var resultadosDisciplinas = indiceDisciplinas.search(stringBusca)
  var resultadosPPC = indicePPC.search(stringBusca)

  var resultadosBuscaDisciplinas = document.getElementById('busca-disciplinas')
  var resultadosBuscaPPC = document.getElementById('busca-ppc')

  if (resultadosDisciplinas.length > 0) {

    resultadosDisciplinas.forEach(match => documentIndexesDisciplinas.push(Number(match.ref)))

    documentIndexesDisciplinas.forEach(id => {

      var resultadoNome = '<li><h4><a href="disciplinas.html#"' + disciplinas[id].id + ">" + disciplinas[id].nome + '</a></h4>';
      var resultadoEmenta = '<p>' + disciplinas[id].ementa + '</p></li>';

      resultadosBuscaDisciplinas.innerHTML += resultadoNome + resultadoEmenta;
    })

  }

  if (resultadosPPC.length > 0) {

    resultadosPPC.forEach(match => {
      documentIndexesPPC.push(match.ref);
    })

    documentIndexesPPC.forEach(topico => {
      console.log(topico)
      var resultadoTopico = '<li><h4>' + topico + '</h4></li>';

      resultadosBuscaPPC.innerHTML += resultadoTopico;
    })
  }
});
