<script>
import listProjetos from '../utils/projetos.js'
import { botoes } from '../utils/tecnologias.js'

export default {
  name: "Projetos",
  data(){
    return{
        projectSelected: [],
        selectTechs: null,
        options: null,

    }
  },
  methods: {
    showProjetos(nomeTecnologia){
        if(nomeTecnologia === null){
            nomeTecnologia = 'Vue.Js';

        };
        this.projectSelected.splice(0, this.projectSelected.length);
        listProjetos.filter((proj) => {
            proj.techs.filter((techs) => {
                if(techs == nomeTecnologia){
                    this.projectSelected.push(proj);
                    return;
                }
            });
        });   
    }
  },
  mounted() {
    this.options = [...botoes];
    this.showProjetos('Vue.Js');
    
  },
  watch: {
    selectTechs: function(e){
        this.showProjetos(e)

    }
  }
};
</script>

<template>
  <div id="projetos">
    <h3>Projetos</h3>
    <div class="projetos-select">
        <b-form-select
            v-model="selectTechs"
            :options="options"></b-form-select>
    </div>
    <div class="project-cards">
        <div
            v-for="i in projectSelected" :key="i"
            class="project-cards_card">
            <h5>{{ i.titulo }}</h5>
            <p>{{ i.descricao }}</p>
            <div class="project-cards_card-techs">
                <span v-for="j in i.techs" :key="j">{{j}}</span>
            </div>
            <div class="project-cards_card-actions">
                <a :href="i?.repositorio" target="_blank">
                    <button :disabled='!i?.repositorio'>Repositório</button>
                </a>
                <a :href="i?.link" target="_blank">
                    <button :disabled='!i?.link'>Visitar</button>
                </a>
            </div>
            <span
                v-if="!!i?.desenvolvimento"
                class="project-cards_card-info-dev">
                Desenvolvimento
            </span>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

#projetos{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Madimi One", sans-serif;
    min-height: 100vh;
    padding: 0 0 1rem 0;

    h3{
        font-size: 2rem;
        margin: 0 0 2rem 0;
        color: #EEEEEE;

    }
    .projetos-select{
        width: 60%;
        display: flex;
        justify-content: center;
        padding: .8rem 0;

        select{
            width: 100%;
            background-color: #31363F;
            border-radius: 5px;
            border: 1px solid #31363F;
            padding-left: 1rem;
            height: 4rem;
            color: #EEEEEE;

            option{
                color: #EEEEEE;
                font-size: 1rem;
                font-weight: normal;

            }
            &:hover{
                border: 1px solid #EEEEEE;
            }
        }
    }
    .project-cards{
        width: 95%;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.2rem;

        .project-cards_card{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #31363F;
            box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, .4);
            border-radius: 5px;
            min-height: 30rem;
            width: 24%;
            padding: 1rem;

            h5, p{
                color: #EEEEEE;

            }
            p{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;

            }
            .project-cards_card-techs{
                margin-bottom: 1rem;
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                gap: .5rem;

                span{
                    padding: .2rem .5rem;
                    border: 1px solid #76ABAE;
                    border-radius: 5px;
                    font-size: .9rem;
                    color: #EEEEEE;

                    &:hover{
                        background-color: #EEEEEE;
                        color: #31363F;
                        border: 1px solid #31363F;

                    }
                }
            }
            .project-cards_card-actions{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                button{
                    background-color: #EEEEEE;
                    border-radius: 5px;
                    border: none;
                    padding: .5rem 1rem;
                    color: #31363F;

                    &:hover{
                        background-color: #76ABAE;
                        color: #EEEEEE;

                    }
                    &:disabled{
                        color: #31363F;
                        background-color: #eeeeeeb0;
                        cursor: no-drop;

                    }
                }
            }
        }
        .project-cards_card-info-dev{
            position: absolute;
            top: -10px;
            right: 10px;
            background-color: #EEEEEE;
            color: #31363F;
            border-radius: 5px;
            padding: .1rem .2rem;
            font-size: .9rem;
            
        }
    }
}
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {
    #projetos{
        .project-cards{
            .project-cards_card{
                width: 32%;

            }            
        }
    }

}
@media only screen and (max-width: 992px) {

}
@media only screen and (max-width: 720px) {
    #projetos{
        .projetos-select{
            width: 90%;

        }
        .project-cards{
            width: 100%;

            .project-cards_card{
                width: 45%;

            }            
        }
    }
}
@media only screen and (max-width: 481px) {
    #projetos{
        padding-top: 5rem;

        .projetos-select{
            width: 95%;

        }
        .project-cards{
            width: 100%;

            .project-cards_card{
                width: 95%;

            }            
        }
    }
}
@media only screen and (max-width: 360px) {

}
</style>
