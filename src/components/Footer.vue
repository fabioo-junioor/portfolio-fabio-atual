<template>
    <v-footer padless>
        <v-card flat tile 
            class="indigo white--text text-center">
            <v-card-text>
                <v-btn v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon>
                    <a :href="icon.link" target="_bank" id="links">
                        <v-icon size="24px" x-large>
                            {{icon.icon}}
                        </v-icon>
                    </a>
                </v-btn>
            </v-card-text>
            
            <v-card-text class="white--text">
                <h4 id="email">
                    <span>Email: </span>fcjunior@inf.ufsm.br
                </h4>
            </v-card-text>

            <v-divider inset></v-divider>
            
            <v-card-text class="white--text">
                <h4>Copyright © 2022 Fábio Júnior Dev</h4>
            </v-card-text>
        </v-card>
    </v-footer>
</template>
<script>
export default {
    data(){
        return{
            icons: [
                {icon: 'mdi-instagram', link: 'https://www.instagram.com/fabioo.junioor/'},
                {icon: 'mdi-github', link: 'https://github.com/fabioo-junioor'},
                {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/f%C3%A1bio-j%C3%BAnior-237b661b9/'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');    .v-footer{
        padding: 4rem 0rem .5rem 0rem;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        border-top: 1px solid rgba(153, 153, 153, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-left: 1px solid rgba(153, 153, 153, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(6px);
        box-shadow: 0px 0px 5px black;
        
        .v-card{
            background-color: transparent;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            .v-card__text{
                display: flex;
                justify-content: center;
                width: 100%;
                padding: 0px;
                            
            }
            .v-btn{
                padding: 2rem;

                #links{
                    text-decoration: none;
    
                    .v-icon{
                        color: #6b03c0;
                        filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.8));
                        font-size: 4rem !important;
                    }
                    .v-icon:hover{
                        filter: drop-shadow(0px 0px 3px rgb(255, 255, 255));

                    }            
                }
            }
            hr{
                color: white;
                width: 50%;
                border: 1px solid white;
                margin: 4rem 0rem .5rem 0rem;

            }
            .v-card__text h4{
                color: white;
                font-size: .9rem;
                font-family: 'Anek Telugu', sans-serif;
                letter-spacing: 2px;

            }
            #email{
                padding: 5px;
                font-size: 1rem;
                color: rgba(255, 255, 255);
                
                span{
                    font-size: 1.1rem;
                    color: white;
                    letter-spacing: 1px;

                }
            }
        }        
    }
    
/*#########################################################*/
    @media only screen and (max-width: 1200px){
       
    }
    @media only screen and (max-width: 992px){
        
    }
    @media only screen and (max-width: 720px){
        .v-card__text h4{
            text-align: center;
            padding: 0px !important;
            
        }
    }
    @media only screen and (max-width: 481px){
        .v-footer{
            width: 100% !important;
            padding: 0px !important;

        }
        .v-card{
            padding: 0px !important;
            
        }
        #email{
            padding: 1px !important;
            font-size: .9rem !important;
            text-align: center !important;
            
            span{
                font-size: 1rem !important;
                
            }
        }
        .v-card__text h4{
            font-size: .7rem !important;
            text-align: center;
            
        }
    }
</style>