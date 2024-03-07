<script setup lang="ts">
import CreateForm from "../components/CreateForm.vue";
import TaskList from "../components/Tasks/TaskList.vue";
</script>

<template>
  <div class="mx-auto flex max-w-[700px] flex-col gap-8 pt-8">
    <CreateForm />
    <TaskList />
  </div>
</template>
