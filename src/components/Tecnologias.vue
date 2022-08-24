<template>
    <div id="tecnologia">
        <div id="title">
            <h2>MINHAS SKILLS</h2>
            <v-divider></v-divider>
        </div>
        <div id="tech__imgs">
            <v-card v-for="tech in techs" :key="tech" 
                class="mx-auto" max-width="200"
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
                { title: 'JavaScript', level: '2 de 5', src: require('../assets/img-tools/javascript.png')},
                { title: 'Bootstrap', level: '3 de 5', src: require('../assets/img-tools/bootstrap.png')},
                { title: 'VueJs', level: '2 de 5', src: require('../assets/img-tools/vue-js.png')},
                { title: 'SASS', level: '3 de 5', src: require('../assets/img-tools/sass.png')},
                { title: 'Vuetify', level: '2 de 5', src: require('../assets/img-tools/vuetify.png')},
                { title: 'Wordpress', level: '4 de 5', src: require('../assets/img-tools/wordpress.png')},
                { title: 'Mysql', level: '4 de 5', src: require('../assets/img-tools/mysql.png')},
                { title: 'Scrum', level: '4 de 5', src: require('../assets/img-tools/scrum.png')},
                { title: 'PHP', level: '1 de 5', src: require('../assets/img-tools/php.png')},
                //{ title: 'Flutter', level: '0 de 5', src: require('../assets/img-tools/flutter.png')},
                { title: 'Java', level: '1 de 5', src: require('../assets/img-tools/java.png')}
            ]            
        }
    }
}
</script>
<style lang="scss">
    #tecnologia{
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
                border: 2px solid white;
                width: 25%;

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
                //background-color: #252831;
                background-color: #252d36;
                box-shadow: 0px 0px 15px #6b03c0;
                border: 1px solid #6b03c0;
    
                .v-card__subtitle{
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.9);
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    font-size: .8rem;
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
            margin: 5px 0px !important;
            padding: .8rem .5rem !important;
            max-width: 100px !important;
            
        }
    }
</style>