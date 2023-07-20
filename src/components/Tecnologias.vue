<template>
    <div id="tecnologias">
        <v-card v-for="i in techs" :key="i">
            <img :src="i.src" />
            <div>
                <h2>{{i.title}}</h2>
                <p>{{i.level}}</p>
            </div>
        </v-card>
    </div>
</template>
<script>

export default {
    data(){
        return{
            techs: [
                { title: 'HTML5', level: '4 de 5', src: require('../assets/img-tools/html5.png')},
                { title: 'CSS3', level: '3 de 5', src: require('../assets/img-tools/css-3.png')},
                { title: 'JavaScript', level: '3 de 5', src: require('../assets/img-tools/javascript.png')},
                { title: 'Linguagem C', level: '4 de 5', src: require('../assets/img-tools/c.png')},
                { title: 'Bootstrap', level: '4 de 5', src: require('../assets/img-tools/bootstrap.png')},
                { title: 'VueJs', level: '3 de 5', src: require('../assets/img-tools/vue-js.png')},
                { title: 'SASS', level: '3 de 5', src: require('../assets/img-tools/sass.png')},
                { title: 'Mysql', level: '4 de 5', src: require('../assets/img-tools/mysql.png')},
                { title: 'PHP', level: '2 de 5', src: require('../assets/img-tools/php.png')},
                { title: 'Bootstrap-vue', level: '3 de 5', src: require('../assets/img-tools/bootstrap-vue.png')},
                { title: 'Vuetify', level: '2 de 5', src: require('../assets/img-tools/vuetify.png')},
                { title: 'Kotlin', level: '1 de 5', src: require('../assets/img-tools/kotlin.png')},
                { title: 'Scrum', level: '4 de 5', src: require('../assets/img-tools/scrum.png')},
                { title: 'Wordpress', level: '4 de 5', src: require('../assets/img-tools/wordpress.png')},
                { title: 'GitHub', level: '2 de 5', src: require('../assets/img-tools/github.png')}
            ]            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap");
    #tecnologias{
        background: #536976;
        background: -webkit-linear-gradient(to right, #292e49, #536976); 
        background: linear-gradient(to right,#292e49, #536976);

        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;

        height: 100%;
        width: 100%;
        padding: 1rem;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: .5rem;
        align-items: stretch;

        .v-card{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 0 0 .5rem;
            background-color: transparent;
            box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);

            div{
                font-family: "Anek Telugu", sans-serif;
                padding: 0 0 0 .5rem;
                color: white;
                width: 100%;

                h2{
                    font-size: 1.2rem;

                }
                p{
                    font-size: 1rem;

                }
            }

            img{
                height: 4.5rem;
                filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.6));

            }

        }

    }
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
    #tecnologias{
        .v-card{
            div{
                h2{
                    font-size: 1rem;

                }
                p{
                    font-size: .9rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 992px) {
    #tecnologias{
        .v-card{
            div{
                h2{
                    font-size: 1rem;

                }
                p{
                    font-size: .9rem;

                }
            }
            img{
                height: 3.5rem;

            }
        }
    }
}
@media only screen and (max-width: 720px) {
    #tecnologias{
        grid-template-columns: repeat(2, 1fr);

        .v-card{
            padding: .5rem;

            div{
                h2{
                    font-size: 1rem;

                }
                p{
                    font-size: .9rem;

                }
            }
            img{
                height: 3rem;

            }
        }
    }
}
@media only screen and (max-width: 481px) {
}
@media only screen and (max-width: 360px) {
    #tecnologias{
        grid-template-columns: repeat(2, 1fr);
        padding: .5rem;

        .v-card{
            padding: .5rem .3rem;
            
            div{
                h2{
                    font-size: .9rem;

                }
                p{
                    font-size: .9rem;

                }
            }
            img{
                height: 2rem;

            }
        }
    }
}
</style>