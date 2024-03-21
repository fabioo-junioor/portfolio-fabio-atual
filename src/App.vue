<script>
import Menu from './components/Menu.vue'
import Sobre from './components/Sobre.vue'
import Tecnologias from './components/Tecnologias.vue'
import Projetos from './components/Projetos.vue'
import Rodape from './components/Rodape.vue'

export default{
  name: 'App',
  components: {Menu, Sobre, Tecnologias, Projetos, Rodape},
  data(){
    return{

    }
  }
}
</script>

<template>
  <div id="app">
    <Menu />
    <Sobre />
    <Tecnologias />
    <Projetos />
    <Rodape />
    <!--
    -->
  </div>
</template>

<style lang="scss" scoped>
#app{
  height: 100vh;
  //background-color: black;

}
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {

}
@media only screen and (max-width: 992px) {

}
@media only screen and (max-width: 720px) {

}
@media only screen and (max-width: 481px) {

}
@media only screen and (max-width: 360px) {
  
}
</style>