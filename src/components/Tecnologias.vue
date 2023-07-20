<template>
    <div id="tecnologias">
        <p>Tecnologias</p>
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
    #tecnologias{
        background: #536976; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #292e49, #536976); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right,#292e49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);

        height: 100%;
        width: 100%;
        padding: 1rem;

        border-radius: 5px;

    }
</style>