<script setup lang="ts">
import { ref } from "vue";
import Input from "./Input.vue";
import TextArea from "./TextArea.vue";
import AddIcon from "./icons/AddIcon.vue";
import { useTasksStore } from "../store/tasks";

const title = ref("");
const desc = ref("");

const store = useTasksStore();

const handleSubmit = () => {
  store.addOne({
    id: Date.now(),
    title: title.value,
    desc: desc.value,
    isCompleted: false,
  });
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center gap-3 rounded-md border-4 border-zinc-600 px-3 py-2"
  >
    <div class="flex w-full flex-col gap-3 divide-y divide-zinc-600">
      <Input v-model="title" required placeholder="Название задачи" />
      <TextArea v-model="desc" placeholder="Описание задачи (необязательно)" />
    </div>
    <button type="submit">
      <AddIcon />
    </button>
  </form>
</template>
