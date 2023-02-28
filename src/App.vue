<template lang="js">
  <div id="app">
    <div id="sobre__app">
      <Sobre />
    </div>
    <div class="points">
      <v-divider></v-divider>
      <v-divider></v-divider>
    </div>
    <div id="tech__app">
      <Tecnologias/>
    </div>
    <div class="points">
      <v-divider></v-divider>
      <v-divider></v-divider>
    </div>
    <div id="servicos__app">
      <Servicos/>
    </div>
    <div class="points">
      <v-divider></v-divider>
      <v-divider></v-divider>
    </div>
    <div id="projetos__app">
      <Projetos/>
    </div>
    <div class="points">
      <v-divider></v-divider>
      <v-divider></v-divider>
    </div>
    <div id="footer__app">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Sobre from './components/Sobre.vue'
import Tecnologias from './components/Tecnologias.vue'
import Servicos from './components/Servicos.vue'
import Projetos from './components/Projetos.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Menu,
    Sobre,
    Tecnologias,
    Servicos,
    Projetos,
    Form,
    Footer
  }

}
</script>
<style lang="scss" scoped>
  #app{
    box-sizing: border-box;
    padding: 0rem .8rem .5rem .8rem;
    margin: 0px;
    background-image: url("@/assets/img-fundo/fundo3.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;

    #sobre__app{
      padding: 5rem 30rem .5rem 30rem;

    }
    #tech__app{
      padding: .5rem 10rem .5rem 10rem;
      
    }
    #servicos__app{
      padding: .5rem 20rem .5rem 20rem;
      
    }
    #projetos__app{
      padding: .5rem 20rem .5rem 20rem;

    }
    #form__app{
      padding: .5rem 35rem .5rem 35rem;

    }
    #footer_app{
      padding: .5rem .5rem .5rem .5rem;
      
    }
    .points{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      hr{
        margin: .5rem 0rem;
        border-radius: 50%;
        border: 7px solid #6b03c0;
        box-shadow: 0px 0px 5px black;
        width: 10px;
      }
    }
  }

/*################################################*/
  @media only screen and (max-width: 1560px){
    #app{
      padding: 0rem .3rem 0rem .3rem;
    
    }
    #sobre__app{
      padding: 5rem 25rem .5rem 25rem !important;
      
    }
    #servicos__app{
      padding: .5rem 15rem .5rem 15rem !important;
      
    }
    #projetos__app{
      padding: .5rem 10rem .5rem 10rem !important;

    }
  }
  @media only screen and (max-width: 1200px){
    #app{
      padding: 0rem .3rem 0rem .3rem;
    
    }
    #sobre__app{
      padding: 5rem 15rem .5rem 15rem !important;
      
    }
    #tech__app{
      padding: .5rem 5rem .5rem 5rem !important;
      
    }
    #servicos__app{
      padding: .5rem 10rem .5rem 10rem !important;
      
    }
    #projetos__app{
      padding: .5rem 2rem .5rem 2rem !important;

    }
    #form__app{
      padding: .5rem 15rem .5rem 15rem !important;

    }
  }
  @media only screen and (max-width: 992px){
    #app{
      padding: 0rem .3rem 0rem .3rem;
    
    }
     #sobre__app{
      padding: 5rem 10rem .5rem 10rem !important;
      
     }
    #tech__app{
      padding: .5rem 3rem .5rem 3rem !important;
      
    }
    #servicos__app{
      padding: .5rem 5rem .5rem 5rem !important;
      
    }
    #projetos__app{
      padding: .5rem 1rem .5rem 1rem !important;

    }
    #form__app{
      padding: .5rem 10rem .5rem 10rem !important;

    }
  }
  @media only screen and (max-width: 720px){
    #app{
      padding: 0rem .3rem 0rem .3rem;
    
    }
    #sobre__app{
      padding: 5rem 5rem .5rem 5rem !important;
      
    }
    #tech__app{
      padding: .5rem 1.5rem .5rem 1.5rem !important;
      
    }
    #servicos__app{
      padding: .5rem 1.5rem .5rem 1.5rem !important;
      
    }
    #projetos__app{
      padding: .5rem 0rem .5rem 0rem !important;

    }
    #form__app{
      padding: .5rem 3rem .5rem 3rem !important;

    }
  }
  @media only screen and (max-width: 481px){
    #app{
      padding: 0rem .3rem 0rem .3rem;
    
    }
     #sobre__app{
      padding: 5rem 0rem .5rem 0rem !important;
      
     }
    #tech__app{
      padding: .5rem 0rem .5rem 0rem !important;
      
    }
    #servicos__app{
      padding: .5rem 0rem .5rem 0rem !important;
      
    }
    #projetos__app{
      padding: .5rem 0rem .5rem 0rem !important;

    }
    #form__app{
      padding: .5rem 0rem .5rem 0rem !important;

    }
  }
</style>