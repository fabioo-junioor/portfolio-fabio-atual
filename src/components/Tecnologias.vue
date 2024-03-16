<script>
import tecnologias from '../utils/tecnologias.js'

export default{
    name: 'Tecnologias',
    data(){
        return{
            techs: [],

        }
    },
    mounted(){
        this.techs = tecnologias
        console.log(this.techs)

    }    
}
</script>

<template>
    <div id="tecnologias">
        <h3>Tecnologias</h3>
        <div>
            <div class="tecnologia" v-for="i in techs" :key="i.nome">
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
        background-color: black;
        font-family: "Madimi One", sans-serif;
        padding: 3rem 0;

        h3{
            font-size: 2rem;
            margin: 0 0 2rem 0;
            padding: 1rem;
            border-radius: 10px;
            border: 2px solid #10e956;
            background-color: rgb(40, 40, 40);
            color: #10e956;

        }
        div{
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: .1rem;
            align-content: center;
            justify-items: center;
            width: 70%;
            padding: .5rem;
            border-radius: 10px;
            background-color: #08832f;
            margin: 0 0 2rem 0;

            .tecnologia{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: .5rem 0;
                padding: 1rem 0;
                width: 90%;
                background-color: rgb(40, 40, 40);
                color: white;
                border-radius: 10px;
    
                img{
                    height: 2rem;
    
                }
                h4{
                    padding-left: .5rem;

                }
            }
        }
    }
</style>