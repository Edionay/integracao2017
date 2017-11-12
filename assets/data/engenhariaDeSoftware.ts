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
}

export const disciplinas: Disciplina[] = [
  {
    "id": 0,
    "nome": "Computação e Sociedade",
    "ementa": [
      "História da computação",
      "Estudo e análise de casos de aplicação de computadores na sociedade e para o meio ambiente",
      "Subáreas da computação e áreas interdisciplinares",
      "Importância e desafios da computação no Brasil e no mundo",
      "Cursos de computação e aspectos profissionais: tipos de cursos, perfis profissionais, demanda do mercado,organizações e associações na área, regulamentação da profissão",
      "mercado, organizações e associações na área, regulamentação da profissão",
      "Leis e normas relacionadas à Informática",
      "Questões ambientais, raciais, de saúde e de inclusão digital relacionadas à Computação",
      "Ética na Computação",
      "Empresas de tecnologia da informação",
      "Incubadoras de empresas."
    ],
    "cargaHorariaTotal": 32,
    "cargaHorariaTeorica": 32,
    "cargaHorariaPratica": 0,
    "periodo": 1,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 1,
    "nome": "Introdução à Programação",
    "ementa": [
      "Introdução a algoritmos",
      "Conceitos básicos de programas: constantes; tipos de dados primitivos; variáveis; atribuição; entrada e saída de dados; expressões; estruturas de decisão; estruturas de repetição",
      "Ponteiro",
      "Estruturas de dados homogêneas e heterogêneas: vetores, matrizes, cadeias de caracteres, registros",
      "Subprogramas: funções; passagens de parâmetros por valor e por referência, recursividade",
      "Manipulação de arquivos: abertura, fechamento, leitura e gravação",
      "Tipos de acesso a arquivos: sequencial e indexado",
      "Tipos de arquivos (texto e binário)",
      "Transcrição de algoritmos para uma linguagem de programação",
      "Domínio de uma linguagem de programação: sintaxe e semântica; interpretação e compilação de programas; ambiente de desenvolvimento de programas; estilo de codificação; documentação de código; técnicas de depuração e técnicas de profiling; desenvolvimento e uso de bibliotecas."
    ],
    "cargaHorariaTotal": 128,
    "cargaHorariaTeorica": 48,
    "cargaHorariaPratica": 80,
    "periodo": 1,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 2,
    "nome": "Cálculo 1A",
    "ementa": [
      "Números reais",
      "Funções reais de uma variável real e suas inversas",
      "Noções sobre cônicas",
      "Limite e continuidade",
      "Derivadas e aplicações",
      "Integrais",
      "Técnicas de Integração",
      "Integrais impróprias",
      "Polinômio de Taylor",
      "Aplicações."
    ],
    "cargaHorariaTotal": 96,
    "cargaHorariaTeorica": 96,
    "cargaHorariaPratica": 0,
    "periodo": 1,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 3,
    "nome": "Fundamentos de Matemática para Computação",
    "ementa": [
      "Noções de lógica",
      "Introdução a demonstrações",
      "Indução matemática, Recursividade e Relações de Recorrência, Conjuntos e Combinatória",
      "Séries e sequências",
      "Relações e Funções",
      "Representações numéricas e Mudança de base numérica."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 1,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 4,
    "nome": "Arquitetura de Computadores",
    "ementa": [
      "Visão geral dos computadores modernos",
      "Evolução da arquitetura dos computadores",
      "Memória e representação de dados e instruções",
      "Processador, ciclo de instrução, formato e endereçamento",
      "Noções básicas de programação em linguagem de montagem",
      "Dispositivos de entrada e saída",
      "Sistemas de interconexão (barramentos)",
      "Interfaceamento e técnicas de entrada e saída",
      "Hierarquia de memória",
      "Introdução a arquiteturas paralelas e métricas de desempenho."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 2,
    "obrigatoria": "Sim",
    "preRequisitos": ["Fundamentos de Matemática para Computação"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 5,
    "nome": "Algoritmos e Estruturas de Dados 1",
    "ementa": [
      "Noções de complexidade de algoritmos (notações de complexidade)",
      "Algoritmos de pesquisa: pesquisa sequencial e binária.",
      "Algoritmos de ordenação.",
      "Tipos abstratos de dados.",
      "Estruturas de dados utilizando vetores: pilhas, filas, listas (simples e circulares).",
      "Estruturas de dados com alocação dinâmica de memória: pilhas, filas, listas (simplesmente encadeadas, duplamente encadeadas e circulares)."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 32,
    "cargaHorariaPratica": 32,
    "periodo": 2,
    "obrigatoria": "Sim",
    "preRequisitos": ["Introdução a Programação"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 6,
    "nome": "Probabilidade e Estatística A",
    "ementa": [
      "Estatística descritiva",
      "Noções sobre amostragem",
      "Introdução à teoria de conjuntos",
      "Introdução à teoria de probabilidade: espaço amostral, eventos, frequência relativa, fundamentos de probabilidade, probabilidade condicional, eventos independentes e teorema de Bayes",
      "Variáveis aleatórias: conceitos básicos, esperança e variância",
      "Distribuições discretas de probabilidade: uniforme, binomial e Poisson",
      "Distribuições contínuas de probabilidade: uniforme, exponencial, normal e t-Student",
      "Estimação pontual e intervalar para uma população: média e proporção.Teste de hipóteses para uma população: média e proporção",
      "Correlação linear e regressão linear simples."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 2,
    "obrigatoria": "Sim",
    "preRequisitos": ["Cálculo 1A"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 7,
    "nome": "Álgebra Linear",
    "ementa": [
      "Sistemas lineares e matrizes",
      "Espaços vetoriais",
      "Transformações lineares",
      "Autovalores e autovetores.Espaços com produto interno."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 2,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 8,
    "nome": "Lógica Matemática",
    "ementa": [
      "Noções básicas: linguagem natural vs linguagens formais; verdade, validade, satisfatibilidade; lógica proposicional (sintaxe e semântica, propriedades e relações semânticas, consequência lógica, simplificação de fórmulas); lógica de primeira ordem (sintaxe e semântica, propriedades e relações semânticas, formas normais);",
      "Métodos de validação: métodos diretos de prova; métodos de prova por contradição; indução estrutural.",
      "Linguagem para experimentação.",
      "Aplicações básicas."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 2,
    "obrigatoria": "Sim",
    "preRequisitos": ["Fundamentos da Matemática para Computação"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 9,
    "nome": "Programação Orientada a Objetos",
    "ementa": [
      "Abstração e tipos abstratos de dados.Classes, métodos, encapsulamento, interface",
      "Mensagens, instâncias e inicialização",
      "Herança e composição.Polimorfismo.Uso de uma linguagem orientada a objetos.Noções de UML.Noções de padrões de projeto orientado a objetos"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 32,
    "cargaHorariaPratica": 32,
    "periodo": 3,
    "obrigatoria": "Sim",
    "preRequisitos": ["Introdução a Programação"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 10,
    "nome": "Algoritmos e Estruturas de Dados 2",
    "ementa": [
      "Árvores: formas de representação, recursão em árvores, árvores binárias, árvores binárias de busca, árvores balanceadas (AVL e rubro-negras).",
      "Filas de prioridades",
      "Heaps, Heapsort",
      "Hashing: tipos de funções de hashing; tratamento de colisões.Definições de Grafos.",
      "Estruturas de Dados para representação de grafos.Algoritmos básicos em grafos."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 3,
    "obrigatoria": "Sim",
    "preRequisitos": ["Algoritmos e Estruturas de Dados 1"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 11,
    "nome": "Optativa 1",
    "ementa": [""],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 3,
    "obrigatoria": "",
    "preRequisitos": [""],
    "nucleo": "",
    "bibliografia": [""]
  },
  {
    "id": 12,
    "nome": "Linguagens e Paradigmas de Programação",
    "ementa": [
      "Estudo dos conceitos de linguagens de programação e dos paradigmas de programação: procedural, funcional, lógico, orientado a objeto e script.",
      "Reflexão sobre as características desejáveis em uma linguagem de programação e os critérios de seleção de linguagens de acordo com as especificidades dos domínios de aplicação.",
      "Descrição de sintaxe e semântica.",
      "Estudo sobre tipos de dados, estruturas de controle, ambientes de execução, variáveis, expressões e subprogramas em linguagens de programação."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 32,
    "cargaHorariaPratica": 32,
    "periodo": 3,
    "obrigatoria": "Sim",
    "preRequisitos": ["Cálculo 1A"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 13,
    "nome": "Engenharia de Software",
    "ementa": [
      "Requisitos de software.",
      "Projeto (design) de software.",
      "Construção de software.",
      "Teste de software.",
      "Manutenção de software.",
      "Gerência de configuração de software.",
      "Gerência de projeto de software.",
      "Processo de engenharia de software.",
      "Modelos e métodos de engenharia de software.",
      "Qualidade de software.",
      "Prática profissional de engenharia de software.",
      "Economia para engenharia de software.",
      "Fundamentos de engenharia."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 3,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 14,
    "nome": "Análise e Projeto de Algoritmos",
    "ementa": [
      "Medidas de complexidade, análise assintótica de limites de complexidade para algoritmos iterativos e recursivos, técnicas de prova de cotas inferiores.",
      "Corretude de Algoritmos.",
      "Exemplos de análise de algoritmos.",
      "Técnicas de projeto de algoritmos: dividir para conquistar, programação dinâmica, algoritmos gulosos.",
      "Introdução à NP-Completude."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 4,
    "obrigatoria": "Sim",
    "preRequisitos": ["Fundamentos de Matemática para Computação, Algoritmos e Estruturas de Dados 2"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 15,
    "nome": "Interação Humano-Computador",
    "ementa": [
      "Aspectos gerais sobre interação humano-computador",
      "Características humanísticas e biológicas, envolvendo questões sobre genealogia, gênero, aspectos étnicos, raciais e culturais, direitos e aspectos políticos, deficiências, limitações e capacidades, dentre outros",
      "Ciclo da interação e principais problemas. Metas de usabilidade e experiência do usuário",
      "Fatores humanos em software interativo: teoria, princípios e regras básicas. Modelos conceituais e metáforas",
      "Estilos de interação. Elementos de interação (menus, formulários, manipulação direta e outros). Voz, linguagem natural, sons, páginas Web. Padrões para interface",
      "Localização e internacionalização.",
      "Princípios de projeto de interfaces humano-computador. Métodos de projeto de interação. Projeto visual (cores, ícones, fontes e outros). Tempo de resposta e retroalimentação.",
      "Dispositivos de interação.",
      "Métodos de avaliação de interfaces: avaliação heurística, abordagens para testes realizados com apoio de usuários, técnicas de testes para páginas Web, entre outros",
      "Visão geral de ferramentas de desenvolvimento de interfaces humano-computador."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 32,
    "cargaHorariaPratica": 32,
    "periodo": 4,
    "obrigatoria": "Sim",
    "preRequisitos": ["Algoritmos e Estruturas de Dados 1, Probabilidade e Estatística A"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 16,
    "nome": "Optativa 2",
    "ementa": [""],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 4,
    "obrigatoria": "",
    "preRequisitos": [""],
    "nucleo": "",
    "bibliografia": [""]
  },
  {
    "id": 17,
    "nome": "Banco de Dados",
    "ementa": [
      "Conceitos básicos de Banco de Dados",
      "Modelo relacional",
      "Linguagens para Banco de Dados: álgebra relacional, cálculo relacional e SQL",
      "Modelo Entidade-Relacionamento e extensões",
      "Mapeamento ER-relacional",
      "Normalização."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 48,
    "cargaHorariaPratica": 16,
    "periodo": 4,
    "obrigatoria": "Sim",
    "preRequisitos": ["Lógica Matemática"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 18,
    "nome": "Projeto de Software",
    "ementa": [
      "Fundamentos de design de software",
      "Questões básicas de design de software: concorrência, controle e tratamento de eventos, persistência de dados, distribuição, tratamento de erro e exceção, tolerância a falhas, interação e apresentação, e segurança",
      "Estrutura e arquitetura de software",
      "Projeto de interface de usuário",
      "Análise de qualidade e avaliação de design de software",
      "Notação de design de software",
      "Métodos e estratégias de design de software",
      "Ferramentas de design de software."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 4,
    "obrigatoria": "Sim",
    "preRequisitos": ["Programação Orientada a Objetos, Engenharia de Software"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 19,
    "nome": "Sistemas Operacionais",
    "ementa": [
      "Conceitos de Hardware e Software",
      "Tipos de Sistemas Operacionais",
      "Organização da Estrutura Interna do Sistema Operacional",
      "Gerência de Processos",
      "Gerência do Processador",
      "Gerência de Memória",
      "Gerência de Dispositivos de Entrada e Saída",
      "Sistemas de Arquivos",
      "Estudos de casos de sistemas operacionais atuais"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": ["Arquitetura de Computadores"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 20,
    "nome": "Pesquisa Operacional",
    "ementa": [
      "Modelagem",
      "Problema de Programação Linear (PL)",
      "Resolução gráfica de PL",
      "Algoritmo Simplex",
      "Dualidade",
      "Algoritmo Simplex-Dual",
      "Pós-otimização e Análise de Sensibilidade."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": ["Álgebra Linear"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 21,
    "nome": "Linguagens Formais e Autômatos",
    "ementa": [
      "Conceitos básicos de linguagens",
      "Mecanismos geradores (gramáticas) e reconhecedores (determinísticos e não determinísticos) de linguagens regulares, livres de contexto e sensíveis ao contexto; relação entre estas classes de linguagens e suas principais propriedades",
      "Hierarquia de Chomsky"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": ["Fundamentos de Matemática para Computação"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 22,
    "nome": "Redes de computadores",
    "ementa": [
      "Fundamentos",
      "Arquitetura de Redes TCP/IP (Internet)",
      "Camadas de Aplicação, Transporte, Rede, Enlace e Física",
      "Gerenciamento de Redes",
      "Redes Sem Fio e Mobilidade",
      "Estudo de Caso de Tópicos Emergentes em Redes."
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 23,
    "nome": "Introdução à Língua Brasileira de Sinais",
    "ementa": [
      "Introdução às práticas de compreensão e produção em LIBRAS através do uso de estruturas e funções comunicativas elementares",
      "Concepções sobre a Língua de Sinais",
      "O surdo e a sociedade"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 10,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 24,
    "nome": "Compiladores",
    "ementa": [
      "A estrutura de um compilador",
      "Análises léxica e sintática",
      "Definições dirigidas por sintaxe e análise semântica",
      "Organização da tabela de símbolos",
      "Representação intermediária do programa-fonte",
      "Geração do código-objeto da compilação",
      "Introdução à otimização do código-objeto",
      "Implementação de um compilador"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 10,
    "obrigatoria": "Sim",
    "preRequisitos": ["Algoritmos e Estruturas de Dados 2, Linguagens Formais e Autômatos"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 25,
    "nome": "Sistemas Distribuídos",
    "ementa": [
      "Introdução a Sistemas Distribuídos",
      "Invocação Remota",
      "Objetos Distribuídos",
      "Arquiteturas Orientadas a Serviços e utilização de serviços Web",
      "Computação Móvel e Ubíqua",
      "Estudo de Casos de Tópicos Emergentes em Sistemas Distribuídos"
    ],
    "cargaHorariaTotal": 64,
    "cargaHorariaTeorica": 64,
    "cargaHorariaPratica": 0,
    "periodo": 10,
    "obrigatoria": "Sim",
    "preRequisitos": ["Programação Orientada a Objetos"],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 26,
    "nome": "Construção de Software",
    "ementa": [
      "Visão geral (4h): construção (minimizar complexidade, antecipação de mudança, verificação, padrões), projeto de software (software design), qualidade de produto",
      "Planejamento (8h): linguagens de programação e processos de construção",
      "Gerência de construção (16h): controle de versão, inspeção e revisão de código",
      "Fundamentos de codificação (32h): estratégias recomendadas para criar código, variáveis, classes, interfaces, polimorfismo, rotinas, recursão, condições, laços, tratamento de exceção, reflexão, programação defensiva, padrão de codificação (leiaute e estilo), documentação, ferramentas de programação",
      "Projeto (design) detalhado e codificação (32h): noções de projeto detalhado, especificação de projeto, análise sintática (parsing), expressões regulares, parametrização (generics), closure, logging, configuração de software em tempo de execução",
      "Internacionalização",
      "Técnicas de construção baseadas em estado e tabelas",
      "Refatoração (8h)",
      "Testes de unidade (16h)",
      "Detecção e remoção de defeitos (debugging) (8h)",
      "Integração (4h): integração contínua."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 27,
    "nome": "Modelagem de Software",
    "ementa": [
      "Conceitos (4h): software, qualidade de software, requisitos de software, projeto de software",
      "Processo de projeto de software (4h)",
      "Notações para registro de modelos orientados a objetos (16h)",
      "Modelagem de software orientado a objetos (40h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 28,
    "nome": "Processos de Software",
    "ementa": [
      "Visão geral (8h): processo, método e modelo",
      "Processos específicos de software: processos de implementação (12h), processos de suporte (12h) e processos de reutilização (2h)",
      "Qualidade de Processo: modelos de qualidade de processos (12h), avaliação da qualidade do processo (12h) e abordagens de implementação de processo (6h)"
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 29,
    "nome": "Engenharia de Sistemas",
    "ementa": [
      "Fundamentos de engenharia (16h): métodos empíricos e técnicas experimentais; análise estatística; medição; design; modelagem, prototipação e simulação; normas e padrões; análise de causa raiz",
      "Fundamentos de sistema (16h): taxonomias de sistema; sistemas de engenharia (sistemas produzidos por engenharia - engineered systems); sistemas intensivos em software (software-intensive systems); sistemas de sistemas; complexidade de sistemas; propriedades emergentes; princípios do pensamento sistêmico; representação de sistemas por modelos",
      "Engenharia de Sistemas (32h): abordagens e metodologias; partes interessadas (stakeholders) e suas necessidades; ciclo de vida de sistemas de engenharia (concepção, conceitos operacionais, design, validação de design, construção, validação de construção, implantação, sustentação e descontinuação); processos do ciclo de vida de sistemas (negociação, preparação para projeto organizacional, gestão técnica, processos técnicos); qualidade de processo."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 5,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 30,
    "nome": "Design de Software",
    "ementa": [
      "Conceitos (8h): design, software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado",
      "Contexto de projeto de software (4h)",
      "Processos e artefatos de projeto de software (8h)",
      "Notações de projeto de software (8h)",
      "Princípios e fundamentos de projeto de software (16h): abstração, acoplamento, coesão, decomposição, encapsulamento, separar interface e implementação, suficiência, completitude, simplicidade e separation of concerns",
      "Aspectos de projeto de software (16h): concorrência, controle e tratamento de eventos, tratamento de exceção, persistência, distribuição, interação (apresentação)",
      "Qualidade de projeto de software (8h): técnicas de avaliação, medidas, ferramentas",
      "Métodos e estratégias de projeto (4h)",
      "Método para projeto orientado a objetos (4h)",
      "Padrões de projeto orientado a objetos (16h)",
      "Prática de projeto de software orientado a objetos (36h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 6,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 31,
    "nome": "Domínios de Software",
    "ementa": [
      "Visão ampla de domínios de desenvolvimento (4h): sistemas, componentes e a relação entre eles",
      "Especificidades de alguns domínios de desenvolvimento (8h)",
      "Especificidades de um domínio (12h): requisitos, projeto, construção",
      "Desenvolvimento de software em um domínio (ênfase na construção) (40h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 6,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 32,
    "nome": "Processos de Qualidade de Software",
    "ementa": [
      "Visão Geral de Qualidade de Software (4h): custos e impactos da qualidade de software, questões éticas e culturais da qualidade de software",
      "Processo de garantia da qualidade de software (10h): garantia do produto e garantia do processo",
      "Processo de Verificação e Validação de Software (36h): requisito, projeto (design), código, integração, documentação",
      "Processos de Revisão e Auditoria de Software (14h): revisões gerenciais e revisões técnicas."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 6,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 33,
    "nome": "Gerência de Projeto de Software",
    "ementa": [
      "Projeto e gerência de projeto (4h): ciclo de vida de produto, serviço e projeto; partes interessadas (stakeholders); correlação entre projetos, operações e programas; gerência de portfólio de projetos; escritório de projetos (PMO)",
      "Tipos de projeto de software (4h): aquisição, desenvolvimento, refatoração, descontinuação",
      "Tipos de ciclo de vida de projeto de software (4h): preditivo, iterativo, adaptativo; processos empíricos e processos definidos e sua relação com métodos ágeis e métodos planejados para gerência de projeto de software",
      "Modelos de qualidade de processo de gerência de projeto de software (4h)",
      "Áreas de conhecimento da gerência de projetos aplicadas a projetos de software (48h): escopo, tempo, custo, qualidade, recursos humanos, comunicações, riscos, aquisições, integração e partes interessadas"
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 6,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 34,
    "nome": "Software Concorrente e Distribuído",
    "ementa": [
      "Qualidade de produto (4h): escalabilidade, tolerância a falhas, disponibilidade, desempenho.",
      "Conceitos (4h): middleware, distribuição, paralelismo, concorrência, RESTful, web, internet das coisas, contêineres, troca de mensagens, micro-serviços, serviços web.",
      "Métodos para construção de software distribuído e para construção de software concorrente (8h).",
      "Concorrência (16h): paralelismo, aplicações IO-intensive e CPU-intensive, thread safe, memória compartilhada, Software Transactional Memory, atores, abordagens para explorar concorrência.",
      "Distribuição (24h): projeto, implementação e uso de interface de programação, RESTful, serviços web e micro-serviços (microservices).",
      "Troca de mensagens (messaging) (8h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 7,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 35,
    "nome": "Experiência do Usuário de Software",
    "ementa": [
      "Qualidade em uso (4h): usabilidade, acessibilidade.",
      "Design centrado no usuário (8h): diretrizes, pesquisa, personas, jornadas de usuário, modelagem (especificação) e ferramentas.",
      "Projeto de interação (16h): diretrizes, criação, modelagem (especificação) e ferramentas.",
      "Design de software e interfaces gráficas (8): padrões arquiteturais para design da camada de apresentação (MVC, MVP, MVVM e outros).",
      "Implementação de interfaces (20h).",
      "Modelos de validação de experiência (8h): modelos, métodos e técnicas para validação de experiência do usuário."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 7,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 36,
    "nome": "Arquitetura de Software",
    "ementa": [
      "Conceitos (4h): software, qualidade de software, requisitos de software, arquitetura de software e projeto detalhado.",
      "Requisitos funcionais e requisitos de qualidade (8h): conceituação e identificação de requisitos relevantes para a arquitetura.",
      "Documentação de arquitetura de software (8h).",
      "Fundamentos de arquitetura de software (4h): importância, contexto, estilos.Método de desenvolvimento de arquitetura de software (8h).",
      "Técnicas para satisfazer requisitos de qualidade (16h).Criação de arquiteturas de software (16h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 7,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 37,
    "nome": "Requisitos de Software",
    "ementa": [
      "Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.",
      "Modelos e métodos da engenharia de requisitos (32).Gerência de projetos de engenharia de requisitos (8).",
      "Processo de projeto arquitetural (8h): relação com requisitos.",
      "Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.",
      "Modelos e métodos da engenharia de requisitos (32).",
      "Gerência de projetos de engenharia de requisitos (8).",
      "Processo de projeto arquitetural (8h): relação com requisitos.",
      "Processo de requisitos (16h): definições básicas, eliciação de requisitos, análise de requisitos, especificação de requisitos, verificação e validação de requisitos.",
      "Modelos e métodos da engenharia de requisitos (32).",
      "Gerência de projetos de engenharia de requisitos (8).",
      "Processo de projeto arquitetural (8h): relação com requisitos."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 7,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 38,
    "nome": "Governança e Gestão de Serviços de Software",
    "ementa": [
      "Governança (8h): governança corporativa; governança de TI (GTI); governança de Software (GS); princípios da GS; conformidade (compliance); alinhamento dos serviços de software ao negócio da organização; normas, frameworks, padrões, modelos de qualidade e de maturidade de GS",
      "Abordagens para GS (8h): aplicação de abordagens de GS em um contexto organizacional",
      "Objetivos de controle para GS; indicadores e avaliação de desempenho de software; direcionamento, avaliação e controle do uso de serviços de software para apoiar os objetivos de uma organização",
      "Planejamento e controle estratégico de software (8h): alinhamento entre objetivos organizacionais e objetivos relacionados a software; avaliação, direcionamento e monitoramento de processos de software; diagnóstico de maturidade de processos de software; alinhamento de políticas de software ao plano diretor de TI de uma organização",
      "Gestão de riscos de software; riscos organizacionais; riscos relacionados à segurança física e lógica de software",
      "Governança de dados (8h): Segurança da informação em uma organização; Segurança de software",
      "Software como um serviço (SaaS) (8h): serviços de Software (SS); gestão de Serviços de Software (GSS);Estratégia organizacional para SS; Modelos, normas e padrões relacionados à GSS",
      "Ciclo de vida de SS (8h): planejamento; desenvolvimento; implantação e sustentação; Operação de SS e apoio (suporte) à operação de SS; Descontinuação de SS",
      "Manutenção de SS (8h): correção, adaptação e evolução de SS; gestão de incidentes e problemas em SS; controle de mudança e de configuração; controle de qualidade",
      "Gerência de processos de negócio (BPM – Business Process Management) aplicada à GSS (8h): representação de SS como processos de negócio; notação para modelagem de processos de negócio (BPMN); análise, validação e evolução de processos de negócio e de SS."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 7,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 39,
    "nome": "Software para Sistemas Ubíquos",
    "ementa": [
      "Sistemas de informação que fazem uso de dispositivos (ubíquos) (16h): smartphones, sensores, internet das coisas (IoT), stream analytics e aspectos de segurança (vulnerabilidades, criptografia, certificados digitais).",
      "Definição de arquiteturas para soluções móveis (16): conectar serviços, possivelmente de grande volume, fluxo e em tempo real, com a necessidade de analisá-los.",
      "Desenvolvimento de código para smartphone, sensor ou outro dispositivo capaz de alimentar/receber informações de sistema de informação (32h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 8,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 40,
    "nome": "Software para Persistência de Dados",
    "ementa": [
      "Visão geral de persistência (12h): arquivos em formato texto/binário",
      "Serialização de objetos",
      "Documentos XML",
      "JSON",
      "Bancos de dados relacionais",
      "Bancos NoSql.",
      "Modelagem e implementação de bancos de dados (28h).",
      "Mapeamento entre OO e relacional (8h).",
      "Refatoração de bancos de dados (8h).",
      "Integração de bancos de dados (8h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 8,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 41,
    "nome": "Padrões de Arquitetura de Software",
    "ementa": [
      "Conceitos (12h): arquitetura de software e padrões de arquitetura (blackboard, microservices, invocação implícita, arquitetura orientada a serviços, multitier, arquitetura orienta a eventos, plugin, filtros e pipes, MVC).",
      "Norma ISO/IEC/IEEE 42010:2011 (8h).",
      "Análise (avaliação) de arquiteturas de software (12h).",
      "Criação de arquiteturas de software (32h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 8,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 42,
    "nome": "Teste de Software",
    "ementa": [
      "Processo de construção (8h): definições básicas, atividades e documentação.",
      "Processo de Teste de Software (56): definições básicas, técnicas de teste, teste baseado em intuição e experiência do engenheiro de software, atividades do processo, documentação e ferramentas."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 8,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 43,
    "nome": "Metodologia e Experimentação em Engenharia de Software",
    "ementa": [
      "Metodologia Científica (16h): aplicação de metodologia científica em atividades de Engenharia de Software",
      "Fundamentos da Engenharia de Software Experimental (16h): contexto da experimentação na Engenharia de Software; principais tipos de experimentos aplicados à Engenharia de Software; estudos primários e secundários; revisão e mapeamento sistemático da literatura",
      "Realização de Experimentos em Engenharia de Software (32h)."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 10,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 44,
    "nome": "Mercado e Economia de Software",
    "ementa": [
      "Modelos de negócio para software (aluguel, serviço, código aberto).",
      "Leis, normas, impostos e legislação brasileira para o mercado local e para a exportação de software.",
      "Programas de incentivo à exportação e à produção de software.",
      "Características e exigências do mercado interno e externo.",
      "Identificação de oportunidades de inovação em software.",
      "Planos de negócio de software para o mercado nacional e global.",
      "Engenharia Econômica.",
      "Fornecimento, demanda e produção.",
      "Lucro produzido por capital (interest).",
      "Análise custo-benefício.",
      "Análise breakeven.",
      "Retorno de investimento.",
      "Avaliação de alternativas.",
      "Economia aplicada ao desenvolvimento de software."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 10,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
  },
  {
    "id": 45,
    "nome": "Prática em Engenharia de Software",
    "ementa": [
      "Aplicação do corpo de conhecimento da Engenharia de Software no contexto de projetos realizados em uma Fábrica de Software (320h): emprego de processos de Engenharia de Software em abrangência e profundidade;",
      "Seleção e utilização de normas, métodos, técnicas e ferramentas de Engenharia de Software para atingir objetivos estabelecidos no projeto;",
      "Integração e consolidação de conhecimentos e habilidades esperadas do profissional de Engenharia de Software;",
      "Exercício de práticas e atitudes profissionais embasadas no código de ética e na postura profissional da Engenharia de Software;",
      "Prática em processos técnicos de Engenharia de Software;",
      "Prática em Gestão de Engenharia de Software;",
      "Prática em Tecnologias de Engenharia de Software."
    ],
    "cargaHorariaTotal": 1,
    "cargaHorariaTeorica": 1,
    "cargaHorariaPratica": 1,
    "periodo": 9,
    "obrigatoria": "Sim",
    "preRequisitos": [""],
    "nucleo": "NC",
    "bibliografia": [""]
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
