<template lang="js">
  <div id="app">
    <div id="corpo">
        <div id="foto">
          <img src="./assets/img-face/eu.jpg" />
        </div>
        <div id="menu">
          <v-btn
            @click="verMais(1)"
            large
            x-large>SOBRE</v-btn>
          <v-btn
            @click="verMais(2)"
            large
            x-large>PROJETOS</v-btn>
          <v-btn
            @click="verMais(3)"
            large
            x-large>TECNOLOGIAS</v-btn>
          <v-btn
            @click="verMais(4)"
            large
            x-large>CONTATO</v-btn>
        </div>
        <div id="descricao">
          <Sobre v-show="sobre"
            class="animate__animated animate__fadeInUp" />
          <Projetos v-show="projetos"
            class="animate__animated animate__fadeInUp" />
          <Tecnologias v-show="tecnologias"
            class="animate__animated animate__fadeInUp" />
          <Contato v-show="contato"
            class="animate__animated animate__fadeInUp" />
        </div>
      </div>
  </div>
</template>

<script>
import "animate.css";

import Sobre from "./components/Sobre.vue";
import Projetos from "./components/Projetos.vue";
import Tecnologias from "./components/Tecnologias.vue";
import Contato from "./components/Contato.vue";

export default {
  name: "App",
  components: {
    Sobre,
    Projetos,
    Tecnologias,
    Contato,
  },
  data() {
    return {
      sobre: true,
      projetos: false,
      tecnologias: false,
      contato: false,
    };
  },
  methods: {
    verMais(id) {
      if (id === 1) {
        this.sobre = true;
        this.projetos = false;
        this.tecnologias = false;
        this.contato = false;
      }
      if (id === 2) {
        this.sobre = false;
        this.projetos = true;
        this.tecnologias = false;
        this.contato = false;
      }
      if (id === 3) {
        this.sobre = false;
        this.projetos = false;
        this.tecnologias = true;
        this.contato = false;
      }
      if (id === 4) {
        this.sobre = false;
        this.projetos = false;
        this.tecnologias = false;
        this.contato = true;
      }
      console.log("Clicou ", id);

      id = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap");
#app {
  background: #536976; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #292e49,
    #536976
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  #corpo {
    background-color: #16222a;
    box-shadow: 2px 2px 8px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 90%;
    width: 97%;

  }
  #foto {
    width: 25%;
    height: 100%;
    padding: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 25rem;
      border-radius: 50%;
      border: 2px solid white;

    }
  }
  #menu {
    width: 10%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    button {
      background-color: #292e49;
      box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.8);
      border: 2px solid rgba(0, 0, 0, 0.5);

      font-family: "Anek Telugu", sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
      width: 90%;
      height: 8rem;
    }
  }
  #descricao {
    width: 65%;
    height: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

  }
}

/*################################################*/
@media only screen and (max-width: 1560px) {
  #app {
    #foto {
      img {
        height: 20rem;
      }
    }
    #menu {
      button {
        font-size: 1rem;
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  #app {
    #foto {
      img {
        height: 18rem;
      }
    }
    #menu {
      button {
        font-size: 0.8rem;
        height: 7rem;
      }
    }
  }
}
@media only screen and (max-width: 992px) {
  #app {
    #foto {
      img {
        height: 13rem;
      }
    }
    #menu {
      button {
        font-size: 0.7rem;
        height: 6rem;
      }
    }
  }
}
@media only screen and (max-width: 720px) {
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    #corpo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin: 1rem;

      #foto {
        width: 100%;
        height: auto;

        img {
          height: 18rem;
        }
      }
      #menu {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        padding: 0.5rem;

        button {
          font-size: 0.9rem;
          width: 8rem;
          height: 6rem;
        }
      }
      #descricao {
        width: 100%;
        height: auto;
        padding: 1rem;

      }
    }
  }
}
@media only screen and (max-width: 481px) {
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    #corpo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: .7rem;

      #foto {
        width: 100%;
        height: auto;

        img {
          height: 15rem;
        }
      }
      #menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 0.2rem;

        button {
          width: 95%;
          height: 3rem;
          margin: 0.2rem;
        }
      }
      #descricao {
        width: 100%;
        height: 100%;
        padding: .5rem;
      }
    }
  }
}
@media only screen and (max-width: 360px) {
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    #corpo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 95%;
      height: 95%;

      #foto {
        width: 100%;
        height: auto;

        img {
          height: 15rem;
        }
      }
      #menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        padding: 0.3rem;
        
        button {
          width: 95%;
          height: 3rem;
          margin: 0.2rem;
        }
      }
      #descricao {
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        
      }
    }
  }
}
</style>