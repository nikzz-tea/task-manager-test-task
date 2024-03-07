<script setup lang="ts">
import Task from "../../models/Task";
import { useTasksStore } from "../../store/tasks";
import BlankCheckIcon from "../icons/BlankCheckIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import EditIcon from "../icons/EditIcon.vue";

const { id } = defineProps<Task>();

const store = useTasksStore();
</script>

<template>
  <div
    :class="[
      'flex items-center justify-between rounded-md p-4 shadow-sm duration-150',
      isCompleted
        ? 'bg-zinc-700 text-zinc-400 line-through'
        : 'bg-zinc-600 text-white',
    ]"
  >
    <div class="flex items-center gap-4">
      <div @click="store.toggleComplete(id)">
        <BlankCheckIcon v-if="!isCompleted" />
        <CheckIcon v-if="isCompleted" />
      </div>
      <div class="divide-y-2 divide-zinc-800">
        <p class="pb-1 text-3xl">{{ title }}</p>
        <p v-if="desc" class="pt-1 text-2xl">{{ desc }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <EditIcon />
      <DeleteIcon @click="store.deleteOne(id)" />
    </div>
  </div>
</template>
