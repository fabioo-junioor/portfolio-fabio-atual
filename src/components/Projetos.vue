<template>
  <div id="projetos">
    <div id="title">
        <h2>PROJETOS</h2>
        <v-divider></v-divider>
    </div>
    <div id="projetos__imgs">
        <v-card v-for="(proj, i) in projects"
        :key="i" v-show="i < qtd"
        class="mx-auto"
        max-width="300"
        elevation="6">
            <v-img v-bind:src="proj.src"
                class="white--text"
                cover max-width="auto"
                max-height="400">
                </v-img>
            <v-card-title class="pb-0">
                {{ proj.title }}
            </v-card-title>
            <v-card-subtitle class="pb-0">
                <v-container class="tipo">
                    {{ proj.tipo }}
                </v-container>
                <v-container class="techs">
                    <p v-for="i in proj.techs" :key="i">
                        {{ i }}
                    </p>                    
                </v-container>
                <v-divider></v-divider>
                <v-container class="links">
                    <v-btn :disabled="!proj.link">
                        <a :href="proj.link" 
                            target="_bank">Ver Site
                        </a>
                    </v-btn>
                </v-container>
            </v-card-subtitle>
        </v-card>
    </div>
    <div id="verMais">
        <v-btn @click="verMais()">Ver mais
        </v-btn>
    </div>
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
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #projetos {
        display: flex;
        flex-direction: column;
        align-items: center;        
        border-radius: 20px;
        padding: 50px 0px;
        width: 100%;
        border-top: 1px solid rgba(153, 153, 153, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-left: 1px solid rgba(153, 153, 153, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(6px);
        box-shadow: 0px 0px 5px black;


        #title{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-bottom: 3rem;

            h2{
                font-size: 3rem;
                font-family: 'Rampart One', cursive;
                font-weight: 500;
                color: rgba(255, 255, 255);

            }
            hr{
                border: 1px solid white;
                border-radius: 10px;
                width: 50%;

            }
        }
        #projetos__imgs{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            width: 100%;

            .v-card{ 
                margin: .5rem;
                padding: 5px;
                background-color: rgba(107, 3, 192,  0.1);
                box-shadow: 0px 0px 10px black;
                border: 2px solid rgba(0, 0, 0);
                overflow: hidden;        
                
                .v-card__title{
                    font-family: 'Anek Telugu', sans-serif;
                    font-size: 1.1rem;
                    width: 100%;
                    padding: 15px 5px 5px 10px;
                    color: rgba(255, 255, 255);

                }
                .v-card__subtitle{
                    padding: 5px 0px 0px 10px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .tipo, .techs, .links{
                        font-family: 'Anek Telugu', sans-serif;
                        font-size: .9rem;
                        color: rgba(255, 255, 255, 0.9);
                        font-weight: 500;
                        padding: 2px;
                        margin: 10px 0px;

                    }
                    .techs{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;

                        p{
                            color: white;
                            font-family: 'Anek Telugu', sans-serif;
                            font-size: .9rem;
                            margin: 1px;
                            padding: 8px 5px 5px 5px;
                            border-radius: 10px;
                            background-color: #6b03c0;
                            border: 2px solid black;
                            box-shadow: 0px 0px 7px black;

                        }
                    }
                    hr{
                        width: 100%;
                        border: 1px solid white;
                        margin: 5px 0;
                    }
                    .links{
                        .v-btn{
                            font-family: 'Anek Telugu', sans-serif;
                            font-size: 1rem;
                            background-color: #6b03c0;
                            box-shadow: 3px 3px 2px black;

                            a{
                                text-decoration: none;
                                color: white;
                                font-size: .9rem;
                                
                            }
                        }
                        .v-btn:disabled{
                            background-color: #3d3d3d79 !important;

                        }
                    }

                } 
                .v-image{
                    -moz-transition: all 1.2s;
                    -webkit-transition: all 1.2s;
                    transition: all 1.2s;
        
                }
                .v-image:hover{
                    -moz-transform: scale(1.1);
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                    z-index: 1;
        
                }
            }
        }
    }
    #verMais{
        margin-top: 1.5rem;
        
        .v-btn{
            background-color: #6b03c0;
            padding: 25px 50px;
            color: white;
            font-size: 1.1rem;
            font-family: 'Anek Telugu', sans-serif;
            box-shadow: 3px 3px 2px black;
            
        }
    }

/*##########################################################*/
    @media only screen and (max-width: 1200px){
        h2{
            font-size: 2.5rem !important;
            
        }
    }
    @media only screen and (max-width: 992px){
        .v-card{
            max-width: 300px !important;
            margin: .2rem .2rem !important;

        }
        
    }
    @media only screen and (max-width: 720px){
        .v-card{
            max-width: 300px !important;
            margin: .2rem .2rem !important;

        }
    }
    @media only screen and (max-width: 481px){
        #projetos__imgs{
            width: 100% !important;

        }
        h2{
            font-size: 2rem !important;
            
        }
        .v-card{
            max-width: 190px !important;
            margin: .5rem .2rem !important;

        }
        .v-card__title{
            font-size: .8rem !important;
            
        }
        .v-card__subtitle{
            display: flex;
            align-items: center;

            .tipo, .techs, .links{
                font-size: .7rem !important;
                
            }
            .techs{
                display: flex !important;
                justify-content: space-around !important;

                p{
                    font-size: .7rem !important;

                }
            }
            .links{
                display: flex;
                flex-direction: column;
                width: 100%;
            }
        }
    }
</style>