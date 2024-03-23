<script>
export default {
  name: "Rodape",
  data() {
    return {};
  },
};
</script>

<template>
  <div id="rodape">
    <div class="rodape-midias">
        <a href="https://www.instagram.com/fabioo.junioor/" target="_blank" rel="noopener noreferrer">
            <span>Instagram</span>
            <i class="pi pi-instagram"></i>
        </a>
        <a href="https://github.com/fabioo-junioor" target="_blank" rel="noopener noreferrer">
            <span>Github</span>
            <i class="pi pi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/fábio-júnior-237b661b9" target="_blank" rel="noopener noreferrer">
            <span>Linkedin</span>
            <i class="pi pi-linkedin"></i>
        </a>
    </div>
    <div class="rodape-direitos">
        <h4>Copyright © 2024 Fábio Júnior Dev</h4>
        <div>
            <i class="pi pi-envelope"></i>
            <span>fcjunior@inf.ufsm.br</span>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

  #rodape {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0 0 0;
    background-color: black;
    font-family: "Madimi One", sans-serif;

    .rodape-midias{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        a{
            width: 33.33%;
            height: 8rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 1rem;
            text-decoration: none;
            
            span{
                font-size: 2.5rem;
                color: white;

            }
            i{
                font-size: 3.5rem;
                color: white;
                
            }
        }
        a:nth-child(1){
            background: #d6249f;
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);

            &:hover{
                background: #d6249fec;

            }
        }
        a:nth-child(2){
            background-color: #333;

            &:hover{
                background-color: #333333d3;

            }
        }
        a:nth-child(3){
            background-color: #0e76a8;

            &:hover{
                background-color: #0e77a8d3;

            }
        }    
    }
    .rodape-direitos{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 2rem 0;
        background-color: black;

        h4{
            text-align: center;
            font-size: 1.3rem;
            color: rgba(255, 255, 255, .8);
            margin: 0 0 0 2rem;

        }
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 2rem 0 0;
            text-decoration: none;

            span{
                font-size: 1rem;
                color: rgba(255, 255, 255, 0.8);
                margin: 0 0 0 .5rem;

            }
            i{
                font-size: 1.5rem;
                color: white;
                
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
    #rodape{
        .rodape-midias{
            a{
                span{
                    font-size: 2rem;

                }
                i{
                    font-size: 3rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 720px) {
    #rodape{
        .rodape-midias{
            a{
                span{
                    font-size: 1.5rem;

                }
                i{
                    font-size: 2.5rem;
                }
            }
        }
        .rodape-direitos{
            h4{
                font-size: 1.1rem;
                margin: 0 0 0 1rem;

            }
            div{
                margin: 0 1rem 0 0;

                span{
                    font-size: .9rem;

                }
                i{
                    font-size: 1.2rem;
                                
                }
            }
        }
    }
}
@media only screen and (max-width: 481px) {
    #rodape{
        .rodape-midias{
            flex-direction: column;

            a{
                width: 100%;
                
                span{
                    font-size: 1.7rem;

                }
                i{
                    font-size: 2.7rem;
                    
                }
            }
        }
        .rodape-direitos{
            flex-direction: column-reverse;

            h4{
                margin: 0;
                
                }
            div{
                margin: 0 0 .5rem 0;
                justify-content: center;

                span{
                    font-size: 1rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 360px) {
  
}
</style>