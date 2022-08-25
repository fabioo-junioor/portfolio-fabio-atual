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
                            :counter="1000"
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
                    v => v.length <= 1000 || ' Conteudo maior que 1000 caracteres',
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
<style lang="scss" scoped>
    #form{       
        border-radius: 10px;
        padding: 10px 10px;
        background: #485563;
        background: -webkit-linear-gradient(to bottom, #29323c, #485563);
        background: linear-gradient(to bottom, #29323c, #485563);

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
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-size: .9rem;

        }
        #conteudo .v-input__slot{
            background-color: #252d3669;

        }
        input, textarea{
            color: white;
            border-color: white;
            font-size: 1rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

        }
        .v-messages, .v-counter{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: white;
            font-weight: 500;

        }
        .v-messages{
            color: rgba(255, 0, 0);
            font-size: .8rem;

        }
        .v-btn{
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            background-color: #252d36;
            box-shadow: 2px 2px 7px black;
            color: white;
            font-size: 1.1rem;
            width: 100%;
            height: 4rem;

        }
    }
</style>