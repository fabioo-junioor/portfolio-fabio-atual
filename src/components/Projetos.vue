<template>
  <div id="projetos">
    <div id="title">
        <h2>PROJETOS</h2>
        <v-divider></v-divider>
    </div>
    <div id="projetos__imgs">
        <v-card v-for="proj in projects"
        :key="proj"
        class="mx-auto"
        max-width="300"
        elevation="6">
            <v-img v-bind:src="proj.src"
                class="white--text"
                cover max-width="300"
                max-height="350">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
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
};
</script>
<style lang="scss" scoped>
    #projetos {
        display: flex;
        flex-direction: column;
        align-items: center;        
        border-radius: 10px;
        padding: 50px 0px;
        width: 100%;
        background: #485563;
        background: -webkit-linear-gradient(to bottom, #29323c, #485563);
        background: linear-gradient(to bottom, #29323c, #485563);

        #title{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            margin-bottom: 3rem;

            h2{
                font-size: 3rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.9);

            }
            hr{
                border: 1px solid white;
                width: 25%;

            }
        }
        #projetos__imgs{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;

            .v-card{ 
                margin: .5rem;
                padding: 5px;
                background-color: #252d36;                
                
                .v-card__title{
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    font-size: 1rem;
                    width: 100%;
                    padding: 10px 5px 5px 10px;
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: underline 2px;

                }
                .v-card__subtitle{
                    //background-color: blue;
                    padding: 5px 0px 0px 10px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .tipo, .techs, .links{
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                        font-weight: 400;
                        font-size: .8rem;
                        color: rgba(255, 255, 255, 0.9);
                        font-weight: 500;
                        //background-color: grey;
                        padding: 2px;
                        margin: 10px 0px;

                    }
                    .techs{
                        //background-color: greenyellow;
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-evenly;

                        p{
                            color: white;
                            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                            font-size: .8rem;
                            font-weight: 500;
                            margin: 1px;
                            padding: 7px;
                            border-radius: 10px;
                            border: 2px solid black;
                        }
                    }
                    hr{
                        width: 100%;
                        border: 1px solid white;
                        margin: 5px 0;
                    }
                    .links{
                        .v-btn{
                            background-color: #6b03c0;
                            box-shadow: 2px 2px 5px black;
                            a{
                                text-decoration: none;
                                color: white;
                            }
                        }
                    }

                } 
                .v-image{
                    overflow: hidden;
                    -moz-transition: all 1.5s;
                    -webkit-transition: all 1.5s;
                    transition: all 1.5s;
        
                }
                .v-image:hover{
                    -moz-transform: scale(1.5);
                    -webkit-transform: scale(1.5);
                    transform: scale(1.5);
                    z-index: 1;
        
                }
            }
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
       h2{
            font-size: 2rem !important;
            
        }
        .v-card{
            max-width: 200px !important;
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