<template>
    <div id="tecnologia">
        <div id="title">
            <h2>MINHAS SKILLS</h2>
            <v-divider></v-divider>
        </div>
        <div id="tech__imgs">
            <v-card v-for="tech in techs" :key="tech" 
                class="mx-auto" max-width="180"
                elevation="4">
                <v-img v-bind:src="tech.src"
                    class="white--text align-end" 
                    contain></v-img>
                <v-card-subtitle class="pb-0">
                    {{tech.title}}
                </v-card-subtitle>
                <v-card-subtitle class="pb-0">
                    <p>Nivel: {{tech.level}}</p>
                </v-card-subtitle>
                <v-divider></v-divider>
            </v-card>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            techs: [
                { title: 'Linguagem C', level: '4 de 5', src: require('../assets/img-tools/c.png')},
                { title: 'HTML5', level: '4 de 5', src: require('../assets/img-tools/html5.png')},
                { title: 'CSS3', level: '3 de 5', src: require('../assets/img-tools/css-3.png')},
                { title: 'JavaScript', level: '3 de 5', src: require('../assets/img-tools/javascript.png')},
                { title: 'Bootstrap', level: '4 de 5', src: require('../assets/img-tools/bootstrap.png')},
                { title: 'VueJs', level: '3 de 5', src: require('../assets/img-tools/vue-js.png')},
                { title: 'SASS', level: '3 de 5', src: require('../assets/img-tools/sass.png')},
                { title: 'Mysql', level: '4 de 5', src: require('../assets/img-tools/mysql.png')},
                { title: 'PHP', level: '2 de 5', src: require('../assets/img-tools/php.png')},
                { title: 'Bootstrap-vue', level: '3 de 5', src: require('../assets/img-tools/bootstrap-vue.png')},
                { title: 'Vuetify', level: '2 de 5', src: require('../assets/img-tools/vuetify.png')},
                { title: 'Kotlin', level: '1 de 5', src: require('../assets/img-tools/kotlin.png')},
                { title: 'Scrum', level: '4 de 5', src: require('../assets/img-tools/scrum.png')},
                { title: 'Wordpress', level: '4 de 5', src: require('../assets/img-tools/wordpress.png')}
            ]            
        }
    }
}
</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #tecnologia{
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
        #tech__imgs{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;

            .v-card{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 20px 10px;
                padding: 2rem 3rem;
                background-color: rgba(107, 3, 192,  0.1);
                box-shadow: 0px 0px 5px black;
                border: 2px solid rgba(0, 0, 0);
    
                .v-card__subtitle{
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255);
                    font-family: 'Anek Telugu', sans-serif;
                    font-size: .9rem;
                    font-weight: 500;
                    padding: 5px 0px 0px 0px;
    
                }
                hr{
                    border: 1px solid white;
                    width: 100%;
                    margin-top: 0px;
                    
                }
            }
        }
    }

/*############################################################*/
    @media only screen and (max-width: 1200px){
        h2{
            font-size: 2.5rem !important;
            
        }
    }
    @media only screen and (max-width: 992px){
        .v-card{
            max-width: 150px !important;
            padding: 1rem .5rem !important;
            margin: 5px 5px !important;

        }
    }
    @media only screen and (max-width: 720px){
        .v-card{
            padding: 1rem 1rem !important;
            max-width: 150px !important;
            margin: 5px 5px !important;

            hr{
                width: 80% !important;
                                   
            }            
        }
        .v-card__subtitle p{
            font-size: .7rem;
            
        }
    }
    @media only screen and (max-width: 481px){
        #tech__imgs{
            display: flex;
            justify-content: center !important;
            width: 100% !important;
            padding: 0px !important;
            
        }
        h2{
            font-size: 2rem !important;
            
        }
        .v-card{
            margin: 5px 5px !important;
            padding: .8rem .5rem !important;
            max-width: 100px !important;
            
        }
        .v-card__subtitle{
            font-size: .6rem !important;
            
        }
    }
</style>