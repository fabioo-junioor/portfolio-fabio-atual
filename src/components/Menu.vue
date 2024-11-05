
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
  height: 5rem;
  background-color: transparent;
  font-family: "Madimi One", sans-serif;
  border-bottom: 1px solid #76ABAE;

  .navbar{
    height: 100%;
    
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
            font-size: 1.3rem;
            color: #EEEEEE;

          }
          &:hover{
            border-bottom: 1px solid #EEEEEE;

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
    .navbar{
      .p-button{
        margin: 1rem 0 0 1rem;
        background-color: #EEEEEE;

      }
      .navbar-collapse{
        .navbar-nav{
          .nav-item{
            margin: .5rem .3rem;
            padding: 1rem 0 1rem 1rem;
            background-color: #31363F;
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