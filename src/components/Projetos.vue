<template>
  <div id="projetos">
    <p>Projetos</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
        qtd: 3,
        projects: [
            {
            id: 1,
            title: "Alquimia Skate Shop",
            techs: {
                tech1: "Wordpress",
                tech2: "Woocommerce",
                tech3: "Elementor",
                tech4: "CSS",
            },
            tipo: "Ecommerce",
            link: "https://alquimiaskateshop.com.br/",
            src: require("../assets/img-projetos/alquimiaskateshop.png"),
            },
            {
            id: 2,
            title: "Ecológica Junior",
            techs: {
                tech1: "Wordpress",
                tech2: "Elementor",
                tech3: "CSS"
            },
            tipo: "Site Institucional",
            src: require("../assets/img-projetos/ecologicajr.png"),
            },
            {
            id: 3,
            title: "F5 Junior",
            techs: {
                tech1: "Wordpress",
                tech2: "Elementor",
                tech3: "CSS",
            },
            tipo: "Site Institucional",
            link: "https://f5jr.com/",
            src: require("../assets/img-projetos/f5junior.png"),
            },
            {
            id: 4,
            title: "Fejers",
            techs: {
                tech1: "Wordpress",
                tech2: "Elementor",
                tech3: "CSS",
            },
            tipo: "Site Institucional",
            link: "https://fejers.org.br/",
            src: require("../assets/img-projetos/fejers.png"),
            },
            {
            id: 5,
            title: "Nepelin",
            techs: {
                tech1: "Wordpress",
                tech2: "Elementor",
                tech3: "CSS",
            },
            tipo: "Site Institucional",
            link: "https://nepelin.com/",
            src: require("../assets/img-projetos/nepelin.png"),
            },
            {
            id: 6,
            title: "Nucleo Impulso",
            techs: {
                tech1: "Wordpress",
                tech2: "Elementor",
                tech3: "CSS",
            },
            tipo: "Site Institucional",
            link: "",
            src: require("../assets/img-projetos/nucleo-impulso-site.png"),
            },
            {
            id: 7,
            title: "HASupport",
            techs: {
                tech1: "HTML5",
                tech2: "CSS3",
                tech3: "JavaScript",
                tech4: "Mysql",
                tech5: "Bootstrap",
                tech6: "Electron",
            },
            tipo: "Software Desktop",
            link: "https://github.com/fabioo-junioor/HA--ASSIST",
            src: require("../assets/img-projetos/ha-support.jpg"),
            },
            {
            id: 8,
            title: "Electoral Partials",
            techs: {
                tech1: "Kotlin",
                tech2: "PHP",
                tech3: "Java",
                tech4: "Mysql"
            },
            tipo: "Aplicativo Mobile",
            link: "https://github.com/fabioo-junioor/project-app-electoral-partials",
            src: require("../assets/img-projetos/electoral-partials-tela1.png"),
            },
            {
            id: 9,
            title: "Portfólio",
            techs: {
                tech1: "Vue JS",
                tech2: "Vuetify",
                tech3: "SCSS",
                tech4: "Animate.css"
            },
            tipo: "Site Pessoal",
            link: "http://fabioo-junioor.github.io/",
            src: require("../assets/img-projetos/portfolio.png"),
            },
        ],
    };
  },
  methods:{
    verMais(){
        console.log("Clicou");
        this.qtd += 6
    }
  }
};
</script>
<style lang="scss" scoped>
    #projetos{
        background: #536976; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #292e49, #536976); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right,#292e49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);

        height: 100%;
        width: 100%;
        padding: 1rem;

        border-radius: 5px;

    }
</style>