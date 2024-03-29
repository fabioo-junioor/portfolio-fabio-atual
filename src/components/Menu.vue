
<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>
<template>
  <div id="menu">
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Inicio</b-nav-item>
          <b-nav-item href="#tecnologias">Tecnologias</b-nav-item>
          <b-nav-item href="#projetos">Projetos</b-nav-item>
          <b-nav-item href="#rodape">Contato</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Madimi+One&display=swap");

#menu {
  width: 100%;
  height: 10vh;
  background-color: #10e956;
  font-family: "Madimi One", sans-serif;

  .navbar{
    height: 100%;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, .8);

    .p-button{
      margin: 0 0 .5rem 1rem;

    }
    .navbar-collapse{
      height: 100%;

      .navbar-nav{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;

        .nav-item{
          height: 100%;
          display: flex;
          align-items: center;

          a{
            padding: 1.5rem 1rem;
            font-size: 1.5rem;
            color: black;

          }
          &:hover{
            border-radius: 5px;
            background-color: rgba(0, 0, 0, .2);

          }
        }
      }
    }
  }
}
/*################################################*/
@media only screen and (max-width: 1560px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 992px) {
  #menu {
    height: auto;
    position: absolute;

    .navbar{
      .navbar-collapse{
        .navbar-nav{
          .nav-item{
            margin: .5rem .3rem;
            border: 1px solid #333;
            border-radius: 5px;

          }
        }
      }
    }
  }
}
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {
}
@media only screen and (max-width: 360px) {
}
</style>