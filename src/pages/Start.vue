<script setup lang="ts">
import ArrowIcon from "../components/icons/ArrowIcon.vue";
</script>

<template>
  <div class="mx-auto flex max-w-[700px] flex-col items-center gap-16 pt-16">
    <h2 class="text-center text-3xl text-white">Стартовая страница</h2>
    <router-link to="/tasks">
      <button
        class="flex items-center gap-4 rounded-lg bg-zinc-600 px-4 py-2 duration-150 hover:bg-zinc-500"
      >
        <span class="text-3xl text-white">На страницу задач</span>
        <ArrowIcon />
      </button>
    </router-link>
  </div>
</template>
