<script setup>
import { RouterView } from 'vue-router'
import NavbarMenu from './components/NavbarMenu.vue'
import SearchbarView from './components/ui/SearchbarView.vue';
import FooterCard from './components/ui/FooterCard.vue';
</script>

<template>
  <div class="container mx-auto">
    <header>
      <NavbarMenu />
      <SearchbarView />
    </header>
    <RouterView />
    <FooterCard />
  </div>
</template>

