<script>
import projetos from '../utils/projetos.js'
import { botoes } from '../utils/tecnologias.js'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default {
  name: "Projetos",
  components: { Carousel, Slide, Navigation, Pagination },
  data(){
    return{
        projetos: null,
        itensShow: 2,
        botoes: [],
        botaoAtivado: ''

    }
  },
  methods: {
    detectaResolusao(){
        window.addEventListener('resize', () => {
            this.itensShow = window.innerWidth <= 720 ? 1 : 2
            
        })
    },
    showProjetos(nomeTecnologia){
        this.botaoAtivado = nomeTecnologia
        this.alteraCorBotao(nomeTecnologia)
        if(nomeTecnologia === 'Todos'){
            this.projetos = projetos

        }else{
            this.projetos = projetos
            let newArray = []
            this.projetos.filter((proj) => {
                proj.techs.filter((e) => {
                    if(nomeTecnologia === e){
                        newArray.push(proj)
                                    
                    }
                })            
            })
            this.projetos = []
            this.projetos = newArray

        }
    },
    alteraCorBotao(nomeBotao){
        let btn = document.getElementsByClassName("projetos-botoes-bt")
        for(var i=0; i<btn.length; i++){
            if(btn[i].name === nomeBotao){
                btn[i].style.color = "white"

            }else{
                btn[i].style.color = "black"

            }
        }        
    }
  },
  mounted() {
    this.projetos = projetos
    this.botoes = botoes
    this.showProjetos('Todos')
    this.detectaResolusao()
    
  }
};
</script>

<template>
  <div id="projetos">
    <h3>Projetos</h3>
    <div class="projetos-botoes">
        <button
            v-for="b in botoes" :key="b"
            class="projetos-botoes-bt"
            :name="b"
            @click="showProjetos(b)">
            {{b}}
        </button>
    </div>
    <Carousel
        :wrap-around="true"
        :items-to-show="itensShow"
        :autoplay="2000"
        :pauseAutoplayOnHover="true"
        :transition="1500">
      <Slide v-for="i in projetos" :key="i">
        <div class="carousel__item">
            <div class="projetos-imagem">
                <p class="tag-progresso"
                    v-if="i.desenvolvimento">Em desenvolvimento</p>
                <img :src="i.imagem" />
            </div>
            <div class="projetos-detalhes">
                <h4>{{ i.titulo }}</h4>
                <div class="projetos-tecnologias">
                    <span
                        v-for="t in i.techs"
                        :key="t">{{t}}</span>
                </div>
            </div>
            <div class="projetos-links">
                <a
                    :href="i.link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button :disabled="i.link == ''">Visitar</button>
                </a>
                <a
                    v-if="i.repositorio"
                    :href="i.repositorio"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button>Repositório</button>
                </a>
            </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

