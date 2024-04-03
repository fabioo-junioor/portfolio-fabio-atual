const projetos = [
    {
        id: 1,
        titulo: 'Alquimia Skate Shop',
        techs: ['Wordpress', 'Elementor', 'Woocommerce', 'CSS3'],
        tipo: 'Ecommerce',
        imagem: require('../assets/projetos/alquimiaskateshop.png'),
        link: 'https://alquimiaskateshop.com.br/'
    },
    {
        id: 2,
        titulo: 'Ecológica Junior',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/ecologicajr.png'),
        link: ''
    },
    {
        id: 3,
        titulo: 'F5 Junior',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/f5junior.png'),
        link: 'https://f5jr.com/'
    },
    {
        id: 4,
        titulo: 'Fejers',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/fejers.png'),
        link: 'https://fejers.org.br/'
    },
    {
        id: 5,
        titulo: 'Nepelin',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/nepelin.png'),
        link: 'https://nepelin.com/'
    },
    {
        id: 6,
        titulo: 'Nucleo Impulso',
        techs: ['Wordpress', 'Elementor', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/nucleo-impulso-site.png'),
        link: 'https://nucleoimpulso.com.br/'
    },
    {
        id: 7,
        titulo: 'Patrimônio Dona Francisca',
        techs: ['Wordpress', 'Elementor', 'JavaScript', 'CSS3'],
        tipo: 'Site Institucional',
        imagem: require('../assets/projetos/patrimonio-cultural-1.png'),
        link: 'https://patrimoniosdonafrancisca.site/'
    },
    {
        id: 8,
        titulo: 'HASupport',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'MySql', 'Bootstrap', 'Electron'],
        tipo: 'Software Desktop',
        imagem: require('../assets/projetos/imagem-dafault.jpg'),
        link: '',
        repositorio: 'https://github.com/fabioo-junioor/HA--ASSIST'
    },
    {
        id: 9,
        titulo: "Portfólio 2020",
        techs: ['Vue.Js', 'Vuetify', 'SASS', 'Animate.css', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2020.png'),
        link: 'https://fabiojuniordev2020.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-2020'
    },
    {
        id: 10,
        titulo: 'Electoral Partials',
        techs: ['Kotlin', 'Java', 'PHP', 'MySql'],
        tipo: 'Aplicativo Mobile',
        imagem: require('../assets/projetos/imagem-dafault.jpg'),
        link: '',
        repositorio: 'https://github.com/fabioo-junioor/project-app-electoral-partials'
    },
    {
        id: 11,
        titulo: "Portfólio 2022",
        techs: ['Vue.Js', 'Vuetify', 'SASS', 'Animate.css', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2022.png'),
        link: 'https://fabiojuniordev2022.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-2022'
    },
    {
        id: 12,
        titulo: 'Memórias do Passado',
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Netlify'],
        tipo: 'Jogo da Memória Web',
        imagem: require('../assets/projetos/memorias-do-passado.png'),
        link: 'https://memoriasdopassado.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/memorias-do-passado'
    },
    {
        id: 13,
        titulo: 'UniConecta',
        techs: ['Vue.Js', 'BootstrapVue', 'SASS', 'VueRouter', 'PHP', 'MySql', 'Netlify'],
        tipo: 'Aplicação de Compartilhamento',
        imagem: require('../assets/projetos/uniconecta.png'),
        link: 'https://uniconecta.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/uniConecta'
    },
    {
        id: 14,
        titulo: 'Portfólio 2024',
        techs: ['Vue.Js', 'BootstrapVue', 'PrimeVue', 'SASS', 'Vite', 'Netlify'],
        tipo: 'Site Pessoal',
        imagem: require('../assets/projetos/portfolio2024.png'),
        link: 'https://fabiojuniordev.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/portfolio-fabio-atual'
    },
    {
        id: 15,
        titulo: 'Pokedex',
        techs: ['Vue.Js', 'PrimeVue', 'SASS', 'Vite', 'PokeApi', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/pokedex.png'),
        link: 'https://pokedex-fj.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/pokedex'
    },
    {
        id: 16,
        titulo: 'Monty Hall',
        techs: ['Vue.Js', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/monty-hall.png'),
        link: 'https://montyyhall.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/monty-hall'
    },
    {
        id: 17,
        titulo: 'Calculadora',
        techs: ['Vue.Js', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/calculadora.png'),
        link: 'https://ccalculadora.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/calculadora'
    },
    {
        id: 18,
        titulo: 'Game Hush',
        techs: ['Java', 'Libgdx', 'Itch.io'],
        tipo: 'Jogo Web',
        imagem: require('../assets/projetos/game-hush.png'),
        link: 'https://julianopasa.itch.io/procrastinator-rush',
        repositorio: 'https://github.com/fabioo-junioor/game-rush'
    },
    {
        id: 19,
        titulo: 'Mesa Online',
        techs: ['Vue.Js', 'SASS', 'PrimeVue', 'Vite', 'Netlify'],
        tipo: 'Aplicação Web',
        imagem: require('../assets/projetos/imagem-dafault.jpg'),
        link: '',
        repositorio: 'https://github.com/fabioo-junioor/mesaOnline'
    },
    {
        id: 20,
        titulo: 'Facemash',
        techs: ['Vue.Js', 'SASS', 'Vite', 'Netlify'],
        tipo: 'Aplicação web',
        imagem: require('../assets/projetos/facemash.png'),
        link: 'https://ffacemash.netlify.app/',
        repositorio: 'https://github.com/fabioo-junioor/facemash'
    }
]

export default projetos;