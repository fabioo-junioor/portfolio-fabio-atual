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
    .v-footer{
        padding: 3rem 0 .5rem 0;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        //background-color: #2f3340;
        background: #485563;
        background: -webkit-linear-gradient(to bottom, #485563, #29323c);
        background: linear-gradient(to bottom, #485563, #29323c);
        
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
                        font-size: 3.5rem !important;
                    }
                    .v-icon:hover{
                        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));

                    }            
                }
            }
            hr{
                color: white;
                width: 100%;
                border: 1px solid white;
                margin: 3rem 0 .5rem 0;

            }
            .v-card__text h4{
                color: white;
                font-size: .8rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

            }
            #email{
                padding: 5px;
                font-size: .9rem;
                color: rgba(255, 255, 255, 0.9);

                span{
                    font-size: 1rem;
                    color: white;

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