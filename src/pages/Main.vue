<script setup lang="ts">
import CreateForm from "../components/CreateForm.vue";
import TaskList from "../components/Tasks/TaskList.vue";
</script>

<template>
  <div class="mx-auto flex max-w-[700px] flex-col gap-8 pt-8">
    <CreateForm />
    <TaskList />
    <router-link class="text-center" to="/">
      <span class="text-white duration-150 hover:text-zinc-300"
        >На стартовую</span
      >
    </router-link>
  </div>
</template>
