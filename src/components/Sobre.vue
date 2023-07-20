<template>
    <div id="sobre">
        <h1> &lsaquo;from the next step /&rsaquo;</h1>
        <p>Meu nome é Fábio estou cursando Sistemas de Informação na Universidade Federal de Santa Maria, com uma ênfase pessoal em front-end.</p>
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #sobre{
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
        justify-content: flex-start;
        align-items: center;


        h1{
            font-family: 'Rampart One', cursive;
            color: white;
            padding: .5rem;
            font-size: 3rem;

        }
        p{
            font-family: 'Anek Telugu', sans-serif;
            color: white;
            padding: 1rem;
            font-size: 1.5rem;
            text-align: center;

        }

    }
/*################################################*/
@media only screen and (max-width: 1560px) {
    #sobre{
        h1{
            font-size: 2.5rem;

        }
        p{
            font-size: 1.2rem;

        }
    }
}
@media only screen and (max-width: 1200px) {
    #sobre{
        h1{
            font-size: 2.3rem;

        }
        p{
            font-size: 1rem;
            
        }
    }
}
@media only screen and (max-width: 992px) {
}
@media only screen and (max-width: 720px) {
}
@media only screen and (max-width: 481px) {
}
</style>