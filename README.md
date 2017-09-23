# Conhecendo o Bacharelado em Engenharia de Software

## Estilo de código

HTML, CSS, Javascript

Tab: 2 espaços  
Identation: 2  
Continuation ident: 4  

### Setup:
atom -> instalar pacote atom-beautify  
vim -> entrar no modo de comando (apertar esc) e entrar : set expandtab shiftwidth=2 softtabstop=2  
ides intellij (idea, webstorm...) -> entrar Ctrl + Alt + S, ir em Editor -> Code Style e adicionar os valores acima.  

## Getting Started

Como clonar o projeto:
```bash
git clone https://github.com/Edionay/integracao2017.git
```

Dentro da pasta criada (por padrão: integracao2017):
```bash
git checkout dev
```

### Contribuindo com o projeto

Adicione os arquivos à área staged do git rodando este comando na pasta raiz do projeto:

```bash
git add .
```

Após isso, adicione uma mensagem resumindo suas modificações:

```bash
git commit -m "Sua mensagem"
```

Mude para a branch gh-pages:

```bash
git checkout gh-pages
```

Faça o merge do seu commit, esse comando gerará um pull request para ser aceita no github do projeto.

```bash
git merge --no-ff dev

git push origin gh-pages
```

Após a aprovação da pull request, suas modificações estarão disponíveis no nosso site (edionay.com/integracao2017)

## Frameworks usados

* [Materialize](http://http://materializecss.com/) - Framework CSS
