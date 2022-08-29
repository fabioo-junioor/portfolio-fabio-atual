<template>
    <div id="servicos">
        <div id="title">
            <h2>O QUE FAÇO</h2>
            <v-divider></v-divider>
        </div>
        <div id="service__imgs">
            <v-card v-for="service in services" :key="service" 
                class="mx-auto" max-width="350"
                elevation="6">
                <v-img v-bind:src="service.src"
                    class="white--text align-end"
                    max-width="300"
                    contain></v-img>
                <v-card-subtitle class="pb-0">
                    {{service.title}}
                </v-card-subtitle>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            services: [
                {title: 'Landing Page', src: require('../assets/img-services/landing-page.png')},
                {title: 'E-commerce', src: require('../assets/img-services/ecommerce.png')},
                {title: 'Web Sites', src: require('../assets/img-services/website.png')}
            ]
        }
    }}
</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #servicos{
        display: flex;
        flex-direction: column;
        align-items: center;        
        border-radius: 20px;
        padding: 50px 0px;
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
        #service__imgs{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;

            .v-card{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 1rem 1rem;
                padding: 1rem 1rem;
                background-color: rgba(107, 3, 192,  0.1);
                box-shadow: 0px 0px 10px black;
                border: 2px solid rgba(0, 0, 0);
    
                .v-card__subtitle{
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255);
                    font-family: 'Anek Telugu', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 500;
    
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
            margin: .5rem .5rem !important;

            .v-image{
                max-width: 200px !important;

            }
        }        
    }
    @media only screen and (max-width: 720px){
        .v-card{
            max-width: 200px !important;
            margin: .2rem .4rem !important;

            .v-image{
                max-width: 150px !important;

            }
        }
        .v-card__subtitle{
            font-size: .9rem !important;

        }
    }
    @media only screen and (max-width: 481px){
       h2{
            font-size: 2rem !important;
            
        }
        .v-card{
            max-width: 150px !important;
            margin: .2rem .2rem !important;

            .v-card__subtitle{
                font-size: .8rem !important;

            }
            .v-image{
                max-width: 130px !important;

            }
        }
    }
</style>