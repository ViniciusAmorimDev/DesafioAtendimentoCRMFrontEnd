<!-- src/views/Clientes.vue -->
<template>
  <div class="adicionar-usuarios">
    <h3 class="subtitulo-principal">Adicionar Usuários</h3>
    <div>
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="nome" :counter="40" :rules="nomeRules" label="Nome" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="senha" :counter="10" :rules="senhaRules" label="Senha" required></v-text-field>
        </v-col>

        <v-switch v-model="status" :label="`Ativo`" false-value="false" true-value="true" hide-details color="primary"></v-switch>
      </v-row>
    </v-container>
  </v-form>
    </div>
    <div class="d-flex justify-center">
        <v-btn color="red" class="btn-cancelar" to="/Usuarios" router>Cancelar</v-btn>
        <v-btn color="primary" class="btn-confirmar" @click="cadastrarUsuarios">Confirmar</v-btn>
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
      senha: '',
      senhaRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 40) return true

          return 'O endereço não pode ter mais de 40 caracteres.'
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
    async cadastrarUsuarios() {
    const isValid = this.$refs.form.validate();

    if (!isValid) {
        console.log("Dados informados inválidos!");
        return;
    }
    
    const Usuarios = {
        "nome": this.nome,
        "email": this.email,
        "senha": this.senha,
        "status": true,
    };

    try {
        const resposta = await api.post('/Usuarios', Usuarios);
        alert('Usuario cadastrado com sucesso!');
        console.log(resposta.data);
        this.$router.push('/Usuarios'); 
        } catch (erro) {
        alert('Erro ao cadastrar o usuário!');
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

