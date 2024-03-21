<script>
export default {
  name: "Sobre",
  data() {
    return {};
  },
};
</script>

<template>
  <div id="sobre">
    <div class="sobre-apresentacao">
      <h1 class="sobre-nome">Olá, meu nome é Fábio!
        <img class="sobre-gif-tempo" src="../assets/gifs/tempo.gif">
      </h1>
      <h1 class="sobre-titulo">Web Developer Front end</h1>
      <p class="sobre-texto">
        Profissional na área do desenvolvimento web, especializado(a) em html,
        css, javascript e vuejs. Proativo(a) e orientado(a) para resultados,
        busco contribuir com minha experiência em desenvolvimento web front-end.
        Comprometido(a) com a excelência, estou pronto(a) para integrar uma
        equipe dinâmica e agregar valor. Possuo Técnico em Contabilidade pela
        Instituição Federal Sul-Riograndense (2015), Técnico em Informática para
        Internet pelo Colégio Técnico Industrial de Santa Maria (2016) e
        Bacharelado em Sistemas de Informação pela Universidade Federal de Santa
        Maria (2023).
      </p>
    </div>
    <div class="sobre-imagem">
      <img class="sobre-draw" src="../assets/imagens/feeling_proud.svg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

  #sobre {
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../assets/imagens/background1.jpg') no-repeat fixed center;
    background-size: cover;
    display: flex;
    width: 100%;
    height: 90vh;
    padding: 6rem 0;
    font-family: "Madimi One", sans-serif;

    .sobre-apresentacao{
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 3rem;

      .sobre-nome{
        color: white;
        font-size: 3rem;
        display: flex;
        align-items: center;

        .sobre-gif-tempo{
          height: 3rem;

        }
      }
      .sobre-titulo{
        color: white;
        font-size: 2rem;
        border-bottom: 1px solid #10e956;

      }
      .sobre-texto{
        color: rgba(255, 255, 255, .8);
        font-size: 1.3rem;
        text-align: justify;
        padding: .5rem 0 0 0;

      }      
    }
    .sobre-imagem{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .sobre-draw{
        width: 45%;

      }
    }
  }
/*################################################*/
@media only screen and (max-width: 1560px) {

}
@media only screen and (max-width: 1200px) {
  #sobre{
    .sobre-apresentacao{
      padding: 2rem;

      .sobre-nome{
        font-size: 2rem;

        .sobre-gif-tempo{
          height: 2rem;

        }
      }
      .sobre-titulo{
        font-size: 1.5rem;

      }
      .sobre-texto{
        font-size: 1.1rem;

      }
    }
    .sobre-imagem{
      .sobre-draw{
        width: 50%;

      }
    }
  }
}
@media only screen and (max-width: 992px) {
  #sobre{
    height: auto;
    
    .sobre-apresentacao{
      padding: 1.5rem;

      .sobre-nome{
        font-size: 1.7rem;

      }
      .sobre-titulo{
        font-size: 1.3rem;

      }
      .sobre-texto{
        font-size: 1rem;

      }
    }
    .sobre-imagem{
      .sobre-draw{
        width: 55%;

      }
    }
  }
}
@media only screen and (max-width: 720px) {
  #sobre{
    width: 100%;
    flex-direction: column;
    align-items: center;

    .sobre-apresentacao{
      padding: 1rem;
      width: 100%;

      .sobre-texto{
        font-size: 1.1rem;

      }
    }
    .sobre-imagem{
      width: 100%;
      padding: 1rem;

      .sobre-draw{
        width: 60%;
      }

    }
  }
}
@media only screen and (max-width: 481px) {

}
@media only screen and (max-width: 360px) {
  
}
</style>