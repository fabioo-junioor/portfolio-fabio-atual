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
               &lsaquo;from the next step /&rsaquo;
            </h2>
            <p class="animate__animated animate__flipInX">
                Meu nome é Fábio estou cursando
                Sistemas de Informação na Universidade Federal de Santa Maria, 
                com uma ênfase pessoal em front-end.
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
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #sobre{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 0px 0px 100px 0px;
        border-radius: 20px;        
        border-top: 1px solid rgba(153, 153, 153, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-left: 1px solid rgba(153, 153, 153, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(6px);
        box-shadow: 0px 0px 5px black;

        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            #foto-logo{
                width: 300px;
                filter: drop-shadow(2px 2px 0px rgb(0, 0, 0));

            }
            #foto-eu{
                width: 300px;
                border-radius: 100%;
                border: 10px solid #6b03c0;

            }
            h2{
                color: rgb(255, 255, 255);
                font-size: 3.8rem;
                font-weight: 500;
                font-family: 'Rampart One', cursive;
                margin-bottom: 10px;
                text-align: center;

            }
            p{
                color: rgba(255, 255, 255, .9);
                padding: 0rem 8rem 1rem 8rem;
                font-size: 1rem;
                font-family: 'Anek Telugu', sans-serif;
                text-align: center;

            }
        }
        hr{
            border: 3px solid white;
            border-radius: 10px;
            width: 20%;

        }
    }

/*#####################################################*/
    @media only screen and (max-width: 1560px){
        #foto-eu{
            width: 200px !important;

        }
        h2{
            font-size: 2.8rem !important;

        }
        p{
            padding: 0rem 5rem 1rem 5rem !important;
            font-size: .8rem !important;

        }
    }
    @media only screen and (max-width: 1200px){
        #foto-logo{
                width: 250px !important;

        }
        #foto-eu{
            width: 230px !important;
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