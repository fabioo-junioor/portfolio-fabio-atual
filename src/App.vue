<script>
import Menu from './components/Menu.vue'
import Sobre from './components/Sobre.vue'
import Tecnologias from './components/Tecnologias.vue'

export default{
  name: 'App',
  components: {Menu, Sobre, Tecnologias},
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
  </div>
</template>

<style lang="scss" scoped>
#app{
  height: 100vh;

}
</style>