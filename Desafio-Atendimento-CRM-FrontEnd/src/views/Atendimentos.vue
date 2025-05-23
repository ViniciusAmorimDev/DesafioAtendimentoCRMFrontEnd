<!-- src/views/Clientes.vue -->
<template>
  <div>
    <h3 class="subtitulo-principal">Atendimentos</h3>
    <v-btn color="primary" class="btn-adicionar" to="/AdicionarAtendimento" router>Adicionar</v-btn>
    <v-btn color="red" class="btn-inativar" to="/InativarAtendimento" router>Inativar</v-btn>
    <div v-if="atendimentos.length" class="listagem-de-atendimentos">
        <v-data-table :headers="headers" :items="atendimentos" :items-per-page="10" class="tabela-atendimentos"></v-data-table>
    </div>
    <p v-else>Carregando os atendimentos...</p>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';

export default {
  data() {
    return {
      atendimentos: []
    }
  },
  async created() {
    try {
      const resposta = await api.get('/Atendimentos')
      this.atendimentos = resposta.data
    } catch (erro) {
      console.error('Erro ao buscar atendimentos:', erro)
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
.btn-adicionar{
    margin-left: 920px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.btn-inativar{
    margin-left: 1050px;
    margin-top: -97px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

