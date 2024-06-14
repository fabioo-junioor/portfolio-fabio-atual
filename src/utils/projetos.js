const projetos = [
    {
        id: 1,
        titulo: 'Alquimia Skate Shop',
        techs: ['Wordpress', 'Elementor', 'Woocommerce', 'CSS3'],
        tipo: 'Ecommerce',
        imagem: require('../assets/projetos/alquimiaskateshop.png'),
        link: 'https://alquimiaskateshop.com.br/',
        desenvolvimento: false
    },
    {
        id: 2,
        titulo: 'Ecológica Junior',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/ecologicajr.png'),
        link: 'https://www.ecologicajr.com.br/',
        desenvolvimento: false
    },
    {
        id: 3,
        titulo: 'F5 Junior',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/f5junior.png'),
        link: 'https://f5jr.com/',
        desenvolvimento: false
    },
    {
        id: 4,
        titulo: 'Fejers',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/fejers.png'),
        link: 'https://fejers.org.br/',
        desenvolvimento: false
    },
    {
        id: 5,
        titulo: 'Nepelin',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/nepelin.png'),
        link: 'https://nepelin.com/',
        desenvolvimento: false
    },
    {
        id: 6,
        titulo: 'Nucleo Impulso',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/nucleo-impulso-site.png'),
        link: 'https://nucleoimpulso.com.br/',
        desenvolvimento: false
    },
    {
        id: 7,
        titulo: 'Patrimônio Dona Francisca',
        techs: ['Wordpress', 'Elementor', 'JavaScript', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/patrimonio-cultural-1.png'),
        link: 'https://patrimoniosdonafrancisca.site/',
        desenvolvimento: false
    },
    {
        id: 8,
        titulo: 'HA Assist',
        descricao: 'Este é um projeto que desenvolvi chamado Ha Assist, é um software desktop que foi idealizada para uma disciplina da faculdade chamada Projeto de Software 2 - UFSM. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A ideia principal desse software é facilitar o cadastro de paciêntes que sofrem de hipertensão arterial por parte das infermeiras nos postos de saúde.',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'MySql', 'Electron'],
        tipo: 'Software Desktop',
        imagem: require('../assets/projetos/ha-assist.png'),
        link: '',
        repositorio: 'https://github.com/fabioo-junioor/HA--ASSIST',
        desenvolvimento: false
    },
    {
        id: 9,
        titulo: "Portfólio 2020",
        descricao: 'Este é um projeto que desenvolvi para servir como portfólio pessoal, se trata de uma aplicação web com um layout intuitivo e atraente que foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. O desenvolvimento do mesmo teve o ituito de praticar funcionalidade e habilidades frontend.',
        techs: ['Vue.Js', 'Vuetify', 'SASS', 'Animate.css', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2020.png'),
        link: 'https://fabiojuniordev2020.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-2020',
        desenvolvimento: false
    },
    {
        id: 10,
        titulo: 'Electoral Partials',
        descricao: 'Este é um projeto que desenvolvi chamado Electoral Partials, é um aplicativo mobile que foi idealizada para uma disciplina da faculdade chamada Projeto e Gerência de Banco de Dados - UFSM. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A ideia principal desse aplicativo é proporcinar ao usuário um meio mais eficiênte de divulgação das parciais eleitorais, sem a necessidade de esperar a urna chegar ao TE e os dados seram lançados no site. O usuário que tiver acesso ao boletim de urna podera imediatamente cadastrar os dados e divulga-los.',
        techs: ['Kotlin', 'Java', 'PHP', 'MySql'],
        tipo: 'Aplicativo Mobile',
        imagem: require('../assets/projetos/electoral-partials.png'),
        link: '',
        repositorio: 'https://github.com/fabioo-junioor/project-app-electoral-partials',
        desenvolvimento: false
    },
    {
        id: 11,
        titulo: "Portfólio 2022",
        descricao: 'Este é um projeto que desenvolvi para servir como portfólio pessoal, se trata de uma aplicação web com um layout intuitivo e atraente que foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. O desenvolvimento do mesmo teve o ituito de praticar funcionalidade e habilidades frontend.',
        techs: ['Vue.Js', 'Vuetify', 'SASS', 'Animate.css', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2022.png'),
        link: 'https://fabiojuniordev2022.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-2022',
        desenvolvimento: false
    },
    {
        id: 12,
        titulo: 'Memórias do Passado',
        descricao: 'Este é um projeto que desenvolvi chamado Memórias do passado, é um jogo web que foi idealizada para uma disciplina da faculdade chamada Desenvolvimento de Software Educacional - UFSM. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A ideia principal desse jogo é proporcionar ao usuário estudar datas importantes através de um jogo da memória. Toda vez que a partida inicia/reinicia as cartas são sorteadas de forma randômica.',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Netlify'],
        tipo: 'Jogo da Memória Web',
        imagem: require('../assets/projetos/memorias-do-passado.png'),
        link: 'https://memoriasdopassado.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/memorias-do-passado',
        desenvolvimento: false
    },
    {
        id: 13,
        titulo: 'UniConecta',
        descricao: 'Este projeto tem como objetivo ajudar na colaboração entre os estudantes da UFSM, através da criação e divulgação de unidades de estudo. Cada unidade de estudo pode compreender diferentes formas de atividades como: cursos, aulas, oficinas, etc, pois os mesmos estarão centralizados em um mesmo lugar. A plataforma está baseada em um sistema de troca que não envolve dinheiro real e sim moedas virtuais. A mesma também dispõe de alguns elementos de gamificação como: moedas virtuais, pontos e ranking, que têm como intuito proporcionar uma maior motivação aos usuários. O usuário que quiser compartilhar algum conhecimento específico, poderá cadastrar sua “unidade” na plataforma para que outros possam adquiri-la, o usuário definirá valor, duração descrição, título, etc.',
        techs: ['Vue.Js', 'BootstrapVue', 'SASS', 'VueRouter', 'PHP', 'MySql', 'Netlify'],
        tipo: 'Aplicação de Compartilhamento',
        imagem: require('../assets/projetos/uniconecta.png'),
        link: 'https://uniconecta.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/uniConecta',
        desenvolvimento: false
    },
    {
        id: 14,
        titulo: 'Portfólio 2024',
        descricao: 'Este é um projeto que desenvolvi para servir como portfólio pessoal, se trata de uma aplicação web com um layout intuitivo e atraente que foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. O desenvolvimento do mesmo teve o ituito de praticar funcionalidade e habilidades frontend.',
        techs: ['Vue.Js', 'BootstrapVue', 'PrimeVue', 'SASS', 'Vite', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2024.png'),
        link: 'https://fabiojuniordev.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-atual',
        desenvolvimento: false
    },
    {
        id: 15,
        titulo: 'Pokedex',
        descricao: 'Este é um projeto que desenvolvi chamado Pokédex, é uma aplicação web que consome dados de uma API e os exibe em um layout intuitivo e atraente. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A Pokédex é uma ferramenta para explorar e descobrir informações sobre diferentes espécies de Pokémon. Utilizando a API pública chamada pokéApi, o projeto oferece uma interface amigável para visualizar detalhes sobre os Pokémon, como suas estatísticas, habilidades e tipos.',
        techs: ['Vue.Js', 'PrimeVue', 'SASS', 'Vite', 'PokeApi', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/pokedex.png'),
        link: 'https://pokkkedex.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/pokedex',
        desenvolvimento: false
    },
    {
        id: 16,
        titulo: 'Monty Hall',
        descricao: 'Este é um projeto que desenvolvi chamado Monty Hall, é um jogo web que foi idealizada para praticar o desenvolvimento frontend. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A ideia principal desse jogo é proporcionar ao usuário a definição de quantas portas haverá e posteriormente o mesmo acertar em qual delas á um presente. Toda vez que a partida inicia/reinicia o presente é sorteado de forma randômica entre as portas.',
        techs: ['Vue.Js', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/monty-hall.png'),
        link: 'https://montyyhall.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/monty-hall',
        desenvolvimento: false
    },
    {
        id: 17,
        titulo: 'Calculadora',
        descricao: 'Este é um projeto que desenvolvi para praticar funcionalidades javascrip e manipulação do DOM, se trata de uma aplicação web com um layout intuitivo e atraente que foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. O desenvolvimento do mesmo teve o ituito de praticar habilidades frontend.',
        techs: ['Vue.Js', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/calculadora.png'),
        link: 'https://ccalculadora.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/calculadora',
        desenvolvimento: false
    },
    {
        id: 18,
        titulo: 'Game Hush',
        descricao: 'Este é um projeto que desenvolvi chamado Game Rush, é um jogo web que foi idealizada para uma disciplina da faculdade chamada Paradigmas de Programação - UFSM. A ideia principal desse jogo é proporcionar ao usuário diversão enquanto o mesmo conduz o estudante na busca por conhecimento conletando livros ao longo do percurso. O estudante deverá coletar um numero determinado de livros até o final do percurso.',
        techs: ['Java', 'Libgdx', 'Itch.io'],
        tipo: 'Jogo Web',
        imagem: require('../assets/projetos/game-hush.png'),
        link: 'https://julianopasa.itch.io/procrastinator-rush',
        repositorio: 'https://github.com/fabioo-junioor/game-rush',
        desenvolvimento: false
    },
    {
        id: 19,
        titulo: 'Mesa Online',
        descricao: 'Este é um projeto que desenvolvi chamado Mesa Online, é uma aplicação web que consome dados de uma API desenvolvida em PHP e os exibe em um layout intuitivo e atraente criado em VueJs. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. A Mesa Online é uma ferramenta que foi desenvolvida para proporcionar aos usuários reservarem lugares em estabelecimento comercias como: restaurantes, pubs, bares, etc. Os estabelecimentos podem efetuar seu cadastro e disponibilizar informções pertinentes para que usuário possam reservar um os mais lugares com rapidez sem a necessidade de esperar o retorno de um funcionário.',
        techs: ['Vue.Js', 'SASS', 'Quasar', 'VueRouter', 'Node.Js', 'MySql', 'Vite', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/mesa-online.png'),
        link: 'https://mesaonline.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/mesa-online',
        desenvolvimento: true
    },
    {
        id: 20,
        titulo: 'Facemash',
        descricao: 'Este é um projeto que desenvolvi chamado Facemash, é uma aplicação web que consome dados de uma API e os exibe em um layout intuitivo e atraente. Todo projeto foi desenvolvido de forma responsiva para melhor adaptação em diversos dispositivos. O Facemash é uma ferramenta para o usuário votar no seu personagem favorito da saga Harry Potter. Utilizando a API pública chamada potterDB, o projeto oferece uma interface amigável para visualizar detalhes sobre os personagens, com seu nome e espécie. Cada voto é computado e salvo em um banco de dados no firebase.',
        techs: ['Vue.Js', 'SASS', 'Vite', 'Firebase', 'Netlify'],
        tipo: 'Aplicação web',
        imagem: require('../assets/projetos/facemash.png'),
        link: 'https://ffacemash.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/facemash',
        desenvolvimento: false
    }
]

export default projetos;
