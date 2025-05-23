<template>
  <v-app>
    <v-app-bar flat :elevation="5" scroll-behavior="hide" scroll-threshold="415" color="primary">
        <v-app-bar-nav-icon class="btn-menu-lateral" @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
        <img src="../src/assets/Logo Letra Branca sem fundo.png" class="logo-barra-superior" alt="Logo"/>
    </v-app-bar>
  <v-navigation-drawer v-model="isDrawerOpen" app color="primary" >
      <v-text-field clearable label="Pesquisar" class="input-pesquisar"></v-text-field>
      <v-list class="lista-menu" color="secondary">
        <v-list-item to="/" router>
            <v-list-item-title>Home</v-list-item-title>
        </v-list-item>  
        <v-list-item to="/usuarios" router>
            <v-list-item-title>Usuários</v-list-item-title>
        </v-list-item> 
        <v-list-item to="/clientes" router>
            <v-list-item-title>Clientes</v-list-item-title>
        </v-list-item>       
        <v-list-item to="/Atendimentos" router>
            <v-list-item-title>Atendimentos</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Pareceres" router>
            <v-list-item-title>Pareceres</v-list-item-title>
        </v-list-item>   
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { ref } from "vue";

const isDrawerOpen = ref(false);
let message = ref("");

</script>

<style scoped>
.logo-barra-superior {
  width: 200px;
  height: auto;
  margin-left: -50px;
}
.v-list-item {
  color: white;
}

</style>
