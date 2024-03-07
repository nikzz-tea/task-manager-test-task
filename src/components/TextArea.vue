<script setup lang="ts">
defineProps<{
  placeholder?: string;
}>();
</script>

<template>
  <textarea
    class="w-full bg-transparent py-2 text-xl text-white"
    type="text"
    :placeholder="placeholder"
  />
</template>
