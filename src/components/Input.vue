<script setup lang="ts">
defineProps<{
  placeholder?: string;
  required?: boolean;
}>();
</script>

<template>
  <input
    class="w-full bg-transparent py-2 text-xl text-white"
    type="text"
    :placeholder="placeholder"
    :required="required"
  />
</template>
