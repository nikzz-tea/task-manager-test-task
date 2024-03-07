<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <main
    class="mx-auto mt-8 min-h-screen max-w-[1400px] rounded-t-3xl bg-zinc-800 p-4 shadow-md"
  >
    <Header />
    <router-view />
  </main>
</template>
