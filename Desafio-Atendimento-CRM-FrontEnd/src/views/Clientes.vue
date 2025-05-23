<!-- src/views/Clientes.vue -->
<template>
  <div class="clientes">
    <h3 class="subtitulo-principal">Clientes</h3>
    <v-btn color="primary" class="btn-adicionar" to="/AdicionarCliente" router>Adicionar</v-btn>
    <div v-if="clientes.length" class="listagem-de-clientes">
        <v-data-table :headers="headers" :items="clientes" :items-per-page="10" class="tabela-clientes"></v-data-table>
    </div>
    <p v-else>Carregando os Clientes...</p>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      clientes: []
    }
  },
  async created() {
    try {
      const resposta = await api.get('/ClientePF')
      this.clientes = resposta.data
    } 
    catch (erro) {
      console.error('Erro ao buscar os clientes:', erro)
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
    background-color: #4b7fad;
    color: white;
    margin-left: 1000px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.listagem-de-clientes{
    background-color: #4b7fad;
    margin-left: 20px;
    margin-top: 0px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.tabela-clientes{
    background-color: #feffff;
    margin-left: 0px;
    margin-top: 0px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
}
</style>

