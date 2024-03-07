<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}>();
const emit = defineEmits();
</script>

<template>
  <input
    :value="modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :class="['w-full bg-transparent py-2 text-xl text-white', className]"
    type="text"
    :placeholder="placeholder"
    :required="required"
  />
</template>
