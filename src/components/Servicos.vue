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
    #servicos{
        display: flex;
        flex-direction: column;
        align-items: center;        
        border-radius: 10px;
        padding: 50px 0px;
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
                background-color: #252d36;
                box-shadow: 0px 0px 10px black;
    
                .v-card__subtitle{
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.9);
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    font-size: 1rem;
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

        }
        
    }
    @media only screen and (max-width: 720px){
        .v-card{
            max-width: 170px !important;
            margin: .2rem .4rem !important;

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
            margin: .5rem .5rem !important;

        }
    }
</style>