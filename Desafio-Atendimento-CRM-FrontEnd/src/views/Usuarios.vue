<!-- src/views/Clientes.vue -->
<template>
  <div>
    <h3 class="subtitulo-principal">Usuários</h3>
    <v-btn color="primary" class="btn-adicionar" to="/AdicionarUsuarios" router>Adicionar</v-btn>
    <div v-if="usuarios.length" class="listagem-de-usuarios">
        <v-data-table :headers="headers" :items="usuarios" :items-per-page="10" class="tabela-usuarios"></v-data-table>
    </div>
  </div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css';
import api from '../services/api';
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      usuarios: []
    }
  },
  async created() {
    try {
      const resposta = await api.get('/Usuarios')
      this.usuarios = resposta.data
    } catch (erro) {
      console.error('Erro ao buscar usuarios:', erro)
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
</style>

