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
    <!--
    -->
    <Sobre />
    <Tecnologias />
    <Projetos />
    <Rodape />
  </div>
</template>

<style lang="scss" scoped>
#app{
  height: 100vh;
  //background-color: black;

}
</style>