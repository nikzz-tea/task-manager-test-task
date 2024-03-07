<script setup lang="ts">
import Task from "../../models/Task";
import { useTasksStore } from "../../store/tasks";
import BlankCheckIcon from "../icons/BlankCheckIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import EditIcon from "../icons/EditIcon.vue";

const { id } = defineProps<Task>();

const store = useTasksStore();

const handleDelete = () => {
  store.deleteOne(id);
};
</script>

<template>
  <div
    class="flex items-center justify-between rounded-md bg-zinc-600 p-4 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <BlankCheckIcon v-if="!isCompleted" />
      <CheckIcon v-if="isCompleted" />
      <div class="divide-y-2 divide-zinc-800">
        <p class="pb-1 text-3xl text-white">{{ title }}</p>
        <p class="pt-1 text-2xl text-white">{{ desc }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <EditIcon />
      <DeleteIcon @click="handleDelete" />
    </div>
  </div>
</template>
