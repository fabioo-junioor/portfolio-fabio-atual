
<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        {
          label: "Inicio",
          //icon: "pi pi-home",
        },
        {
          label: "Tecnologias",
          //icon: "pi pi-star",
        },
        {
          label: "Projetos",
          //icon: "pi pi-search",
        },
        {
          label: "Contato",
          //icon: "pi pi-envelope",
        },
      ],
    };
  },
};
</script>
<template>
  <div id="menu">
    <Menubar :model="items" />
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');
    #menu{
        .p-menubar{
            border: none;

            .p-menubar-root-list{
                width: 100%;
                height: 10vh;
                background-color: #10e956;
                display: flex;
                justify-content: space-around;

                .p-menuitem{
                  height: 100%;

                  .p-menuitem-content{
                    height: 100%;
                    display: flex;
                    align-items: center;

                  }
                  &.p-focus{
                    > .p-menuitem-content{
                      background-color: rgba(0, 0, 0, 0.1) !important;
                      
                    }
                  }
                  .p-menuitem-content:hover{
                      background-color: rgba(0, 0, 0, 0.1);
                      border-radius: 0;
  
                  }
                  .p-menuitem-text{
                      color: black;
                      font-size: 1.7rem;
                      font-family: "Madimi One", sans-serif;
                      font-weight: 400;
  
                  }
                }
            }
        }
    }
</style>