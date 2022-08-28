<template>
    <div id="form">
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="nome"
                            :rules="regrasNome"
                            :counter="50"
                            label="Nome" required>
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="email"
                            :rules="regrasEmail"
                            label="Email" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="12">
                        <v-text-field
                            v-model="assunto"
                            :rules="regrasAssunto"
                            :counter="50"
                            label="Assunto" required>
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row id="conteudo">
                    <v-col cols="12" md="12">
                        <v-textarea
                            v-model="conteudo"
                            :rules="regrasConteudo"
                            filled
                            auto-grow
                            :counter="500"
                            name="input-7-1"
                            label="Conteudo" required>
                        </v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn @click="enviaForm()"
                            :disabled="!valid">
                            Enviar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            valid: false,
            nome: '',
            regrasNome: [
                v => !!v || 'Campo nome vazio',
                v => v.length <= 50 || 'Nome maior que 50 caracteres'
            ],
            email: '',
            regrasEmail: [
                v => !!v || 'Campo email vazio',
                v => /.+@.+/.test(v) || 'Email não valido'
            ],
            assunto: '',
                regrasAssunto: [
                    v => !!v || 'Campo assunto vazio',
                v => v.length <= 50 || 'Assunto maior que 50 caracteres'
            ],
            conteudo: '',
                regrasConteudo: [
                    v => !!v || 'Campo conteudo vazio',
                    v => v.length <= 500 || ' Conteudo maior que 1000 caracteres',
            ],
        }
    },
    methods: {
      enviaForm(){
        console.log("Nome: ", this.nome)
        console.log("E-mail: ", this.email)
        console.log("Assunto: ", this.assunto)
        console.log("Conteudo: ", this.conteudo)

      }
    }
}
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@500&family=Rampart+One&display=swap');
    #form{       
        border-radius: 10px;
        padding: 10px 10px;
        border-top: 1px solid rgba(153, 153, 153, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        border-left: 1px solid rgba(153, 153, 153, 0.5);
        background-color: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        box-shadow: 0px 0px 5px black;
        
    }
    #form{
        .v-input__slot::before{
            border-color: rgba(255, 255, 255, 0.4);

        }
        .v-input__slot::after{
            border-color: white;
            
        }
        label{
            color: white;
            font-family: 'Anek Telugu', sans-serif;
            font-size: 1rem;

        }
        #conteudo .v-input__slot{
            background-color: rgba(0, 0, 0, 0.2);

        }
        input, textarea{
            color: white;
            border-color: white;
            font-size: 1.1rem;
            font-family: 'Anek Telugu', sans-serif;

        }
        .v-messages, .v-counter{
            font-family: 'Anek Telugu', sans-serif;
            color: white;

        }
        .v-messages{
            color: rgba(255, 0, 0);
            font-size: .9rem;

        }
        .v-btn{
            font-family: 'Anek Telugu', sans-serif;
            background-color: #6b03c0;
            box-shadow: 2px 2px 7px black;
            color: white;
            font-size: 1.2rem;
            width: 100%;
            height: 4rem;

            &:disabled{
                background-color: #3d3d3d79 !important;
                color: rgba(255, 255, 255, 0.7) !important;

            }
        }
    }
</style>