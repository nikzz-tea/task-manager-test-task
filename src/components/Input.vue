<script setup lang="ts">
defineProps<{
  placeholder?: string;
  required?: boolean;
}>();
</script>

<template>
  <input
    class="w-full rounded-md border-4 border-zinc-600 bg-transparent px-3 py-1 text-xl text-white"
    type="text"
    :placeholder="placeholder"
    :required="required"
  />
</template>
