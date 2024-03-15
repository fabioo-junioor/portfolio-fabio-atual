<script>
import Menu from './components/Menu.vue'
import Sobre from './components/Sobre.vue'

export default{
  name: 'App',
  components: {Menu, Sobre},
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
  </div>
</template>

<style lang="scss" scoped>
#app{
  height: 100vh;

}
</style>