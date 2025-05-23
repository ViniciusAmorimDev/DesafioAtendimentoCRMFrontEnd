<!-- src/views/Clientes.vue -->
<template>
  <div class="adicionar-cliente">
    <h3 class="subtitulo-principal">Adicionar Clientes</h3>
    <div>
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="nome" :counter="40" :rules="nomeRules" label="Nome" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="cpf" :counter="11" :rules="cpfRules" label="CPF" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="endereço" :counter="40" :rules="nomeRules" label="Endereço" required></v-text-field>
        </v-col>

        <v-switch v-model="status" :label="`Ativo`" false-value="false" true-value="true" hide-details color="primary"></v-switch>
      </v-row>
    </v-container>
  </v-form>
    </div>
    <div class="d-flex justify-center">
        <v-btn color="red" class="btn-cancelar" to="/Clientes" router>Cancelar</v-btn>
        <v-btn color="primary" class="btn-confirmar" @click="cadastrarCliente">Confirmar</v-btn>
    </div>
    
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';

export default {
    data: () => ({
      valid: false,
      status: "true",
      endereço: '',
      nomeRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 40) return true

          return 'O endereço não pode ter mais de 40 caracteres.'
        },
      ],
      cpf: '',
      cpfRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 11) return true

          return 'O CPF não pode ter mais de 11 caracteres.'
        },
      ],
      nome: '',
      nomeRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 40) return true

          return 'O nome não pode ter mais de 40 caracteres.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'O e-mail deve ser válido.'
        },
      ],
    }),

methods: {
    async cadastrarCliente() {
    const isValid = this.$refs.form.validate();

    if (!isValid) {
        console.log("Dados informados inválidos!");
        return;
    }
    
    const clientePF = {
        "nome": this.nome,
        "email": this.email,
        "cpf": this.cpf,
        "endereco": this.endereço,
        "status": true,
        "atendimentosId": 0
    };

    try {
        const resposta = await api.post('/ClientePF', clientePF);
        alert('Cliente cadastrado com sucesso!');
        console.log(resposta.data);
        this.$router.push('/clientes'); // redireciona após sucesso
        } catch (erro) {
        alert('Erro ao cadastrar cliente!');
        console.error(erro);
        }
    }
}
}

</script>

<style scoped>
.subtitulo-principal{
    color: #084f93;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 0px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.btn-confirmar{
    margin-top: 100px;
    margin-left: 100px;
}
.btn-cancelar{
    margin-top: 100px;
    margin-right: 100px;
}
</style>

