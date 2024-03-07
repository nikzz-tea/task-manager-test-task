<script setup lang="ts">
import Input from "./Input.vue";
import TextArea from "./TextArea.vue";
import AddIcon from "./icons/AddIcon.vue";

const handleSubmit = () => {
  alert("ok");
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center gap-3 rounded-md border-4 border-zinc-600 px-3 py-2"
  >
    <div class="flex w-full flex-col gap-3 divide-y divide-zinc-600">
      <Input required placeholder="Название задачи" />
      <TextArea placeholder="Описание задачи (необязательно)" />
    </div>
    <button type="submit">
      <AddIcon />
    </button>
  </form>
</template>
