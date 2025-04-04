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
      <h1 class="sobre-nome">
        Olá, meu nome é Fábio!
        <img class="sobre-gif-tempo" src="../assets/gifs/tempo.gif" />
      </h1>
      <h1 class="sobre-titulo">Web Developer Frontend</h1>
      <p class="sobre-texto">
        Profissional na área do desenvolvimento web, com foco em criar
        interfaces intuitivas e eficientes. Proativo e orientado para
        resultados, busco contribuir com minha experiência na criação de
        soluções inovadoras que promovem uma experiência do usuário de alta
        qualidade. Com compromisso com a excelência, trabalho bem em equipe e
        estou pronto para agregar valor em projetos desafiadores e dinâmicos.
        Possuo Técnico em Contabilidade pela Instituição Federal
        Sul-Riograndense (2015), Técnico em Informática para Internet pelo
        Colégio Técnico Industrial de Santa Maria (2016) e Bacharelado em
        Sistemas de Informação pela Universidade Federal de Santa Maria (2023).
        Atualmente estou expandindo minhas habilidades por meio de um mestrado
        em Ciência da Computação, com ênfase em métricas de usabilidade de
        interfaces.
      </p>
      <div class="sobre-midias">
        <a
          href="https://www.instagram.com/fabioo.junioor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-instagram" title="Instagram"></i>
        </a>
        <a
          href="https://github.com/fabioo-junioor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-github" title="Github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/fabioo-junioor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-linkedin" title="Linkedin"></i>
        </a>
        <a
          href="http://lattes.cnpq.br/1398810150273129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="pi pi-book" title="Curriculo lattes"></i>
        </a>
      </div>
    </div>
    <div class="sobre-imagem">
      <img class="sobre-draw" src="../assets/imagens/eu.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Madimi+One&display=swap");

#sobre {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 5rem);
  font-family: "Madimi One", sans-serif;

  .sobre-apresentacao {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;

    .sobre-nome {
      color: #eeeeee;
      font-size: 3rem;
      display: flex;
      align-items: center;

      .sobre-gif-tempo {
        height: 3rem;
      }
    }
    .sobre-titulo {
      color: #eeeeee;
      font-size: 2rem;
      border-bottom: 1px solid #76abae;
    }
    .sobre-texto {
      color: #eeeeee;
      font-size: 1.3rem;
      padding: 0.5rem 0 0 0;
    }
    .sobre-midias {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem 0;

      a {
        margin: 0 1rem;

        i {
          font-size: 2rem;
          color: #eeeeee;

          &:hover {
            color: #76abae;
          }
        }
      }
    }
  }
  .sobre-imagem {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .sobre-draw {
      border-radius: 5px;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
      width: 45%;
    }
  }
}
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
  #sobre {
    .sobre-apresentacao {
      padding: 2rem;

      .sobre-nome {
        font-size: 2rem;

        .sobre-gif-tempo {
          height: 2rem;
        }
      }
      .sobre-titulo {
        font-size: 1.5rem;
      }
      .sobre-texto {
        font-size: 1.1rem;
      }
    }
    .sobre-imagem {
      .sobre-draw {
        width: 50%;
      }
    }
  }
}
@media only screen and (max-width: 992px) {
  #sobre {
    height: auto;

    .sobre-apresentacao {
      padding: 1.5rem;

      .sobre-nome {
        font-size: 1.7rem;
      }
      .sobre-titulo {
        font-size: 1.3rem;
      }
      .sobre-texto {
        font-size: 1rem;
      }
      .sobre-midias {
        a {
          i {
            font-size: 1.8rem;
          }
        }
      }
    }
    .sobre-imagem {
      .sobre-draw {
        width: 55%;
      }
    }
  }
}
@media only screen and (max-width: 720px) {
  #sobre {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;

    .sobre-apresentacao {
      padding: 1rem;
      width: 100%;

      .sobre-texto {
        font-size: 1.1rem;
      }
      .sobre-midias {
        justify-content: flex-start;
      }
    }
    .sobre-imagem {
      width: 100%;
      padding: 1rem;

      .sobre-draw {
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
