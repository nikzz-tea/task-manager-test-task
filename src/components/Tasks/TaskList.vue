<script setup lang="ts">
import { useTasksStore } from "../../store/tasks";
import TaskCard from "./TaskCard.vue";

const store = useTasksStore();
</script>

<template>
  <div v-auto-animate class="flex flex-col gap-3">
    <TaskCard v-for="task in store.tasks" :key="task.id" v-bind="task" />
  </div>
</template>