#projetos{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Madimi One", sans-serif;
    background-color: black;
    padding: 6rem 0;

    h3{
        font-size: 2rem;
        margin: 0 0 2rem 0;
        padding: 1rem;
        border-radius: 5px;
        border: 2px solid #10e956;
        background-color: rgb(40, 40, 40);
        color: #10e956;

    }
    .projetos-botoes{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: .5rem;
        flex-wrap: wrap;
        padding: .8rem .5rem;

        .projetos-botoes-bt{
            background-color: #10e956;
            border: 2px solid #10e956;
            padding: .3rem;
            font-family: "Madimi One", sans-serif;
            color: #333;
            font-size: .9rem;
            border-radius: 5px;
            
            &:hover{
                border: 2px solid white;

            }
        }
    }
    .carousel{
        width: 100%;

        .carousel__viewport{
            .carousel__slide{    
                .carousel__item{
                    width: 100%;
                    background-color: white;
                    border: 1px solid #333;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
    
                    .projetos-imagem{
                        width: 100%;
                        height: 20rem;
                        border-bottom: 2px solid #333;
                        margin: 0 0 .3rem 0;
                        display: inline-block;
                        position: relative;

                        .tag-progresso{
                            background-color: #333333;
                            color: white;
                            font-size: .9rem;
                            padding: .1rem .5rem;
                            border-radius: 10px;
                            border: 1px solid rgba(255, 255, 255, .5);
                            position: absolute;
                            right: .5rem;
                            top: .5rem;
                        
                        }    
                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: top;
    
                        }
                    }
                    .projetos-detalhes{
                        text-align: left;
                        margin: 0 0 1.5rem .5rem;
    
                        h4{
                            padding: .5rem 0;
                            margin: 0 0 .2rem 0;
                            color: #10e956;
                            font-size: 1.5rem;
                            text-shadow: 1px 1px 2px #333;
    
                        }    
                        .projetos-tecnologias{
                            display: flex;
                            flex-wrap: wrap;

                            span{
                                background-color:  black;
                                border-radius: 5px;
                                color: white;
                                font-size: .9rem;
                                margin: .2rem .2rem .2rem 0;
                                padding: .3rem .5rem;

                            }
                        }    
                    }
                    .projetos-links{
                        display: flex;
                        justify-content: space-between;
                        margin: 0 .5rem 1rem .5rem;

                        a{                           
                            button{
                                background-color: transparent;
                                border: none;
                                padding: .5rem 1rem;
                                margin: .1rem;
                                font-family: "Madimi One", sans-serif;
                                color: black;
                                font-size: .9rem;
                                border-radius: 5px;
                                box-shadow: 1px 1px 2px #333;

                                &:hover{
                                    cursor: pointer;
                                    background-color: #33333327;

                                }
                                &:disabled{
                                    cursor: no-drop;
                                    background-color: #33333385;
                                    color: rgba(255, 255, 255, .8);
                                }
                            }
                        }
                    }
                }
            }
        }
        .carousel__prev,
        .carousel__next {
            border-radius: 5px;
            background-color: rgba(0, 0, 0, .8);
            height: 2.5rem;
            width: 2.5rem;
            
            .carousel__icon{
                width: 100%;
                height: 100%;
                color: blue;

                path{
                    height: 100%;
                    color: #10e956;
                }
            }
        }
        .carousel__pagination{
            .carousel__pagination-button::after{
                padding: 1px;
                background-color: rgb(105, 105, 105);

            }
            .carousel__pagination-button--active::after{
                background-color: #10e956;

            }
        }
    }
}
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {

}
@media only screen and (max-width: 992px) {

}
@media only screen and (max-width: 720px) {
    #projetos{
        .carousel{
            .carousel__viewport{
                .carousel__slide{    
                    .carousel__item{  
                        .projetos-imagem{
                            height: 15rem;
    
                        }
                        .projetos-detalhes{
                            margin: 0 0 1rem .2rem;
        
                            h4{
                                padding: .5rem 0;
                                font-size: 1.2rem;
        
                            }    
                            .projetos-tecnologias{
                                span{
                                    font-size: .8rem;
                                    padding: .3rem .4rem;

                                }
                            }    
                        }
                        .projetos-links{
                            margin: 0 .5rem 1rem .2rem;

                            a{                           
                                button{
                                    padding: .5rem .8rem;
                                    margin: .1rem;
                                    font-size: .8rem;
                                
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 481px) {
    #projetos{
        .carousel{
            .carousel__viewport{
                .carousel__slide{    
                    .carousel__item{  
                        .projetos-imagem{
                            height: 15rem;
    
                        }
                        .projetos-detalhes{
                            margin: 0 0 1rem .2rem;
        
                            h4{
                                padding: .5rem 0;
                                font-size: 1.2rem;
        
                            }    
                            .projetos-tecnologias{
                                span{
                                    font-size: .7rem;

                                }
                            }    
                        }
                        .projetos-links{
                            flex-direction: column;

                            a{
                                margin: .2rem 0;

                                button{
                                    width: 100%;
                                    padding: .5rem .8rem;
                                    margin: 0;
                                
                                }
                            }
                        }
                    }
                }
            }
            .carousel__pagination{
                .carousel__pagination-button::after{
                    padding: .3px;

                }
            }
        }
    }
}
@media only screen and (max-width: 360px) {
  
}
</style>
