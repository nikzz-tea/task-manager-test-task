<script setup lang="ts">
import { ref } from "vue";
import { useTasksStore } from "../../store/tasks";
import TaskCard from "./TaskCard.vue";

const store = useTasksStore();

const sortMethod = ref<"all" | "active">("all");
</script>

<template>
  <div class="text-center text-2xl text-zinc-400">
    <span
      @click="sortMethod = 'all'"
      :class="[
        'cursor-pointer  duration-150',
        sortMethod === 'all' && 'text-zinc-200',
      ]"
      >Все ({{ store.tasks.length }})</span
    >
    |
    <span
      @click="sortMethod = 'active'"
      :class="[
        'cursor-pointer  duration-150',
        sortMethod === 'active' && 'text-zinc-200',
      ]"
      >Активные ({{ store.getActive.length }})</span
    >
  </div>
  <div v-auto-animate class="flex flex-col gap-3">
    <TaskCard
      v-for="task in sortMethod === 'all' ? store.tasks : store.getActive"
      :key="task.id"
      v-bind="task"
    />
  </div>
</template>
