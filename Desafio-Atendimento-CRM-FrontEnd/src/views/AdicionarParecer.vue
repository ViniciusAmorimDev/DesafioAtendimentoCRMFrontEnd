<!-- src/views/Clientes.vue -->
<template>
  <div class="adicionar-parecer">
    <h3 class="subtitulo-principal">Adicionar Parecer</h3>
    <div>
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="titulo" :counter="40" :rules="tituloRules" label="Titulo" required></v-text-field>
          
        </v-col>

        <v-col cols="12" md="50">
          <v-text-field v-model="conteudo" :rules="conteudoRules" label="Conteúdo" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="atendimentoId" :counter="10" :rules="atendimentoIdRules" label="Id do Atendimento" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="Usuarios" :counter="10" :rules="UsuariosRules" label="Id do Usuário" required></v-text-field>
        </v-col>

        <v-switch v-model="status" :label="`Ativo`" false-value="false" true-value="true" hide-details color="primary"></v-switch>
      </v-row>
    </v-container>
  </v-form>
    </div>
    <div class="d-flex justify-center">
        <v-btn color="red" class="btn-cancelar" to="/Pareceres" router>Cancelar</v-btn>
        <v-btn color="primary" class="btn-confirmar" @click="cadastrarParecer">Confirmar</v-btn>
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
      atendimentoId: '',
      atendimentoIdRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'O endereço não pode ter mais de 10 caracteres.'
        },
      ],
      titulo: '',
      tituloRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 30) return true

          return 'O titulo não pode ter mais de 30 caracteres.'
        },
      ],
      conteudo: '',
      conteudoRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
      ],
      Usuarios: '',
      UsuariosRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'O endereço não pode ter mais de 10 caracteres.'
        },
      ],
    }),

methods: {
    async cadastrarParecer() {
    const isValid = this.$refs.form.validate();

    if (!isValid) {
        console.log("Dados informados inválidos!");
        return;
    }
    
    const Usuarios = {
        "titulo": this.titulo,
        "conteudo": this.conteudo,
        "atendimentosId": this.atendimentoId,
        "usuariosId": this.Usuarios,
        "status": true,
    };

    try {
        const resposta = await api.post('/Pareceres', Usuarios);
        alert('Parecer cadastrado com sucesso!');
        console.log(resposta.data);
        this.$router.push('/Pareceres'); 
        } catch (erro) {
        alert('Erro ao cadastrar o parecer!');
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

