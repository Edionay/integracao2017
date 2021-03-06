interface Periodo {
  numero: number;
  disciplinas: Disciplina[];
}

export interface Disciplina {
  id: number;
  nome: string;
  ementa: string[];
  cargaHorariaTotal: number;
  cargaHorariaTeorica: number;
  cargaHorariaPratica: number;
  periodo: number;
  obrigatoria: string;
  preRequisitos: string[];
  nucleo: string;
  bibliografia: string[];
  unidade: string;
  relacaoComSwebok: string;
}

export interface Topico {
  topico: string;
  id: string;
  descricao: string[];
  conteudo: Subtopico[];
}

interface Subtopico {
  subtopico: string;
  detalhe: string[];
}



export const disciplinas: Disciplina[] = [
  {
    'id': 0,
    'nome': 'Computação e Sociedade',
    'ementa': [
      'História da computação',
      'Estudo e análise de casos de aplicação de computadores na sociedade e para o meio ambiente',
      'Subáreas da computação e áreas interdisciplinares',
      'Importância e desafios da computação no Brasil e no mundo',
      'Cursos de computação e aspectos profissionais: tipos de cursos, ' +
      'perfis profissionais, demanda do mercado,organizações e associações na área, regulamentação da profissão',
      'mercado, organizações e associações na área, regulamentação da profissão',
      'Leis e normas relacionadas à Informática',
      'Questões ambientais, raciais, de saúde e de inclusão digital relacionadas à Computação',
      'Ética na Computação',
      'Empresas de tecnologia da informação',
      'Incubadoras de empresas.'
    ],
    'cargaHorariaTotal': 32,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 0,
    'periodo': 1,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Nenhum'],
    'nucleo': 'Comum',
    'bibliografia': ['Nenhum'],
    'unidade': 'INF',
    "relacaoComSwebok": "Software engineering professional practice prática profissional em engenharia de software;"
  },
  {
    'id': 1,
    'nome': 'Introdução à Programação',
    'ementa': [
      'Introdução a algoritmos',
      'Conceitos básicos de programas: constantes; tipos de dados primitivos; variáveis; atribuição; entrada e saída de dados; expressões; estruturas de decisão; estruturas de repetição',
      'Ponteiro',
      'Estruturas de dados homogêneas e heterogêneas: vetores, matrizes, cadeias de caracteres, registros',
      'Subprogramas: funções; passagens de parâmetros por valor e por referência, recursividade',
      'Manipulação de arquivos: abertura, fechamento, leitura e gravação',
      'Tipos de acesso a arquivos: sequencial e indexado',
      'Tipos de arquivos (texto e binário)',
      'Transcrição de algoritmos para uma linguagem de programação',
      'Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas.'
    ],
    'cargaHorariaTotal': 128,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 80,
    'periodo': 1,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Nenhum'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação"
  },
  {
    'id': 2,
    'nome': 'Cálculo 1A',
    'ementa': [
      'Números reais',
      'Funções reais de uma variável real e suas inversas',
      'Noções sobre cônicas',
      'Limite e continuidade',
      'Derivadas e aplicações',
      'Integrais',
      'Técnicas de Integração',
      'Integrais impróprias',
      'Polinômio de Taylor',
      'Aplicações.',
    ],
    'cargaHorariaTotal': 96,
    'cargaHorariaTeorica': 96,
    'cargaHorariaPratica': 0,
    'periodo': 1,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Nenhum'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'IME',
    "relacaoComSwebok": "Mathematicals foundations, fundamentos matemáticos, matemática;"
  },
  {
    'id': 3,
    'nome': 'Fundamentos de Matemática para Computação',
    'ementa': [
      'Noções de lógica',
      'Introdução a demonstrações',
      'Indução matemática, Recursividade e Relações de Recorrência, Conjuntos e Combinatória',
      'Séries e sequências',
      'Relações e Funções',
      'Representações numéricas e Mudança de base numérica.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 1,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Nenhum'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Mathematicals foundations, fundamentos matemáticos, matemática, Computing foundations, fundamentos da computação;"
  },
  {
    'id': 4,
    'nome': 'Arquitetura de Computadores',
    'ementa': [
      'Visão geral dos computadores modernos',
      'Evolução da arquitetura dos computadores',
      'Memória e representação de dados e instruções',
      'Processador, ciclo de instrução, formato e endereçamento',
      'Noções básicas de programação em linguagem de montagem',
      'Dispositivos de entrada e saída',
      'Sistemas de interconexão (barramentos)',
      'Interfaceamento e técnicas de entrada e saída',
      'Hierarquia de memória',
      'Introdução a arquiteturas paralelas e métricas de desempenho.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 2,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Fundamentos de Matemática para Computação'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"
  },
  {
    'id': 5,
    'nome': 'Algoritmos e Estruturas de Dados 1',
    'ementa': [
      'Noções de complexidade de algoritmos (notações de complexidade)',
      'Algoritmos de pesquisa: pesquisa sequencial e binária.',
      'Algoritmos de ordenação.',
      'Tipos abstratos de dados.',
      'Estruturas de dados utilizando vetores: pilhas, filas, listas (simples e circulares).',
      'Estruturas de dados com alocação dinâmica de memória: pilhas, filas, listas (simplesmente encadeadas, duplamente encadeadas e circulares).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 2,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Introdução a Programação'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"

  },
  {
    'id': 6,
    'nome': 'Probabilidade e Estatística A',
    'ementa': [
      'Estatística descritiva',
      'Noções sobre amostragem',
      'Introdução à teoria de conjuntos',
      'Introdução à teoria de probabilidade: espaço amostral, eventos, frequência relativa, fundamentos de probabilidade, probabilidade condicional, eventos independentes e teorema de Bayes',
      'Variáveis aleatórias: conceitos básicos, esperança e variância',
      'Distribuições discretas de probabilidade: uniforme, binomial e Poisson',
      'Distribuições contínuas de probabilidade: uniforme, exponencial, normal e t-Student',
      'Estimação pontual e intervalar para uma população: média e proporção.Teste de hipóteses para uma população: média e proporção',
      'Correlação linear e regressão linear simples.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 2,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Cálculo 1A'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'IME',
    "relacaoComSwebok": " Mathematicals foundations, fundamentos matemáticos, matemática;"
  },
  {
    'id': 7,
    'nome': 'Álgebra Linear',
    'ementa': [
      'Sistemas lineares e matrizes',
      'Espaços vetoriais',
      'Transformações lineares',
      'Autovalores e autovetores.Espaços com produto interno.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 2,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Nenhum'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'IME',
    "relacaoComSwebok": "Mathematicals foundations, fundamentos matemáticos, matemática;"
  },
  {
    'id': 8,
    'nome': 'Lógica Matemática',
    'ementa': [
      'Noções básicas: linguagem natural vs linguagens formais; verdade, validade, satisfatibilidade; lógica proposicional (sintaxe e semântica, propriedades e relações semânticas, consequência lógica, simplificação de fórmulas); lógica de primeira ordem (sintaxe e semântica, propriedades e relações semânticas, formas normais);',
      'Métodos de validação: métodos diretos de prova; métodos de prova por contradição; indução estrutural.',
      'Linguagem para experimentação.',
      'Aplicações básicas.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 2,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Fundamentos da Matemática para Computação'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Mathematicals foundations, fundamentos matemáticos;"

  },
  {
    'id': 9,
    'nome': 'Programação Orientada a Objetos',
    'ementa': [
      'Abstração e tipos abstratos de dados.Classes, métodos, encapsulamento, interface',
      'Mensagens, instâncias e inicialização',
      'Herança e composição.Polimorfismo.Uso de uma linguagem orientada a objetos.Noções de UML.Noções de padrões de projeto orientado a objetos'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 3,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Introdução a Programação'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software Design, projeto de software, Software construction, construção de software;"
  },
  {
    'id': 10,
    'nome': 'Algoritmos e Estruturas de Dados 2',
    'ementa': [
      'Árvores: formas de representação, recursão em árvores, árvores binárias, árvores binárias de busca, árvores balanceadas (AVL e rubro-negras).',
      'Filas de prioridades',
      'Heaps, Heapsort',
      'Hashing: tipos de funções de hashing; tratamento de colisões.Definições de Grafos.',
      'Estruturas de Dados para representação de grafos.Algoritmos básicos em grafos.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 3,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Algoritmos e Estruturas de Dados 1'],
    'nucleo': 'Comum',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"
  },
  {
    'id': 11,
    'nome': 'Optativa 1',
    'ementa': ['Infefinida'],
    'cargaHorariaTotal': 0,
    'cargaHorariaTeorica': 0,
    'cargaHorariaPratica': 0,
    'periodo': 3,
    'obrigatoria': 'Infedinido',
    'preRequisitos': ['Nenhum'],
    'nucleo': '',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": ""
  },
  {
    'id': 12,
    'nome': 'Linguagens e Paradigmas de Programação',
    'ementa': [
      'Estudo dos conceitos de linguagens de programação e dos paradigmas de programação: procedural, funcional, lógico, orientado a objeto e script.',
      'Reflexão sobre as características desejáveis em uma linguagem de programação e os critérios de seleção de linguagens de acordo com as especificidades dos domínios de aplicação.',
      'Descrição de sintaxe e semântica.',
      'Estudo sobre tipos de dados, estruturas de controle, ambientes de execução, variáveis, expressões e subprogramas em linguagens de programação.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 3,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Cálculo 1A'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": " Computing foundations, fundamentos da computação;"
  },
  {
    'id': 13,
    'nome': 'Engenharia de Software',
    'ementa': [
      'Requisitos de software.',
      'Projeto (design) de software.',
      'Construção de software.',
      'Teste de software.',
      'Manutenção de software.',
      'Gerência de configuração de software.',
      'Gerência de projeto de software.',
      'Processo de engenharia de software.',
      'Modelos e métodos de engenharia de software.',
      'Qualidade de software.',
      'Prática profissional de engenharia de software.',
      'Economia para engenharia de software.',
      'Fundamentos de engenharia.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 3,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": " Software testing, teste de software, Software Engineering Managment, gerencia de engenharia de software, software configuration management, gerencia de configuraço de software, software engineering processo, processo de software, software engineering models and methods, métodos e modelos de engenharia de software, software quality, qualidade de software, software engineering professional practice, prática profissional em engenharia de software, software engineering economics, economia em engenharia de software, software requirements, requisitos de software, software design, projeto de software, software construction, construção de software, software maintenance, manutenção de software;"
  },
  {
    'id': 14,
    'nome': 'Análise e Projeto de Algoritmos',
    'ementa': [
      'Medidas de complexidade, análise assintótica de limites de complexidade para algoritmos iterativos e recursivos, técnicas de prova de cotas inferiores.',
      'Corretude de Algoritmos.',
      'Exemplos de análise de algoritmos.',
      'Técnicas de projeto de algoritmos: dividir para conquistar, programação dinâmica, algoritmos gulosos.',
      'Introdução à NP-Completude.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 4,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Fundamentos de Matemática para Computação, Algoritmos e Estruturas de Dados 2'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": " Mathematicals foundations, fundamentos matemáticos, matemática, Computing foundations, fundamentos da computação;"

  },
  {
    'id': 15,
    'nome': 'Interação Humano-Computador',
    'ementa': [
      'Aspectos gerais sobre interação humano-computador',
      'Características humanísticas e biológicas, envolvendo questões sobre genealogia, gênero, aspectos étnicos, raciais e culturais, direitos e aspectos políticos, deficiências, limitações e capacidades, dentre outros',
      'Ciclo da interação e principais problemas. Metas de usabilidade e experiência do usuário',
      'Fatores humanos em software interativo: teoria, princípios e regras básicas. Modelos conceituais e metáforas',
      'Estilos de interação. Elementos de interação (menus, formulários, manipulação direta e outros). Voz, linguagem natural, sons, páginas Web. Padrões para interface',
      'Localização e internacionalização.',
      'Princípios de projeto de interfaces humano-computador. Métodos de projeto de interação. Projeto visual (cores, ícones, fontes e outros). Tempo de resposta e retroalimentação.',
      'Dispositivos de interação.',
      'Métodos de avaliação de interfaces: avaliação heurística, abordagens para testes realizados com apoio de usuários, técnicas de testes para páginas Web, entre outros',
      'Visão geral de ferramentas de desenvolvimento de interfaces humano-computador.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 4,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Algoritmos e Estruturas de Dados 1, Probabilidade e Estatística A'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software testing, teste de software, software design, projeto de software;"

  },
  {
    'id': 16,
    'nome': 'Optativa 2',
    'ementa': [''],
    'cargaHorariaTotal': 1,
    'cargaHorariaTeorica': 1,
    'cargaHorariaPratica': 1,
    'periodo': 4,
    'obrigatoria': '',
    'preRequisitos': [''],
    'nucleo': '',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": ""

  },
  {
    'id': 17,
    'nome': 'Banco de Dados',
    'ementa': [
      'Conceitos básicos de Banco de Dados',
      'Modelo relacional',
      'Linguagens para Banco de Dados: álgebra relacional, cálculo relacional e SQL',
      'Modelo Entidade-Relacionamento e extensões',
      'Mapeamento ER-relacional',
      'Normalização.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 16,
    'periodo': 4,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Lógica Matemática'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": " software design, projeto de software, computing foundations;"

  },
  {
    'id': 18,
    'nome': 'Projeto de Software',
    'ementa': [
      'Fundamentos de design de software',
      'Questões básicas de design de software: concorrência, controle e tratamento de eventos, persistência de dados, distribuição, tratamento de erro e exceção, tolerância a falhas, interação e apresentação, e segurança',
      'Estrutura e arquitetura de software',
      'Projeto de interface de usuário',
      'Análise de qualidade e avaliação de design de software',
      'Notação de design de software',
      'Métodos e estratégias de design de software',
      'Ferramentas de design de software.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 4,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Programação Orientada a Objetos, Engenharia de Software'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software design, projeto de software;"

  },
  {
    'id': 19,
    'nome': 'Sistemas Operacionais',
    'ementa': [
      'Conceitos de Hardware e Software',
      'Tipos de Sistemas Operacionais',
      'Organização da Estrutura Interna do Sistema Operacional',
      'Gerência de Processos',
      'Gerência do Processador',
      'Gerência de Memória',
      'Gerência de Dispositivos de Entrada e Saída',
      'Sistemas de Arquivos',
      'Estudos de casos de sistemas operacionais atuais'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Arquitetura de Computadores'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"

  },
  {
    'id': 20,
    'nome': 'Pesquisa Operacional',
    'ementa': [
      'Modelagem',
      'Problema de Programação Linear (PL)',
      'Resolução gráfica de PL',
      'Algoritmo Simplex',
      'Dualidade',
      'Algoritmo Simplex-Dual',
      'Pós-otimização e Análise de Sensibilidade.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Álgebra Linear'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"

  },
  {
    'id': 21,
    'nome': 'Linguagens Formais e Autômatos',
    'ementa': [
      'Conceitos básicos de linguagens',
      'Mecanismos geradores (gramáticas) e reconhecedores (determinísticos e não determinísticos) de linguagens regulares, livres de contexto e sensíveis ao contexto; relação entre estas classes de linguagens e suas principais propriedades',
      'Hierarquia de Chomsky'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Fundamentos de Matemática para Computação'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"

  },
  {
    'id': 22,
    'nome': 'Redes de computadores',
    'ementa': [
      'Fundamentos',
      'Arquitetura de Redes TCP/IP (Internet)',
      'Camadas de Aplicação, Transporte, Rede, Enlace e Física',
      'Gerenciamento de Redes',
      'Redes Sem Fio e Mobilidade',
      'Estudo de Caso de Tópicos Emergentes em Redes.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"
  },
  {
    'id': 23,
    'nome': 'Introdução à Língua Brasileira de Sinais',
    'ementa': [
      'Introdução às práticas de compreensão e produção em LIBRAS através do uso de estruturas e funções comunicativas elementares',
      'Concepções sobre a Língua de Sinais',
      'O surdo e a sociedade'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 10,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'Letras',
    "relacaoComSwebok": "Software engineering professional practice, prática profissional em engenharia de software;"

  },
  {
    'id': 24,
    'nome': 'Compiladores',
    'ementa': [
      'A estrutura de um compilador',
      'Análises léxica e sintática',
      'Definições dirigidas por sintaxe e análise semântica',
      'Organização da tabela de símbolos',
      'Representação intermediária do programa-fonte',
      'Geração do código-objeto da compilação',
      'Introdução à otimização do código-objeto',
      'Implementação de um compilador'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 10,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Algoritmos e Estruturas de Dados 2, Linguagens Formais e Autômatos'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Computing foundations, fundamentos da computação;"

  },
  {
    'id': 25,
    'nome': 'Sistemas Distribuídos',
    'ementa': [
      'Introdução a Sistemas Distribuídos',
      'Invocação Remota',
      'Objetos Distribuídos',
      'Arquiteturas Orientadas a Serviços e utilização de serviços Web',
      'Computação Móvel e Ubíqua',
      'Estudo de Casos de Tópicos Emergentes em Sistemas Distribuídos'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 10,
    'obrigatoria': 'Sim',
    'preRequisitos': ['Programação Orientada a Objetos'],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software construction, construção de software;"

  },
  {
    'id': 26,
    'nome': 'Construção de Software',
    'ementa': [
      'Visão geral (4h): construção (minimizar complexidade, antecipação de mudança, verificação, padrões), projeto de software (software design), qualidade de produto',
      'Planejamento (8h): linguagens de programação e processos de construção',
      'Gerência de construção (16h): controle de versão, inspeção e revisão de código',
      'Fundamentos de codificação (32h): estratégias recomendadas para criar código, variáveis, classes, interfaces, polimorfismo, rotinas, recursão, condições, laços, tratamento de exceção, reflexão, programação defensiva, padrão de codificação (leiaute e estilo), documentação, ferramentas de programação',
      'Projeto (design) detalhado e codificação (32h): noções de projeto detalhado, especificação de projeto, análise sintática (parsing), expressões regulares, parametrização (generics), closure, logging, configuração de software em tempo de execução',
      'Internacionalização',
      'Técnicas de construção baseadas em estado e tabelas',
      'Refatoração (8h)',
      'Testes de unidade (16h)',
      'Detecção e remoção de defeitos (debugging) (8h)',
      'Integração (4h): integração contínua.'
    ],
    'cargaHorariaTotal': 128,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 80,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'Específico',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software construction, construção de software;"

  },
  {
    'id': 27,
    'nome': 'Modelagem de Software',
    'ementa': [
      'Conceitos (4h): software, qualidade de software, requisitos de software, projeto de software',
      'Processo de projeto de software (4h)',
      'Notações para registro de modelos orientados a objetos (16h)',
      'Modelagem de software orientado a objetos (40h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 16,
    'cargaHorariaPratica': 48,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'Específico',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software construction, construção de software, software design, projeto de software;"

  },
  {
    'id': 28,
    'nome': 'Processos de Software',
    'ementa': [
      'Visão geral (8h): processo, método e modelo',
      'Processos específicos de software: processos de implementação (12h), processos de suporte (12h) e processos de reutilização (2h)',
      'Qualidade de Processo: modelos de qualidade de processos (12h), avaliação da qualidade do processo (12h) e abordagens de implementação de processo (6h)'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'Específico',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software requirements, requisitos de software, software design, projeto de software, Software testing, teste de software, software maintenance, manutenção de software, software configuration managment, gerencia de configuração de software, software Engineering Managment, gerencia de engenharia de software, software engineering process, processo de engenharia de software, software quality, qualidade de software, software engineering economics, engenharia economica de software, computing foundations, fundamentos da computação;"

  },
  {
    'id': 29,
    'nome': 'Engenharia de Sistemas',
    'ementa': [
      'Fundamentos de engenharia (16h): métodos empíricos e técnicas experimentais; análise estatística; medição; design; modelagem, prototipação e simulação; normas e padrões; análise de causa raiz',
      'Fundamentos de sistema (16h): taxonomias de sistema; sistemas de engenharia (sistemas produzidos por engenharia - engineered systems); sistemas intensivos em software (software-intensive systems); sistemas de sistemas; complexidade de sistemas; propriedades emergentes; princípios do pensamento sistêmico; representação de sistemas por modelos',
      'Engenharia de Sistemas (32h): abordagens e metodologias; partes interessadas (stakeholders) e suas necessidades; ciclo de vida de sistemas de engenharia (concepção, conceitos operacionais, design, validação de design, construção, validação de construção, implantação, sustentação e descontinuação); processos do ciclo de vida de sistemas (negociação, preparação para projeto organizacional, gestão técnica, processos técnicos); qualidade de processo.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 64,
    'cargaHorariaPratica': 0,
    'periodo': 5,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software engineering professional practice, prática profissional em engenharia de software;"

  },
  {
    'id': 30,
    'nome': 'Design de Software',
    'ementa': [
      'Conceitos (8h): design, software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado',
      'Contexto de projeto de software (4h)',
      'Processos e artefatos de projeto de software (8h)',
      'Notações de projeto de software (8h)',
      'Princípios e fundamentos de projeto de software (16h): abstração, acoplamento, coesão, decomposição, encapsulamento, separar interface e implementação, suficiência, completitude, simplicidade e separation of concerns',
      'Aspectos de projeto de software (16h): concorrência, controle e tratamento de eventos, tratamento de exceção, persistência, distribuição, interação (apresentação)',
      'Qualidade de projeto de software (8h): técnicas de avaliação, medidas, ferramentas',
      'Métodos e estratégias de projeto (4h)',
      'Método para projeto orientado a objetos (4h)',
      'Padrões de projeto orientado a objetos (16h)',
      'Prática de projeto de software orientado a objetos (36h).'
    ],
    'cargaHorariaTotal': 128,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 80,
    'periodo': 6,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "design de software, projeto de software;"

  },
  {
    'id': 31,
    'nome': 'Domínios de Software',
    'ementa': [
      'Visão ampla de domínios de desenvolvimento (4h): sistemas, componentes e a relação entre eles',
      'Especificidades de alguns domínios de desenvolvimento (8h)',
      'Especificidades de um domínio (12h): requisitos, projeto, construção',
      'Desenvolvimento de software em um domínio (ênfase na construção) (40h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 16,
    'cargaHorariaPratica': 48,
    'periodo': 6,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software requirements, requisitos de software;"

  },
  {
    'id': 32,
    'nome': 'Processos de Qualidade de Software',
    'ementa': [
      'Visão Geral de Qualidade de Software (4h): custos e impactos da qualidade de software, questões éticas e culturais da qualidade de software',
      'Processo de garantia da qualidade de software (10h): garantia do produto e garantia do processo',
      'Processo de Verificação e Validação de Software (36h): requisito, projeto (design), código, integração, documentação',
      'Processos de Revisão e Auditoria de Software (14h): revisões gerenciais e revisões técnicas.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 16,
    'periodo': 6,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software quality, qualidade de software;"

  },
  {
    'id': 33,
    'nome': 'Gerência de Projeto de Software',
    'ementa': [
      'Projeto e gerência de projeto (4h): ciclo de vida de produto, serviço e projeto; partes interessadas (stakeholders); correlação entre projetos, operações e programas; gerência de portfólio de projetos; escritório de projetos (PMO)',
      'Tipos de projeto de software (4h): aquisição, desenvolvimento, refatoração, descontinuação',
      'Tipos de ciclo de vida de projeto de software (4h): preditivo, iterativo, adaptativo; processos empíricos e processos definidos e sua relação com métodos ágeis e métodos planejados para gerência de projeto de software',
      'Modelos de qualidade de processo de gerência de projeto de software (4h)',
      'Áreas de conhecimento da gerência de projetos aplicadas a projetos de software (48h): escopo, tempo, custo, qualidade, recursos humanos, comunicações, riscos, aquisições, integração e partes interessadas'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 6,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software configuration management, gerencia de configuraço de software;"

  },
  {
    'id': 34,
    'nome': 'Software Concorrente e Distribuído',
    'ementa': [
      'Qualidade de produto (4h): escalabilidade, tolerância a falhas, disponibilidade, desempenho.',
      'Conceitos (4h): middleware, distribuição, paralelismo, concorrência, RESTful, web, internet das coisas, contêineres, troca de mensagens, micro-serviços, serviços web.',
      'Métodos para construção de software distribuído e para construção de software concorrente (8h).',
      'Concorrência (16h): paralelismo, aplicações IO-intensive e CPU-intensive, thread safe, memória compartilhada, Software Transactional Memory, atores, abordagens para explorar concorrência.',
      'Distribuição (24h): projeto, implementação e uso de interface de programação, RESTful, serviços web e micro-serviços (microservices).',
      'Troca de mensagens (messaging) (8h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 7,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software construction, construção de software;"

  },
  {
    'id': 35,
    'nome': 'Experiência do Usuário de Software',
    'ementa': [
      'Qualidade em uso (4h): usabilidade, acessibilidade.',
      'Design centrado no usuário (8h): diretrizes, pesquisa, personas, jornadas de usuário, modelagem (especificação) e ferramentas.',
      'Projeto de interação (16h): diretrizes, criação, modelagem (especificação) e ferramentas.',
      'Design de software e interfaces gráficas (8): padrões arquiteturais para design da camada de apresentação (MVC, MVP, MVVM e outros).',
      'Implementação de interfaces (20h).',
      'Modelos de validação de experiência (8h): modelos, métodos e técnicas para validação de experiência do usuário.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 7,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software quality, qualidade de software, software construction, construção de software, software requirements, requisitos de software;"

  },
  {
    'id': 36,
    'nome': 'Arquitetura de Software',
    'ementa': [
      'Conceitos (4h): software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.',
      'Requisitos funcionais e requisitos de qualidade (8h): conceituação e identificação de requisitos relevantes para a arquitetura.',
      'Documentação de arquitetura de software (8h).',
      'Fundamentos de arquitetura de software (4h): importância, contexto, estilos.Método de desenvolvimento de arquitetura de software (8h).',
      'Técnicas para satisfazer requisitos de qualidade (16h).Criação de arquiteturas de software (16h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 7,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software design, projeto de software;"

  },
  {
    'id': 37,
    'nome': 'Requisitos de Software',
    'ementa': [
      'Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.',
      'Modelos e métodos da engenharia de requisitos (32).Gerência de projetos de engenharia de requisitos (8).',
      'Processo de projeto arquitetural (8h): relação com requisitos.',
      'Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.',
      'Modelos e métodos da engenharia de requisitos (32).',
      'Gerência de projetos de engenharia de requisitos (8).',
      'Processo de projeto arquitetural (8h): relação com requisitos.',
      'Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.',
      'Modelos e métodos da engenharia de requisitos (32).',
      'Gerência de projetos de engenharia de requisitos (8).',
      'Processo de projeto arquitetural (8h): relação com requisitos.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 7,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software requirements;"

  },
  {
    'id': 38,
    'nome': 'Governança e Gestão de Serviços de Software',
    'ementa': [
      'Governança (8h): governança corporativa; governança de TI (GTI); governança de Software (GS); princípios da GS; conformidade (compliance); alinhamento dos serviços de software ao negócio da organização; normas, frameworks, padrões, modelos de qualidade e de maturidade de GS',
      'Abordagens para GS (8h): aplicação de abordagens de GS em um contexto organizacional',
      'Objetivos de controle para GS; indicadores e avaliação de desempenho de software; direcionamento, avaliação e controle do uso de serviços de software para apoiar os objetivos de uma organização',
      'Planejamento e controle estratégico de software (8h): alinhamento entre objetivos organizacionais e objetivos relacionados a software; avaliação, direcionamento e monitoramento de processos de software; diagnóstico de maturidade de processos de software; alinhamento de políticas de software ao plano diretor de TI de uma organização',
      'Gestão de riscos de software; riscos organizacionais; riscos relacionados à segurança física e lógica de software',
      'Governança de dados (8h): Segurança da informação em uma organização; Segurança de software',
      'Software como um serviço (SaaS) (8h): serviços de Software (SS); gestão de Serviços de Software (GSS);Estratégia organizacional para SS; Modelos, normas e padrões relacionados à GSS',
      'Ciclo de vida de SS (8h): planejamento; desenvolvimento; implantação e sustentação; Operação de SS e apoio (suporte) à operação de SS; Descontinuação de SS',
      'Manutenção de SS (8h): correção, adaptação e evolução de SS; gestão de incidentes e problemas em SS; controle de mudança e de configuração; controle de qualidade',
      'Gerência de processos de negócio (BPM – Business Process Management) aplicada à GSS (8h): representação de SS como processos de negócio; notação para modelagem de processos de negócio (BPMN); análise, validação e evolução de processos de negócio e de SS.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 48,
    'cargaHorariaPratica': 16,
    'periodo': 7,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software maintenance, manutenção de software, software configuration management, gerencia de configuraço de software;"

  },
  {
    'id': 39,
    'nome': 'Software para Sistemas Ubíquos',
    'ementa': [
      'Sistemas de informação que fazem uso de dispositivos (ubíquos) (16h): smartphones, sensores, internet das coisas (IoT), stream analytics e aspectos de segurança (vulnerabilidades, criptografia, certificados digitais).',
      'Definição de arquiteturas para soluções móveis (16): conectar serviços, possivelmente de grande volume, fluxo e em tempo real, com a necessidade de analisá-los.',
      'Desenvolvimento de código para smartphone, sensor ou outro dispositivo capaz de alimentar/receber informações de sistema de informação (32h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 8,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software engineering professional practice, prática profissional em engenharia de software;"

  },
  {
    'id': 40,
    'nome': 'Software para Persistência de Dados',
    'ementa': [
      'Visão geral de persistência (12h): arquivos em formato texto/binário',
      'Serialização de objetos',
      'Documentos XML',
      'JSON',
      'Bancos de dados relacionais',
      'Bancos NoSql.',
      'Modelagem e implementação de bancos de dados (28h).',
      'Mapeamento entre OO e relacional (8h).',
      'Refatoração de bancos de dados (8h).',
      'Integração de bancos de dados (8h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 8,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software construction, construção de software, software design, projeto de software;"

  },
  {
    'id': 41,
    'nome': 'Padrões de Arquitetura de Software',
    'ementa': [
      'Conceitos (12h): arquitetura de software e padrões de arquitetura (blackboard, microservices, invocação implícita, arquitetura orientada a serviços, multitier, arquitetura orienta a eventos, plugin, filtros e pipes, MVC).',
      'Norma ISO/IEC/IEEE 42010:2011 (8h).',
      'Análise (avaliação) de arquiteturas de software (12h).',
      'Criação de arquiteturas de software (32h).'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 8,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software construction, construção de software, software design, projeto de software;"

  },
  {
    'id': 42,
    'nome': 'Teste de Software',
    'ementa': [
      'Processo de construção (8h): definições básicas, atividades e documentação.',
      'Processo de Teste de Software (56): definições básicas, técnicas de teste, teste baseado em intuição e experiência do engenheiro de software, atividades do processo, documentação e ferramentas.'
    ],
    'cargaHorariaTotal': 64,
    'cargaHorariaTeorica': 32,
    'cargaHorariaPratica': 32,
    'periodo': 8,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software quality, qualidade de software, software testing, teste de software;"

  }
  ,
  {
    'id': 43,
    'nome': 'Optativa 3',
    'ementa': [''],
    'cargaHorariaTotal': 0,
    'cargaHorariaTeorica': 0,
    'cargaHorariaPratica': 0,
    'periodo': 9,
    'obrigatoria': '',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": ""
  }
  ,
  {
    'id': 44,
    'nome': 'Metodologia e Experimentação em Engenharia de Software',
    'ementa': [
      'Metodologia Científica (16h): aplicação de metodologia científica em atividades de Engenharia de Software',
      'Fundamentos da Engenharia de Software Experimental (16h): contexto da experimentação na Engenharia de Software; principais tipos de experimentos aplicados à Engenharia de Software; estudos primários e secundários; revisão e mapeamento sistemático da literatura',
      'Realização de Experimentos em Engenharia de Software (32h).'
    ],
    'cargaHorariaTotal': 1,
    'cargaHorariaTeorica': 1,
    'cargaHorariaPratica': 1,
    'periodo': 9,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software engineering process, processo de engenharia de software;"

  },
  {
    'id': 45,
    'nome': 'Mercado e Economia de Software',
    'ementa': [
      'Modelos de negócio para software (aluguel, serviço, código aberto).',
      'Leis, normas, impostos e legislação brasileira para o mercado local e para a exportação de software.',
      'Programas de incentivo à exportação e à produção de software.',
      'Características e exigências do mercado interno e externo.',
      'Identificação de oportunidades de inovação em software.',
      'Planos de negócio de software para o mercado nacional e global.',
      'Engenharia Econômica.',
      'Fornecimento, demanda e produção.',
      'Lucro produzido por capital (interest).',
      'Análise custo-benefício.',
      'Análise breakeven.',
      'Retorno de investimento.',
      'Avaliação de alternativas.',
      'Economia aplicada ao desenvolvimento de software.'
    ],
    'cargaHorariaTotal': 1,
    'cargaHorariaTeorica': 1,
    'cargaHorariaPratica': 1,
    'periodo': 10,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "software requirements, requisitos de software, software testing, teste de software, software engineering economics, economia em engenharia de software;"

  },
  {
    'id': 46,
    'nome': 'Prática em Engenharia de Software',
    'ementa': [
      'Aplicação do corpo de conhecimento da Engenharia de Software no contexto de projetos realizados em uma Fábrica de Software (320h): emprego de processos de Engenharia de Software em abrangência e profundidade;',
      'Seleção e utilização de normas, métodos, técnicas e ferramentas de Engenharia de Software para atingir objetivos estabelecidos no projeto;',
      'Integração e consolidação de conhecimentos e habilidades esperadas do profissional de Engenharia de Software;',
      'Exercício de práticas e atitudes profissionais embasadas no código de ética e na postura profissional da Engenharia de Software;',
      'Prática em processos técnicos de Engenharia de Software;',
      'Prática em Gestão de Engenharia de Software;',
      'Prática em Tecnologias de Engenharia de Software.'
    ],
    'cargaHorariaTotal': 1,
    'cargaHorariaTeorica': 1,
    'cargaHorariaPratica': 1,
    'periodo': 9,
    'obrigatoria': 'Sim',
    'preRequisitos': [''],
    'nucleo': 'NC',
    'bibliografia': [''],
    'unidade': 'INF',
    "relacaoComSwebok": "Software requirements, requisitos de software, software design, projeto de software, Software testing, teste de software, software maintenance, manutenção de software, software configuration managment, gerencia de configuração de software, software Engineering Managment, gerencia de engenharia de software, software engineering process, processo de engenharia de software, software quality, qualidade de software, software engineering economics, engenharia economica de software, computing foundations, fundamentos da computação;"

  }
];
export const topicosPpc: Topico[] = [
  {
    "topico": "Apresentação",
    "id": "apresentacao",
    "descricao": [
      "O curso de Bacharelado em Engenharia de Software (BES) é oferecido pelo Instituto de Informática (INF) da Universidade Federal de Goiás (UFG). A primeira versão do Projeto Pedagógico do Curso (PPC) foi criada em 2008, a segunda versão, registrada nesse documento, é fruto de uma reflexão de dois anos do Núcleo Docente Estruturante (NDE), que reinventou o BES.",
      "A busca pela qualidade é a motivação dessa segunda versão, que só pode ser adequadamente compreendida com o detalhamento da história da criação do curso e do cenário no qual está inserido, o que lembra Paulo Freire, segundo o qual “toda leitura de texto pressupõe uma rigorosa leitura do contexto”.",
      "Não houve alteração relevante dos objetivos do curso, nem tampouco do perfil do egresso, contudo, ambos foram refinados. Os requisitos legais e normativos foram ampliados pelas diretrizes curriculares nacionais (que não existiam quando a primeira versão foi produzida). Em particular, a estratégia para atender a educação das relações étnico-raciais e para o ensino de história e cultura afro-brasileira e africana foi revista em sua totalidade.",
      "A estrutura curricular sofreu mudanças significativas. Em particular, o fluxo sugerido, nos quatro primeiros períodos, inclui apenas disciplinas de formação básica em computação. A disciplina “Prática em Engenharia de Software” é o elemento integrador do curso, com carga horária de 320 horas. Em particular, as disciplinas específicas de Engenharia de Software são acompanhadas de uma seção adicional, “condições mínimas”, que estabelece competências a serem demonstradas/adquiridas pelo estudante em cada uma delas.",
      "A busca por um curso de Engenharia de Software melhor é uma atribuição contínua do NDE estabelecida nesse PPC por meio de princípios. Esse compromisso é oportuno para estabelecer claramente a responsabilidade pela gestão do presente PPC pelo NDE, sem o qual esse texto resume-se a um registro de intenções."
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Objetivos",
    "id": "objetivos",
    "descricao": [""],
    "conteudo": [
      {
        "subtopico": "Objetivo geral",
        "detalhe": [
          "O BES tem como objetivo: ",
          "Formar profissionais aptos a contribuir efetivamente com a produção de softwares de qualidade seguindo princípios éticos e postura profissional."
        ]
      },
      {
        "subtopico": "Objetivos específicos",
        "detalhe": [
          "Reconhecer e valorizar o respeito à diversidade. Conforme se lê na Constituição Federal em seu Art. 3.º, inciso IV: “promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação”.",
          "Promover relações étnico-raciais respeitosas, assim como a socialização da história da formação dos brasileiros.",
          "Ampliar a compreensão acerca de questões ambientais e, ao mesmo tempo, valorizar projetos sustentáveis.",
          "Ampliar a compreensão acerca de questões ambientais e, ao mesmo tempo, valorizar projetos sustentáveis.",
          "Contribuir com a demanda da sociedade por softwares de qualidade.",
          "Conceber e desenvolver produtos inovadores.",
          "Promover a engenharia de software na indústria de software regional.",
          "Viabilizar atividade econômica de alto valor (produção de software).",
          "Criar alternativa econômica para o Estado de Goiás.",
          "Fortalecer a indústria de software goiana."
        ]
      }
    ]
  },
  {
    "topico": "Expectativa da formação do profissional",
    "id": "expextativas",
    "descricao": [""],
    "conteudo": [
      {
        "subtopico": "Perfil do egresso",
        "detalhe": [
          "O egresso do BES é um profissional com capacitação sólida em engenharia de software. Essa capacitação advém de formação básica consistente em computação e de abrangente e aprofundada em engenharia de software.",
          "O mercado de atuação do egresso é abrangente, e decorre da dependência da sociedade por software. Adicionalmente, tal dependência tem se expandido com novos produtos, serviços e processos.",
          "A bacharela ou o bacharel em Engenharia de Software é capaz de efetivamente contribuir com equipes na produção de modelos abstratos de software e realizá-los por meio de código de qualidade. Essa contribuição é pautada por postura profissional e conduta ética.",
          "As habilidades do egresso incluem o que é necessário para lidar com requisitos de software, propor uma solução (software design), construí-la, testá-la e mantê-la, usando processos adequados."
        ]
      },
      {
        "subtopico": "Habilidades do egresso",
        "detalhe": [
'Da perspectiva de relações pessoais, o egresso deve ser capaz de:',
        '- Participar de forma harmoniosa, profissional e ética durante a elaboração de produtos de software atribuídos a equipes.',
        '- Liderar ação contínua de formação de sua própria reputação na área.',
        '- Participar da comunicação de ideias com clareza, seja na forma verbal ou escrita.',
        'Da perspectiva técnica, o egresso deve ser capaz de:',
        '- Participar de atividades para eliciar, analisar, especificar, validar e gerenciar requisitos de software.',
        '- gerenciar requisitos de software.\n' +
        'Participar da definição da solução de software que atende requisitos, ou seja, da definição da arquitetura e do projeto detalhado desse software.',
        '- Participar da elaboração de modelos de análise e de projeto (design) de software.',
        '- Participar da aplicação de técnicas de projeto ao desenvolver softwares concorrentes, distribuídos, orientados a objetos, orientados a eventos e que implementam a persistência de dados.',
        '- Participar da avaliação de design de software considerando, dentre outros quesitos: abstração, coesão, acoplamento e encapsulamento.',
        '- Participar da aplicação de técnicas de tratamento de exceção e tolerância a falhas.',
        '- Auxiliar a escolha de processo e de metodologia de design de software.',
        '- Auxiliar a revisão de design de software',
        '- Participar do emprego de estilos, visões, modelos e padrões de arquitetura de software.',
        '- Participar do projeto de componentes e módulos de software usando modelos, padrões de projeto e notações.',
        '- Auxiliar a execução de análise estática.',
        '- Auxiliar a escolha de processos e modelos apropriados para a construção de software.',
        '- Auxiliar a escolha de linguagens e ferramentas apropriadas para a construção de software.',
        '- Auxiliar a escolha de frameworks, plataformas e ambientes de construção de construção de software.',
        '- Participar da construção de software seguindo padrões de gerência de configuração e controle de versão.',
        '- Participar da coleta e do monitoramento de medidas de qualidade de código.',
        '- Participar da criação de design detalhado que minimiza a complexidade e melhora a qualidade.',
        '- Participar da criação de código que implementa projetos detalhados.',
        '- Indicar o uso de padrões de projeto.',
        '- Participar da refatoração (refactoring) de código.',
        '- Participar da construção de software que segue padrões de código.',
        '- Participar da construção de software que faz uso de técnicas de codificação defensiva.',
        '- Participar da geração de código a partir de modelos de projeto.',
        '- Participar do uso apropriado de ferramentas e técnicas de depuração.',
        '- Participar da criação de testes de unidade.',
        '- Participar da construção de software que satisfaz objetivos de cobertura de testes.',
        '- Participar da construção de software que segue estratégias e processos de integração e implantação.',
        '- Participar da construção e realização de testes de integração.',
        '- Participar da construção de software em equipe ao colaborar com outros membros da equipe.',
        '- Participar de revisões e inspeções.',
        '- Participar da elaboração e implementação de planos de testes.',
        '- Participar da definição de um ambiente de teste e da correspondente implementação.',
        '- Participar da identificação, design e implementação de testes.',
        '- Participar da elaboração de relatórios de testes.',
        '- Auxiliar a elaboração e execução de plano de transição de software.',
        '- Auxiliar a elaboração e execução de planos de manutenção de software.',
        '- Auxiliar a execução de atividades de processos de software.',
        '- Auxiliar a definição e personalização de processos de software.',
        '- Auxiliar a implementação e execução de processos de software.',
        '- Auxiliar a coleta de dados para avaliação de processos de software.',
        '- Auxiliar a definição e o desenvolvimento de software que satisfaz objetivos e atributos de qualidade.',
        '- Auxiliar a identificação de medidas de qualidade apropriadas.',
        '- Auxiliar a elaboração de planos e revisões de qualidade.',
        '- Participar da construção de software que segue princípios recomendados para segurança de código.',
        '- Participar da construção de software que segue um plano de gerência de configuração de software.',
        'Participar da documentação de software.']
      }
    ]
  },
  {
    "topico": "Princípios norteadores",
    "id": "principios",
    "descricao": [
      "O BES baseia-se em princípios que fornecem a sustentação necessária para atingir os objetivos do curso e o perfil do egresso. Esses princípios são fornecidos abaixo."
    ],
    "conteudo": [
      {
        "subtopico": "Formação Ética e Função Social do Profissional",
        "detalhe": [
          "A vivência de princípios éticos e o conhecimento sobre a responsabilidade social do Engenheiro de Software são elementos imprescindíveis para a formação da postura profissional do egresso do BES.",
          "Ética é assunto de uma das disciplinas do primeiro semestre do curso, “Computação e Sociedade”, e volta a ser explicitamente tratada, junto com aspectos profissionais, na última disciplina do curso “Prática em Engenharia de Software”. Nesse caso, a postura ética e profissional é condição a ser observada para aprovação nessa disciplina.",
          "O comportamento ético e profissional será trabalhado nas atividades do curso, e não apenas na primeira e última disciplinas. A exigência de uma conduta apropriada em sala de aula, tanto dos docentes quanto dos estudantes, contribui com essa formação. Isso significa promover a qualidade de vida, o respeito à diversidade, o respeito ao meio ambiente. Nesse sentido, não apenas as disciplinas, mas toda e qualquer ação, deve ser pautada pela reflexão do impacto no contexto no qual se insere.",
          "Ainda convém destacar que a área possui um código de ética próprio, Código de Ética e Prática Profissional da Engenharia de Software [ACM/IEEE]. Esse código é uma das bases de fundamentação do curso e deve ser observado no convívio diário do curso."
        ]
      },
      {
        "subtopico": "Formação Técnica",
        "detalhe": [
          "A formação técnica proposta para o BES está fundamentada em bases sólidas: as diretrizes curriculares nacionais [MEC 2012], o guia do corpo de conhecimento em Engenharia de Software [SWEBOK 2014], o corpo de conhecimento recomendado para ser trabalhado em um curso de graduação [SE 2014], e o modelo de competência em Engenharia de Software [SWECOM 2014]. Em consequência, o conteúdo abordado no curso não diverge das orientações nacionais nem internacionais. A organização dele, contudo, é uma “contribuição” para a área, dado que se baseia em experiências aprendidas nos anos anteriores, juntamente com uma visão holística do aprendizado em Engenharia de Software, o que contrasta com a frequente apresentação cartesiana dessa área.",
          "As atividades do curso se aproximam do emprego da Engenharia de Software em projetos reais, no qual os conhecimentos e habilidades não são exigidos de forma fragmentada e isolada. O isolamento de conteúdo é adequado para a classificação do conhecimento que, sem o devido cuidado, pode induzir a definição de disciplinas. A estratégia de definição das disciplinas do BES é fornecida abaixo."
        ]
      },
      {
        "subtopico": "Estratégia da definição das disciplinas",
        "detalhe": [
          "As disciplinas do BES foram definidas com substancial cruzamento de fronteiras de subáreas do conhecimento da Engenharia de Software. A estratégia na qual se define uma disciplina por subárea foi preterida. Convém ressaltar que o corpo de conhecimento da área [SWEBOK 2014] foi extensivamente empregado, mas não como exemplo de organização didática.",
          "Em vez da separação de tópicos induzida pela classificação do conhecimento, o conteúdo (ementa) atribuído a cada disciplina do BES inclui tópicos entre os quais há sinergia. Essa orientação é compatível com a prática da Engenharia de Software e não apenas reconhece, mas também respeita os vínculos entre as suas subáreas. Isso resultou em disciplinas coerentes com a prática da Engenharia de Software.",
          "A Figura abaixo ilustra uma disciplina X qualquer do BES, composta por conteúdo das subáreas A, B e C. Ou seja, o conteúdo de X não está contido estritamente na subárea A, nem tampouco na B ou na C. Em vez disso, reúne e explora a interdependência de conceitos dessas três subáreas.",
          "As subáreas “requisitos” e “projeto de software”, por exemplo, são contempladas em várias disciplinas do curso e não apenas nas disciplinas nas quais são o foco principal de interesse. A disciplina que enfatiza testes, por exemplo, inclui aspectos de design de software e também de requisitos, assim como aqueles de construção de software. De forma resumida, as disciplinas não são uma projeção cartesiana das 15 subáreas de conhecimento da Engenharia de Software [SWECOM 2014]. Em vez disso, são 18 disciplinas cobrindo reiteradamente várias dessas 15 áreas, sendo que uma delas cobre todas as áreas necessárias para a execução de um projeto real de produção de software."
        ]
      },
      {
        "subtopico": "Articulação entre Teoria e Prática Profissional",
        "detalhe": [
          "O perfil do egresso, definido em outra seção desse documento, exige do egresso o envolvimento com o fazer, com o exercício do conhecimento de Engenharia de Software.",
          "Essa articulação é explicitamente estabelecida por meio da seção “Condições mínimas” definida para cada disciplina de Engenharia de Software. Tais condições, em geral, definem o que o egresso pode fazer, em outras palavras, é capaz de realizar com o conhecimento. Ou seja, o que convencionalmente se limita ao conteúdo, ou teoria, deverá ser exercitado, ou prática, e com um nível bem definido de proficiência.",
          "A disciplina “Prática em Engenharia de Software” é um ponto explícito do curso no qual a prática é o elemento principal, perfazendo 320 horas. O fazer, contudo, não está restrito a essa disciplina. A capacidade de realização de atividades de desenvolvimento de software é exigência em boa parte das disciplinas."
        ]
      },
      {
        "subtopico": "Interdisciplinaridade",
        "detalhe": [
          "Produzir software significa, necessariamente, o emprego de pelo menos dois domínios. O domínio da solução, no qual a Engenharia de Software é exercitada e o domínio do problema, que fomenta a existência do software. O domínio do problema é “universal”, pois inclui saúde, educação, segurança, governo, finanças e entretenimento, dentre muitos outros. Fazer software, portanto, por si só, exige o contato com outras áreas do conhecimento.",
          "O acesso a outras áreas pode vir das disciplinas do Núcleo Livre (NL). O BES exige para a integralização curricular pelo menos 128 horas de disciplinas do NL. Essas disciplinas são escolhidas pelo estudante dentre todas aquelas oferecidas na UFG. Para ilustrar, no primeiro semestre de 2015 houve oferta de vagas para mais de 300 disciplinas de NL. Ou seja, o conjunto de opções de outras áreas do conhecimento é rico, o que contribui com uma formação ampla do estudante. Convém destacar que tais 128 horas perfazem a quantidade mínima exigida, o estudante pode fazer uso de uma carga horária maior. O mesmo é válido para o estágio não obrigatório e para as atividades complementares. O estudante deve cumprir um mínimo de 192 horas em atividades complementares.",
          "A interdisciplinaridade estimulada pelos elementos citados acima é extra curso. Aquela intracurso é tratada tanto pela definição das disciplinas quanto pela disciplina “Prática em Engenharia de Software”. Nesses casos a interdisciplinaridade é compulsória, pois faz parte da própria concepção do curso. Adicionalmente, sem restringir a liberdade metodológica do docente, cabe ao NDE orientar a definição de programas de disciplinas que cultivem a interdisciplinaridade."
        ]
      },
      {
        "subtopico": "Disciplina Pratica em Engenharia de Software",
        "detalhe": [
          "Essa disciplina de 320 horas tem como objetivo explícito a participação do estudante em um ou mais projetos integradores que usufruem de conhecimento e habilidades adquiridos por todo o curso. Os projetos exigem o contato com problemas reais, o que exige contato tanto com o conhecimento quanto profissionais de outras áreas. Consulte detalhes na página ."
        ]
      },
      {
        "subtopico": "Atividades Supervisionadas",
        "detalhe": [
          "De acordo com a Resolução  CNE/CES 03/2007 de 2 de julho de 2007, cabe às Instituições de Educação Superior, respeitando o mínimo dos duzentos dias letivos de trabalho acadêmico efetivo, a definição da duração da atividade acadêmica ou do  trabalho discente efetivo, o que compreende: (a) preleções e aulas expositivas e (b) atividades práticas supervisionadas, tais como laboratórios, atividades em biblioteca, iniciação científica, trabalhos individuais e em grupo, práticas de ensino e outras atividades no caso das licenciaturas.",
          "O BES divide cada hora de atividade acadêmica em 45 minutos de preleções e aulas expositivas e 15 minutos de atividades práticas supervisionadas. O planejamento de cada hora deve estar devidamente registrado no plano de cada disciplina. Em particular, o plano deve incluir de forma clara as atividades práticas supervisionadas."
        ]
      }
    ]
  },
  {
    "topico": "Núcleo Docente Estruturante (NDE)",
    "id": "nde",
    "descricao": [
      "Em vez de atribuir atividades ao NDE, o NDE adota os seguintes princípios:",
      "O NDE possui duas prioridades. A maior prioridade é colocar em prática o Projeto Pedagógico do Curso (PPC). A prioridade seguinte é mantê-lo relevante.",
      "Qualquer questão que diz respeito às prioridades é do interesse do NDE e pode resultar em ação.",
      "Toda ação necessariamente deve gerar valor e estar alinhada com as prioridades.",
      "Uma ação constante e preconcebida é zelar pelos princípios aqui descritos.",
      "O NDE entende que o diálogo é necessário e que a diversidade é natural, assim como o confronto de ideias.",
      "Esses princípios definem que todo o conteúdo do presente PPC e a aplicação dele está no raio de atuação do NDE. O que inclui: ",
      "Acompanhar a execução das ações de ensino, pesquisa e extensão pertinentes ao curso;",
      "Acompanhar a avaliação das ações do curso;",
      "Emitir opinião sobre ações pertinentes ao curso;",
      "Monitorar o desempenho dos estudantes;",
      "Promover ações que possam reduzir reprovações;",
      "Monitorar resultados dos trabalhos de conclusão de curso;",
      "Monitorar ações de estágios dos estudantes do curso;",
      "Acompanhar e se pronunciar acerca de reclamações pertinentes ao curso;",
      "Avaliar de forma contínua o PPC do curso;",
      "Acompanhar e promover a qualificação de docentes;",
      "Acompanhar e promover a qualificação do corpo de técnico-administrativos.",
      "O NDE, portanto, não se apresenta como órgão ou mecanismo deliberativo, mas consultivo. Reúne docentes que continuamente refletem sobre questões pertinentes ao curso e, em consequência, definem ações que assistem, apoiam e fomentam a qualidade do curso, bem como contribuem com a execução dessas ações.",
      "A atuação do NDE deve ser realizada em estreita interação com a coordenação do curso. Entretanto, não é nem pode ser vista como meio para auxiliar a realização de fluxos administrativos (atribuição da coordenação do curso). ",
      "Convém observar que as atribuições estabelecidas acima estão em conformidade com a resolução da Comissão Nacional de Avaliação da Educação Superior (CONAES), 01/2010 de 17 de junho de 2010, a qual “normatiza o núcleo docente estruturante”, e esclarecido pelo parecer CONAES 04/2010 de 17 de junho de 2010."
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Política e gestão de estágio não obrigatório",
    "id": "estagio",
    "descricao": [
      "O estágio do BES constitui-se em um mecanismo de complementação de conhecimento e aperfeiçoamento de habilidades, além de oportunidade de prática em Engenharia de Software. O convívio com profissionais, obrigações, hierarquias e processos onde o estágio se desenvolve, resulta em oportunidade valiosa para a formação profissional do egresso. ",
      "O estágio do BES não é de caráter obrigatório, ficando a critério do estudante realizá-lo ou não, desde que o mesmo esteja regularmente matriculado no curso. Ou seja, caracteriza estágio curricular não obrigatório. Adicionalmente, esse estágio deve ser realizado a partir do terceiro período do curso, ou após a conclusão de pelo menos 640 horas da carga horária do curso.",
      "Convém observar que o estágio está restrito às empresas devidamente conveniadas com a UFG ou que se utilizam de agentes de integração conveniados. Adicionalmente, dois outros papéis são obrigatórios no estágio: (a) supervisor (no local do estágio) e (b) orientador (professor do curso).",
      "Durante o estágio, que não pode ultrapassar 24 meses em mesmo local, o estudante deverá apresentar o Termo de Compromisso, o Plano de Estágio, além da frequência e dos relatórios semestrais.",
      "Os documentos citados acima, bem como outros detalhes do estágio, em conformidade com a Lei 11.788/2008, são definidos pelo Regulamento de Estágio de Curso do Bacharelado em Engenharia de Software."
    ],
    'conteudo': [
      {
        'subtopico': "",
        'detalhe': [""]
      }
    ]
  },
  {
    "topico": "Trabalho de Conclusão de Curso (TCC)",
    "id": "tcc",
    "descricao": [
      "O Trabalho de Conclusão de Curso (TCC) no BES é um componente curricular obrigatório regulado pelas Normas e Procedimentos de Trabalho de Conclusão de Curso do Bacharelado em Engenharia de Software.",
      "O TCC é desenvolvido na última etapa da graduação, sob a orientação de um professor e compreende um relatório e uma apresentação.",
      "O relatório é individual e tem como objetivo a expressão do estudante na forma escrita, a capacidade de analisar, caracterizar, investigar, discutir, implantar, pesquisar, realizar, sintetizar e avaliar, entre outras. Neste sentido, o relatório descreve, de forma crítica, as atividades teórico-práticas e de formação profissional relacionadas ao desenvolvimento do estudante como profissional, em especial, durante a disciplina Prática em Engenharia de Software. ",
      "A apresentação do relatório, também individual, é realizada como última atividade do curso e tem como objetivo a expressão do estudante, agora na forma oral, das atividades descritas no relatório, em seção pública e para uma banca formada por professores do INF. A banca de professores tem o direito a um período de arguição e é responsável pela avaliação tanto do relatório quanto da apresentação."

    ],
    'conteudo': [
      {
        'subtopico': "",
        'detalhe': [""]
      }
    ]
  },
  {
    "topico": "Integração ensino, pesquisa e extensão",
    "id": "integracao",
    "descricao": [
      "A integração do ensino com a pesquisa e a extensão se verifica por meio de atividades complementares, do estágio não obrigatório, de disciplinas do curso e da postura didática dos docentes, conforme comentado abaixo. ",
      "As atividades complementares são identificadas em resolução própria, perfazem pelo menos 192 horas e explicitamente incluem ações de extensão e de pesquisa. Por exemplo, divulgação de trabalhos em eventos científicos, participação em projetos de extensão e participação em projetos de pesquisa, dentre outras.",
      "O estágio não obrigatório é um instrumento de integração. As atividades a serem realizadas pelo estudante podem incluir ações de pesquisa.",
      "A disciplina Metodologia e Experimentação em Engenharia de Software oferece a visão exigida para a realização de pesquisas na área. Isso significa não apenas orientar o estudante acerca da elaboração de uma revisão sistemática, mas também da necessidade da expansão do conhecimento da área e dos mecanismos atualmente empregados para tal. ",
      "Um contundente exemplo é a disciplina de 320 horas, Prática em Engenharia de Software. Essa disciplina envolve em sua concepção o ensino, a extensão e a pesquisa ao se concentrar em projetos reais executados no ambiente de uma Fábrica de Software. Qualquer que seja o projeto, esse envolverá extensão e/ou pesquisa, naturalmente, ainda em um cenário de aprendizado (ensino).",
      "A integração, contudo, não ocorre apenas por meio dos elementos acima, que seriam pontos de integração localizados e em períodos específicos. A integração deve ocorrer, onde oportuno, em cada ação do curso. Por exemplo, uma postura didática recomendável exige a contextualização de cada aula acerca do que será visto, da repercussão ou relação dela com a indústria de software (sociedade) e do estado da arte corrente. De fato, essa postura não é apenas recomendável, mas exigida por meio das “condições mínimas” definidas para cada disciplina. Ou seja, a integração do ensino com a pesquisa e a extensão ocorre por toda a extensão do curso. "
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Avaliação do processo de ensino e aprendizagem",
    "id": "avaliacao_processo",
    "descricao": [
      "O que é realizado em nome do curso para que o estudante adquira o perfil esperado pode ser avaliado considerando informações geradas externamente e outras internamente. A avaliação do curso pelo MEC e os resultados obtidos pelos estudantes do curso no ENADE são exemplos de insumos para a avaliação do processo de ensino. Internamente, a avaliação do docente pelo discente (instrumento formal e institucionalizado na UFG), o desempenho dos estudantes do curso nas disciplinas e os planos de ensino das disciplinas são fontes valiosas de informação. ",
      "O NDE do curso é o principal consumidor dessas informações com o propósito de detectar possíveis melhorias e fomentar a introdução delas. Por exemplo, embora o docente tenha autonomia metodológica ao planejar e executar o plano de ensino de uma disciplina, cabe ao NDE analisar o plano e, quando considerar oportuno, recomendar ajustes. Essas e outras ações devem ser realizadas durante a semana de planejamento pedagógico e administrativo (semana formalmente institucionalizada na UFG), que ocorre no início de cada período letivo. Convém destacar que o plano de ensino de cada disciplina deve ser aprovado formalmente pelo Conselho Diretor da unidade antes do início do período letivo. Adicionalmente, a ação de avaliação não deve estar restrita à semana de planejamento, mas contínua. O objetivo é viabilizar a introdução de uma eventual mudança o mais próximo possível do instante no qual a necessidade foi detectada.",
      "Outra ação relevante do NDE na semana de planejamento pedagógico é apresentar as lições aprendidas no período anterior. Oferecer visibilidade de processos de ensino exitosos, o que é um instrumento de valorização do docente e, ao mesmo tempo, forma de socializar o que produziu bons resultados, também é uma ação a ser executada nessa semana. Enfim, acerca da avaliação do processo de ensino, o NDE possui papel relevante na identificação de dificuldades e busca de alternativas, em comunhão com os docentes do curso.",
      "A avaliação do processo de ensino, da aprendizagem e do curso, dentre outros, são assuntos pertinentes ao NDE. De fato, são interconectados. Em vez de estabelecer ações específicas no presente PPC, são fornecidos princípios adotados pelo NDE do curso. Ou seja, orientar os estudantes do curso a cada início do período letivo acerca das normas da UFG, de prazos, da meta de integralização curricular de cada um deles, são algumas ações relevantes, tendo em vista tais princípios.",
      "A avaliação da aprendizagem pode ser materializada de várias formas. São comuns avaliações (provas) escritas e individuais, a avaliação por meio de relatórios ou trabalhos escritos e apresentações orais, dentre outras. A avaliação contínua por meio de exercícios realizados ao longo de toda uma disciplina também é uma forma. De fato, vale ressaltar que um método adequado de avaliação em um cenário não o é em outro. ",
      "A avaliação do processo de ensino e aprendizagem do BES deve atender, no seu planejamento e na forma contínua de sua execução, o estipulado pelo Regulamento Geral dos Cursos de Graduação (RGCG) da UFG [CEPEC 2012], notadamente em seu Capítulo IV, Seção 1 - “Da verificação da Aprendizagem”.",
      "Cabe ressaltar que o Sistema de Avaliação do BES tem como objetivo primeiro de sua aplicação, por meio de sua Estrutura Curricular, utilizando instrumentos pedagógicos norteados pelos Princípios Norteadores, permitir que cada estudante adquira o perfil desejado.",
      "A avaliação do estudante deve levar em consideração não apenas o atendimento de requisitos técnicos de produtos e processos das diversas disciplinas da Engenharia de Software, mas também demonstrar postura ética e profissional ao desenvolver ações do curso. ",
      "Convém destacar que as disciplinas específicas de Engenharia de Software são acompanhadas, cada uma delas, de seção de “Condições mínimas”, que identificam elementos obrigatórios a serem satisfeitos pelo estudante para ser considerado aprovado na disciplina. Embora essa seja uma interpretação correta, a intenção é estabelecer um contrato claro do compromisso do estudante e do docente com a disciplina em questão. A avaliação de cada uma dessas disciplinas, portanto, necessariamente deve observar as condições mínimas estabelecidas. De fato, a condução de toda a disciplina deve ser orientada por tais condições.",
      "Dada a especificidade da disciplina “Prática em Engenharia de Software”, o sistema de avaliação também é específico. Nesse caso, as avaliações devem envolver o domínio de processos e a geração de produtos de Engenharia de Software. Em particular, atividades avaliativas podem ser realizadas mesclando teoria e prática em um ambiente real de desenvolvimento de software, no qual a qualidade estabelecida para os entregáveis do projeto em questão é verificada."
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Avaliação do projeto de curso",
    "id": "avaliacao_curso",
    "descricao": [
      "O presente PPC deverá ser revisado formalmente de cinco em cinco anos, em ação proativa, ou em intervalo de tempo menor, na ocorrência de evento que justifique tal decisão.",
      "O NDE é responsável pelas revisões do PPC e, em particular, por contínua vigilância da adequação do PPC ao cenário corrente. Esse esforço se realizada de duas formas. Uma no sentido de fazer com que as orientações do PPC sejam observadas no cotidiano do curso e outra, onde considerado oportuno, na análise de possíveis melhorias para reagir adequadamente às mudanças do ambiente.",
      "Ao acompanhar o curso, o NDE continuamente coleta, detecta e propõe alterações. As demandas podem se originar dos estudantes, dos docentes e de outras fontes como os resultados dos estudantes do curso no Exame Nacional de Desempenho de Estudantes (ENADE)."
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Política de qualificação",
    "id": "politica_qualificacao",
    "descricao": [
      "Desde a criação o Instituto de Informática implementa uma política vigorosa de capacitação do seu corpo docente, a qual inclui a meta de que todos os docentes tenham a titulação mínima de doutor. De fato, a liberação de docentes para prosseguirem os seus estudos de pós-graduação é uma prática comum, em consequência, nenhum pedido para afastamento com o propósito de realizar o doutorado foi negado até o momento. Essa política é acrescentada de regras institucionalizadas para a concessão de afastamento para o pós-doutorado e de licença para capacitação.",
      "A qualificação de docentes do INF também pode ser obtida pela sua participação em congressos, simpósios, dentre outros eventos, quer seja nos papéis de autor de artigo, organizador de evento, membro de comitê de programa ou avaliador de artigo. O Instituto de Informática ainda financia ou co-financia viagens e inscrições de seus docentes em congressos e simpósios importantes, principalmente quando há publicação de artigo.",
      "Em harmonia com a política de capacitação docente, o INF é favorável ao aprimoramento e à capacitação de seu corpo Técnico-Administrativo em Educação (TAE). Normalmente, um TAE faz solicitação ao diretor, encarregado de registrar as intenções de afastamento no plano anual de capacitação e conduzir a apreciação das intenções pelo Conselho Diretor do INF, haja vista que é do interesse da unidade fomentar a especialização e capacitação dos seus profissionais. ",
      "É frequente a liberação das atividades de TAE para que possam participar de treinamentos, tanto em cursos esporádicos quanto em programas de pós-graduação. Em tempo, as ações de extensão do INF reservam vagas exclusivas para participação de TAEs, sem necessidade de pagamento (quando é o caso).",
      "Do ponto de vista legal, o INF se apoia na Resolução CEPEC 1286/2014 de 2014 [CEPEC 2014], que regulamenta o afastamento de docentes para cursar Mestrado, Doutorado e estágios Pós-Doutorais, e na Resolução CONSUNI 02/2014 [CONSUNI 2014], que regulamenta o Programa de Capacitação e o Plano Anual de Capacitação dos TAEs. Em consonância com a Resolução CEPEC 1286/2014, o INF instrui o afastamento de docentes com a Resolução CD/INF n. 01 de 2014, que dá suporte ao planejamento administrativo e incentiva a participação de seus docentes, em cursos de doutorado, pós-doutorado e capacitação, no país e no exterior, de acordo com a sua política de pessoal para o ensino, a pesquisa, a extensão e a administração.",
      "Por fim, cabe ao NDE monitorar o PPC e, consequentemente, promover ações que promovam a qualidade dos serviços oferecidos tanto por docentes quanto por TAEs."
    ],
    "conteudo": [
      {
        "subtopico": "",
        "detalhe": [""]
      }
    ]
  },
  {
    "topico": "Requisitos legais e normativos",
    "id": "requisitos_legais_noormativos",
    "descricao": [""],
    "conteudo": [
      {
        "subtopico": "Libras",
        "detalhe": [
          "O Decreto 5.626/2005 regulamenta a Lei 10.436, de 24 de abril de 2002, e o artigo 18 da Lei 10.098, de 19 de dezembro de 2000. Segundo esse Decreto, a disciplina curricular Libras é obrigatória para vários cursos, dentre eles, as licenciaturas e os cursos de Fonoaudiologia. O Decreto também estabelece que, nos demais cursos, a disciplina curricular Libras seja optativa, conforme o Capítulo II, § 2º: “a Libras constituir-se-á em disciplina curricular optativa nos demais cursos de educação superior”.",
          "Em atenção a tal requisito legal, o Bacharelado em Engenharia de Software inclui a disciplina Libras como optativa, no oitavo período do curso."
        ]
      },
      {
        "subtopico": "Política de educação ambiental",
        "detalhe": [
          "A Lei 9.795, de 27 de abril de 1999, institui a Política Nacional de Educação Ambiental, que é regulamentada pelo Decreto 4.281, de 25 de junho de 2002. Conforme essa Lei, Seção II, Art. 10, “a educação ambiental será desenvolvida como uma prática educativa integrada, contínua e permanente em todos os níveis e modalidades do ensino formal”. Adicionalmente, lê-se na Seção II, Art. 10, § 1º: “a educação ambiental não deve ser implantada como disciplina específica no currículo de ensino”. O destaque (negrito) é do presente documento. ",
          "O Bacharelado em Engenharia de Software trata a Educação Ambiental por duas linhas contínuas de atuação: uma delas baseada no planejamento das disciplinas e outra em programa institucional do Instituto de Informática, ambas comentadas abaixo."
        ]
      },
      {
        "subtopico": "Planejamento das disciplinas",
        "detalhe": [
          "O planejamento de cada turma deve se inspirar em possíveis estratégias de inserção de questões ambientais. Por exemplo, adoção de material em formato digital em vez de formato impresso.",
          "A apresentação do conteúdo de cada disciplina também pode se beneficiar do volume significativo de dados sobre o meio ambiente. Por exemplo, área desmatada ao longo do tempo; áreas de preservação; consumo de energia; emissão de CO2; qualidade do ar; consumo de materiais poluentes e geração de lixo eletrônico. Tais dados podem ser empregados para ilustrar o funcionamento de algoritmos e visualização de informações, dentre outras possibilidades. ",
          "Convém destacar que esses exemplos devem ser vistos como elementos de inspiração, a serem renovados continuamente."
        ]
      },
      {
        "subtopico": "Programa institucional",
        "detalhe": [
          "A UFG executa um Plano de Logística Sustentável (PLS), que estabelece práticas de sustentabilidade e racionalização de gastos e processos na administração pública [PLS]. Esse plano é internalizado no Instituto de Informática por um Programa Institucional de extensão. ",
          "O PLS une o cotidiano da prática acadêmica com atitudes “sustentáveis” por meio de recomendações simples, como a impressão em ambos os lados de uma folha e a redução do uso de copos descartáveis, dentre muitas outras.",
          "O Programa Institucional reúne ações que contemplam as orientações do PLS. O objetivo é colocar em prática essas orientações. Por exemplo, enquanto o PLS sugere a coleta seletiva, esse programa cria um repositório para coleta de pilhas e baterias já utilizadas, além de assegurar que aquele material coletado será descartado de forma correta.",
          "O Programa Institucional possui objetivos e ações que incluem a educação ambiental. As opções de ações variam. Dentre elas uma é constante: avaliação dos resultados. Dentre as demais:",
          "Cursos de extensão cuja inscrição seja lixo eletrônico;",
          "Elaboração de material de conscientização sobre consumo parcimonioso de água e energia;",
          "Palestras e cursos sobre TI Verde (green computing);",
          "Pesquisa sobre consumo de energia por datacenters;",
          "Divulgação e destaque de informações sobre o meio ambiente;",
          "Monitoramento e divulgação de informações ambientes sobre Goiás;",
          "Divulgação de softwares que promovem o meio ambiente, por exemplo, evitam deslocamentos, evitam consumo de energia."
        ]
      },
      {
        "subtopico": "Resolução Nº 1 de 17 de junho de 2004",
        "detalhe": [
          "A Resolução Nº 1, de 17 de junho de 2004, trata das Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro-Brasileira e Africana. ",
          "O objetivo é claro: “combater o racismo e as discriminações que atingem particularmente os negros. Nessa perspectiva, propõe a divulgação e produção de conhecimentos, a formação de atitudes, posturas e valores que eduquem cidadãos orgulhosos de seu pertencimento étnico-racial, descendentes de africanos, povos indígenas, descendentes de europeus, de asiáticos. ”",
          "Tal objetivo pressupõe a “adoção de políticas educacionais e de estratégias pedagógicas de valorização da diversidade”, conforme consta na Resolução, assim como os princípios a serem observados para atendê-la: (a) consciência política e histórica da diversidade; (b) fortalecimento de identidades e de direitos e (c) ações educativas de combate ao racismo e a discriminações.",
          "O Art. 7.º da Resolução ainda destaca: “as instituições de ensino superior, respeitada a autonomia que lhe é devida, incluirão nos conteúdos de disciplinas e atividades curriculares dos diferentes cursos que ministram, a Educação das Relações Étnico-Raciais, bem como o tratamento de questões e temáticas que dizem respeito aos afrodescendentes. ”",
          "Tendo em vista o requisito legal estabelecido pela Resolução, duas linhas de atuação são adotadas pelo Bacharelado em Engenharia de Software: inserção de conteúdo pertinente em duas disciplinas curriculares obrigatórias e o Programa Institucional de extensão do Instituto de Informática. Ambas comentadas abaixo."
        ]
      },
      {
        "subtopico": "Disciplinas de graduação obrigatórias",
        "detalhe": [
          "As disciplinas “Computador e Sociedade” e “Interação Humano-Computador” incluem, em seus ementários, tópicos pertinentes às exigências da Resolução. Em particular, remetem para o conhecimento de questões pertinentes ao continente africano e para o conhecimento e respeito à diversidade."
        ]
      },
      {
        "subtopico": "Programa institucional",
        "detalhe": [
          "O Programa Institucional de extensão do Instituto de Informática será realizado por meio de ações, boa parte com ênfase na socialização de conhecimento sobre questões pertinentes à formação dos brasileiros, o que invariavelmente inclui os negros e indígenas. Esse conhecimento é indispensável para a promoção da diversidade, do respeito às diferenças e da igualdade independente das crenças, do sexo, da idade, da cor, da condição social. ",
          "O Instituto de Informática, por meio desse programa de extensão, dedicado exclusivamente às relações étnico-raciais e ao meio ambiente, oferece atuação contínua sobre esses tópicos, durante toda a permanência dos seus estudantes nessa unidade, sejam de graduação ou pós-graduação. ",
          "Especificamente sobre questões de cunho étnico-racial, sem a intenção de ser uma apresentação exaustiva, nem restritiva, são identificadas algumas ações possíveis:",
          "Ações afirmativas por meio de cursos de extensão.",
          "Ações para promoção da diversidade",
          "Palestras sobre a construção de uma sociedade justa.",
          "Palestras sobre a diversidade da formação dos brasileiros.",
          "Palestras sobre a história afro-brasileira, sobre a história africana.",
          "Palestras sobre os povos indígenas.",
          "Apresentações artísticas que valorizem a cultura africana e indígena."
        ]
      },
      {
        "subtopico": "Diretrizes nacionais para Educação em Direitos Humanos",
        "detalhe": [
          "A disciplina “Computador e Sociedade” trata questões relevantes acerca de direitos humanos: aspectos profissionais; participação de mulheres na computação e evolução de aplicações com acessibilidade, dentre outras, nas quais os direitos humanos precisam de discussões mais aprofundadas na computação. Na disciplina “Interação Humano-Computador” as características humanísticas, culturais, de direitos humanos e de aspectos políticos serão abordados em mais profundidade."
        ]
      },
      {
        "subtopico": "Proteção dos direitos da pessoa com Transtornos do Espectro Autista",
        "detalhe": [
          "A proteção dos direitos da pessoa com transtorno do espectro autista é fundamentada na Lei N.º 12.764 de 27 de dezembro de 2012, que institui a política nacional de proteção dos direitos da pessoa com transtorno do espectro autista, e altera o § 3.º do Art. 98 da Lei N.º 8.112, de 11 de dezembro de 1990. Esse requisito legal é atendido por meio da disciplina obrigatória “Interação Humano-Computador”, que inclui em seu ementário tópicos pertinentes ao tratamento de características humanísticas e biológicas na construção de interfaces de usuário, o que possibilita a socializar informações relevantes para que portadores do Transtorno do Espectro Autista possam ser adequadamente considerados por meio de suas necessidades especiais."
        ]
      }
    ]
  }
  ];

export const cursoES: Periodo[] = [
  {
    numero: 1,
    disciplinas: disciplinas.slice(0, 4)
  },
  {
    numero: 2,
    disciplinas: disciplinas.slice(4, 9)
  },
  {
    numero: 3,
    disciplinas: disciplinas.slice(9, 14)
  },
  {
    numero: 4,
    disciplinas: disciplinas.slice(14, 19)
  },
  {
    numero: 5,
    disciplinas: disciplinas.slice(19, 23)
  },
  {
    numero: 6,
    disciplinas: disciplinas.slice(23, 27)
  },
  {
    numero: 7,
    disciplinas: disciplinas.slice(27, 32)
  },
  {
    numero: 8,
    disciplinas: disciplinas.slice(32, 37)
  },
  {
    numero: 9,
    disciplinas: disciplinas.slice(37)
  },
];
