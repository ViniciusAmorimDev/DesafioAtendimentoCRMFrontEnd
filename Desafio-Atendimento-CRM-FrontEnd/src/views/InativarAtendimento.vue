<!-- src/views/Clientes.vue -->
<template>
  <div class="inativar-atendimento">
    <h3 class="subtitulo-principal">Inativar Atendimento</h3>
    <div class="input-id-atendimento">
    <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="atendimentoID" :counter="40" :rules="atendimentoIDRules" label="Id Atendimento" required></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
    </div>
    <div class="d-flex justify-center">
        <v-btn color="red" class="btn-cancelar" to="/Atendimentos" router>Cancelar</v-btn>
        <v-btn color="primary" class="btn-confirmar" @click="inavarAtendimento">Confirmar</v-btn>
    </div>
    
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';

export default {
    data: () => ({
      valid: false,
      status: "false",
      atendimentoID: '',
      atendimentoIDRules: [
        value => {
          if (value) return true

          return 'O preenchimento é obrigatório.'
        },
        value => {
          if (value?.length <= 1000) return true

          return 'O Id do atendimento não pode ter mais de 1000 caracteres.'
        },
      ]
    }),

methods: {
    async inavarAtendimento() {
    const isValid = this.$refs.form.validate();

    if (!isValid) {
        console.log("Dados informados inválidos!");
        return;
    }
    
    const atendimento = this.atendimentoID;

    try {
        const resposta = await api.put(`/Atendimentos/inativa/${atendimento}`);
        alert('Atendimento Inativado com sucesso!');
        console.log(resposta.data);
        this.$router.push('/Atendimentos'); 
        } catch (erro) {
        alert('Erro ao inativar o atendimento!');
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
.input-id-atendimento{
    margin-left: 500px;
    margin-right: 100px;
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

