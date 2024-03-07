<script setup lang="ts">
import Input from "./Input.vue";
import TextArea from "./TextArea.vue";

const handleSubmit = () => {
  alert("ok");
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex items-center gap-3">
    <div class="flex w-full flex-col gap-3">
      <Input required placeholder="Название задачи" />
      <TextArea placeholder="Описание задачи (необязательно)" />
    </div>
    <button type="submit">
      <svg
        class="size-20 fill-zinc-600 duration-150 hover:fill-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>plus-circle</title>
        <path
          d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </button>
  </form>
</template>
