<template>
  <div id="projetos">
    <v-card v-for="i in projects" :key="i">
        <h2>{{ i.title }}</h2>
        <p>{{ i.tipo }}</p>
        <div class="techs">
            <p v-for="j in i.techs" :key="j">{{ j }}</p>
        </div>
        <div class="btn-link">
            <a :href="i.link" target="_blank">
                <v-btn :disabled="!i.link">Link</v-btn>
            </a>
        </div>
    </v-card>
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
            tech2: "Elementor",
            tech3: "Woocommerce",
            tech4: "CSS",
          },
          tipo: "Ecommerce",
          link: "https://alquimiaskateshop.com.br/",
        },
        {
          id: 2,
          title: "Ecológica Junior",
          techs: {
            tech1: "Wordpress",
            tech2: "Elementor",
            tech3: "CSS",
          },
          tipo: "Site Institucional",
          link: false
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
          link: "https://nucleoimpulso.com.br/"
        },
        {
          id: 7,
          title: "Patrimônio Dona Francisca",
          techs: {
            tech1: "Wordpress",
            tech2: "Elementor",
            tech3: "JavaScript",
            tech4: "CSS",
          },
          tipo: "Site Institucional",
          link: "https://patrimoniosdonafrancisca.site/"
        },
        {
          id: 8,
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
        },
        {
          id: 9,
          title: "Electoral Partials",
          techs: {
            tech1: "Kotlin",
            tech2: "PHP",
            tech3: "Java",
            tech4: "Mysql",
          },
          tipo: "Aplicativo Mobile",
          link: "https://github.com/fabioo-junioor/project-app-electoral-partials",
        },
        {
          id: 10,
          title: "Portfólio",
          techs: {
            tech1: "VueJs",
            tech2: "Vuetify",
            tech3: "SASS",
            tech4: "Animate.css",
          },
          tipo: "Site Pessoal",
          link: "https://fabiojuniordev.netlify.app/",
        },
        {
            id: 11,
            title: "Jogo da Memória",
            techs: {
                tech1: "HTML5",
                tech2: "CSS3",
                tech3: "JavaScript",
                tech4: "Bootstrap"
            },
            tipo: "Jogo Web",
            link: "https://memoriasdopassado.netlify.app/"
        },
        {
            id: 12,
            title: "UniConecta",
            techs: {
                tech1: "Vue Js",
                tech2: "BootstrapVue",
                tech3: "SASS",
                tech4: "VueRouter",
                tech5: "PHP",
                tech6: "Mysql"
            },
            tipo: "TCC - Parte Prática",
            link: "https://uniconecta.netlify.app/"
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap");
    #projetos{
        background: #536976;
        background: -webkit-linear-gradient(to right, #292e49, #536976); 
        background: linear-gradient(to right,#292e49, #536976);

        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;

        height: 100%;
        width: 100%;
        padding: 1rem;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: .5rem;

        .v-card{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: .5rem 0 0 .5rem;
            background-color: transparent;
            box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);

            font-family: "Anek Telugu", sans-serif;
            color: white;
            width: 100%;
            height: 100%;
            
            h2{
                font-size: 1.2rem;

            }
            p{
                font-size: 1rem;

            }
            .techs{
                display: flex;
                flex-wrap: wrap;
                padding: .5rem 0 0 0;
                width: 100%;

                p{
                    background-color: transparent;
                    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.7);
                    padding: .2rem;
                    margin: .2rem;
                    border-radius: 5px;
                    font-size: .8rem;
                    font-weight: normal;

                }
                p:hover{
                    background-color: rgba(255, 255, 255, 0.2);

                }
                
            }
            .btn-link{
                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
                width: 100%;
                height: 100%;

                a{
                    padding: .3rem;
                
                    button{
                        background-color: #292e49;
                        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 1);
                        border: 1px solid rgba(0, 0, 0, 0.5);

                        font-family: "Anek Telugu", sans-serif;
                        font-size: .9rem;
                        font-weight: normal;
                        color: white;
                        width: 100%;
                        padding: 0;

                    }
                }
            }
        }
    }
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
    #projetos{
        grid-template-columns: repeat(4, 1fr);
        
        .v-card{
            h2{
                font-size: 1rem;

            }
            p{
                font-size: .9rem;

            }
            .techs{
                padding: .1rem;

                p{
                    margin: .1rem .2rem;
                    font-size: .7rem;

                }                
            }
            .btn-link{
                a{
                    padding: .2rem;
                
                    button{
                        font-size: .7rem;

                    }
                }
            }
        }
    }    
}
@media only screen and (max-width: 992px) {
    #projetos{
        grid-template-columns: repeat(2, 1fr);
        padding: .5rem;
        
        .v-card{
            h2{
                font-size: .9rem;

            }
            p{
                font-size: .8rem;

            }
            .techs{
                padding: .1rem;

                p{
                    margin: .1rem;

                }                
            }
            .btn-link{
                a{
                    padding: .2rem;
                
                    button{
                        font-size: .8rem;
                        height: 1.7rem;

                    }
                }
            }
        }
    }
   
}
@media only screen and (max-width: 720px) {
    #projetos{
        grid-template-columns: repeat(3, 1fr);
        padding: .5rem;
        
        .v-card{
            h2{
                font-size: .9rem;

            }
            p{
                font-size: .8rem;

            }
            .techs{
                padding: .1rem;

                p{
                    font-size: .8rem;

                }                
            }
            .btn-link{
                a{
                    padding: .2rem;
                
                    button{
                        font-size: .8rem;
                        height: 1.8rem;

                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 481px) {
    #projetos{
        grid-template-columns: repeat(2, 1fr);
        padding: .5rem;
        
        .v-card{
            h2{
                font-size: 1rem;

            }
            p{
                font-size: .9rem;

            }
            .techs{
                padding: .1rem;

                p{
                    font-size: .8rem;

                }                
            }
            .btn-link{
                a{
                    padding: .2rem;
                
                    button{
                        font-size: .8rem;
                        height: 1.7rem;

                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 360px) {
    #projetos{
        grid-template-columns: repeat(2, 1fr);
        padding: .5rem;
        
        .v-card{
            h2{
                font-size: 1rem;

            }
            p{
                font-size: .8rem;

            }
            .techs{
                padding: .1rem;

                p{
                    font-size: .8rem;

                }                
            }
            .btn-link{
                a{
                    padding: .2rem;
                
                    button{
                        font-size: .8rem;
                        height: 1.7rem;

                    }
                }
            }
        }
    }
}
</style>
