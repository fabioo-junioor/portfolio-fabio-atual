<template>
    <div id="sobre">
        <v-container>
            <v-img contain src="@/assets/img-logo/logo4.png"
                id="foto-logo"></v-img>
        </v-container>
        <v-container>
            <v-img contain src="@/assets/img-face/eu.jpg"
                id="foto-eu"
                class="animate__animated animate__fadeIn"></v-img>
        </v-container>
        <v-container>
            <h2 class="animate__animated animate__flipInX">
                From the next step
            </h2>
            <p class="animate__animated animate__flipInX">
                Meu nome é Fábio estou cursando
                Sistemas de Informação na Universidade Federal de Santa Maria, 
                com uma ênfase pessoal em front-end 
                nas tecnologias HTML, CSS, JAVASCRIPT, BOOTSTRAP, VUE.JS.
            </p>
        </v-container>
        <v-divider></v-divider>
    </div>
</template>
<script>
import 'animate.css'

export default {
    
}
</script>
<style lang="scss" scoped>
    #sobre{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0px 0px 100px 0px;
        border-radius: 10px;
        background: #485563;
        background: -webkit-linear-gradient(to bottom, #29323c, #485563);
        background: linear-gradient(to bottom, #29323c, #485563);

        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            #foto-logo{
                width: 300px;
                filter: drop-shadow(2px 2px 0px rgb(0, 0, 0));

            }
            #foto-logo:hover{
                filter: blur(1px);

            }
            #foto-eu{
                width: 300px;
                border-radius: 100%;
                border: 10px solid #6b03c0;

            }
            h2{
                color: rgba(255, 255, 255, 0.9);
                font-size: 4rem;
                font-weight: 500;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                margin-bottom: 10px;
                text-align: center;

            }
            p{
                color: rgba(255, 255, 255, 0.8);
                padding: 0rem 8rem 1rem 8rem;
                font-size: .9rem;
                font-weight: 400;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                text-align: center;

            }
        }
        hr{
            border: 2px solid white;
            width: 20%;

        }
    }

/*#####################################################*/
    @media only screen and (max-width: 1200px){
        #foto-logo{
                width: 250px !important;

        }
        #foto-eu{
            width: 250px !important;
            border: 10px solid #6b03c0 !important;

        }
        h2{
            font-size: 3rem !important;
        
        }
        p{
            padding: 0rem 5rem 1rem 5rem !important;
            font-size: .8rem !important;
            
        }
    }
    @media only screen and (max-width: 992px){
        #foto-logo{
            width: 200px !important;

        }
        #foto-eu{
            width: 200px !important;
            border: 5px solid #6b03c0 !important;

        }
        h2{
            font-size: 2.5rem !important;
            
        }
        p{
            padding: 0rem 3rem 1rem 3rem !important;
            font-size: .8rem !important;
                
        }   
    }
    @media only screen and (max-width: 720px){
        p{
            padding: 0rem 2rem 1rem 2rem !important;
                
        }
    }
    @media only screen and (max-width: 481px){
        #foto-logo{
            width: 150px !important;

        }
        #foto-eu{
            width: 150px !important;
            border: 3px solid #6b03c0 !important;

        }
        h2{
            font-size: 2rem !important;
            
        }
        p{
            padding: 0rem .5rem 1rem .5rem !important;
            font-size: .8rem !important;
                
        }  
    }
</style>