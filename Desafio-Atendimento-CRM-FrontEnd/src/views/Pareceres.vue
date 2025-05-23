<!-- src/views/Clientes.vue -->
<template>
  <div class="pareceres">
    <h3 class="subtitulo-principal">Pareceres</h3>
    <v-btn color="primary" class="btn-adicionar" to="/AdicionarParecer" router>Adicionar</v-btn>
    <v-btn color="orange" class="btn-editar" to="/EditarParecer">Editar</v-btn>
    <div v-if="pareceres.length" class="listagem-de-pareceres">
        <v-data-table :headers="headers" :items="pareceres" :items-per-page="10" class="tabela-pareceres">
        </v-data-table>
    </div>
    <p v-else>Carregando os Pareceres...</p>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';

export default {
  data() {
    return {
      pareceres: []
    }
  },
  async created() {
    try {
      const resposta = await api.get('/Pareceres')
      this.pareceres = resposta.data
    } 
    catch (erro) {
      console.error('Erro ao buscar os pareceres:', erro)
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
    margin-left: 920px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.listagem-de-pareceres{
    background-color: #4b7fad;
    margin-left: 20px;
    margin-top: 0px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.tabela-pareceres{
    background-color: #feffff;
    margin-left: 0px;
    margin-top: 0px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 100%;
}
.btn-editar{
    margin-left: 1050px;
    margin-top: -97px;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>

