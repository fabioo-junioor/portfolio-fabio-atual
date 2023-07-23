<template>
    <div id="contato">
        <div class="email">
            <img src="../assets/img-icons/envelope-solid-108.png" />
            <p>fcjunior@inf.ufsm.br</p>
        </div>
        <div class="icons">
            <a href="https://github.com/fabioo-junioor" target="_blank">
                <img src="../assets/img-icons/github-logo-108.png" />
            </a>
            <a href="https://www.linkedin.com/in/fábio-júnior-237b661b9" target="_blank">
                <img src="../assets/img-icons/linkedin-square-logo-108.png" />
            </a>
            <a href="https://www.instagram.com/fabioo.junioor/" target="_blank">
                <img src="../assets/img-icons/instagram-alt-logo-108.png" />
            </a>
        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap");
    #contato{
        background: #536976; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #292e49, #536976); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right,#292e49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;

        height: 100%;
        width: 100%;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .email{
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: "Anek Telugu", sans-serif;
            color: black;

            padding: 1rem 2rem;
            margin: 0 0 2rem 0;

            border-radius: 5px;
            background-color: transparent;
            box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.7);
            
            img{
                padding-right: .2rem;
                height: 2.7rem;                

            }
            p{
                font-weight: bold;
                font-size: 1.3rem;

            }
        }
        .icons{
            a{
                img{
                    height: 6rem;
                    margin: 1rem;
                    padding: .3rem;
                    border-radius: 50%;
                    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, .4));

                }
                img:hover{
                    background-color: rgba(255, 255, 255, 0.2);
                
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
}
@media only screen and (max-width: 720px) {
    #contato{
        .email{
            margin: 2rem 0 2rem 0;

        }
    }
}
@media only screen and (max-width: 481px) {
    #contato{
        .email{
            margin: 2rem 0 1rem 0;

        }
        .icons{
            a{
                img{
                    height: 5rem;

                }
            }
        }
    }
}
@media only screen and (max-width: 360px) {
    #contato{
        .email{
            margin: 1rem 0 1rem 0;

            img{
                padding-right: .2rem;
                height: 2rem;                

            }
            p{
                font-size: 1.1rem;

            }
        }
        .icons{
            a{
                img{
                    margin: .5rem;
                    height: 4rem;

                }
            }
        }
    }
}
</style>