<script setup lang="ts">
import Task from "../../models/Task";

defineProps<Task>();
</script>

<template>
  <div
    class="flex items-center justify-between rounded-md bg-zinc-600 p-4 shadow-sm"
  >
    <div class="flex items-center gap-4">
      <svg
        v-if="!isCompleted"
        class="size-10 cursor-pointer fill-zinc-800 duration-150 hover:fill-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>checkbox-blank-circle-outline</title>
        <path
          d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
      <svg
        v-if="isCompleted"
        class="size-10 cursor-pointer fill-zinc-800 duration-150 hover:fill-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>checkbox-marked-circle-outline</title>
        <path
          d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        />
      </svg>
      <div class="divide-y-2 divide-zinc-800">
        <p class="pb-1 text-3xl text-white">{{ title }}</p>
        <p class="pt-1 text-2xl text-white">{{ desc }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <svg
        class="size-10 cursor-pointer fill-zinc-800 duration-150 hover:fill-zinc-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>pencil</title>
        <path
          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
        />
      </svg>
      <svg
        class="size-10 cursor-pointer fill-zinc-800 duration-150 hover:fill-zinc-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>delete</title>
        <path
          d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
        />
      </svg>
    </div>
  </div>
</template>
