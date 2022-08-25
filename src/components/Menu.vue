<template>
  <nav id="menu">
    <v-toolbar elevation="4" flat>
      <v-container class="fill-height" id="btn-toggle">
        <v-btn color="pink" @click.stop="drawer = !drawer">
            <v-img contain width="20" src="@/assets/img-icons/icon-hamburger.png"></v-img>
        </v-btn>
      </v-container>
      <v-toolbar-title id="logo">
        <v-img contain src="@/assets/img-logo/logo2.png"> </v-img>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="#" large elevation="4">Inicio</v-btn>
        <v-btn to="#" large elevation="4">Sobre</v-btn>
        <v-btn to="#" large elevation="4">Tecnologias</v-btn>
        <v-btn to="#" large elevation="4">Contato</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container id="menuDrawer">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-for="item in items" :key="item" link>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>
    </v-container>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Inicio" },
        { title: "Sobre" },
        { title: "Tecnologias" },
        { title: "Contato" }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .v-toolbar__content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #logo .v-image__image{
      width: 300px;
      
    }
  }
  #btn-toggle, #menuDrawer{
      display: none;

  }
  .v-toolbar__items .v-btn{
      padding: 10px !important;

  }
  .v-navigation-drawer__content{
      background-color: #3d3d3d;

      .v-list-item{
          //background-color: #6b03c0;
          //border-bottom: 1px solid white;
          //box-shadow: (0px 0px 10px rgba(0, 0, 0, 0.5));
          box-shadow: (0px 0px 5px rgba(255, 255, 255, 0.397));
          margin: 8px 3px;
          border-radius: 10px;

          .v-list-item__title{
              color: white;
              font-size: 0.9rem;
              font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
              font-weight: 500;
              
          }
      }
  }
  @media only screen and (max-width: 680px){
          .v-toolbar__items{
              display: none;
          }
          #btn-toggle, #menuDrawer{
              display: inline;

          }
          #logo .v-image__image{
              width: 50px;
              
          }
      }
</style>