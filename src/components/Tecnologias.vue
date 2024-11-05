<script>
import { techs } from '../utils/tecnologias.js'

export default{
    name: 'Tecnologias',
    data(){
        return{
            techs: [],

        }
    },
    mounted(){
        this.techs = techs

    }    
}
</script>

<template>
    <div id="tecnologias">
        <h3>Tecnologias</h3>
        <div>
            <div class="tecnologia" v-for="i in techs" :key="i">
                <img :src="i.img" />
                <h4>{{ i.nome }}</h4>
            </div>
        </div>
    </div>    
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

#tecnologias{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Madimi One", sans-serif;
    min-height: 100vh;

    h3{
        font-size: 2rem;
        margin: 0 0 2rem 0;
        color: #EEEEEE;

    }
    div{
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: .5rem;
        align-content: center;
        justify-items: center;
        width: 80%;
        border-radius: 5px;

        .tecnologia{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 0;
            width: 100%;
            height: 100%;
            background-color: #31363F;
            border: 1px solid #76ABAE;
            color: #EEEEEE;
            border-radius: 5px;

            img{
                height: 2rem;

            }
            h4{
                margin: 0;
                font-size: 1.3rem;

            }
        }
    }
}
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {
    #tecnologias{
        div{
            width: 80%;
            margin: 0;

        }
    }
}
@media only screen and (max-width: 992px) {
    #tecnologias{
        div{
            width: 90%;

        }
    }
}
@media only screen and (max-width: 720px) {
    #tecnologias{
        div{
            grid-template-columns: auto auto;
            width: 98%;
            padding: .3rem;

            .tecnologia{
                margin: .1rem;

                img{
                    height: 1.7rem;

                }
                h4{
                    font-size: 1rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 481px) {
    #tecnologias{
        padding-top: 5rem;

        div{
            grid-template-columns: auto auto;

            .tecnologia{                
                padding: 2rem 0;

                img{
                    height: 1.9rem;

                }
                h4{
                    font-size: 1.1rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 360px) {
  #tecnologias{
        div{
            grid-template-columns: auto;

        }
    }
}
</style>