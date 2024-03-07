<script setup lang="ts">
import { ref } from "vue";
import Task from "../../models/Task";
import { useTasksStore } from "../../store/tasks";
import BlankCheckIcon from "../icons/BlankCheckIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import EditIcon from "../icons/EditIcon.vue";
import SaveIcon from "../icons/SaveIcon.vue";
import Input from "../Input.vue";
import TextArea from "../TextArea.vue";

const { id, title, desc } = defineProps<Task>();

const store = useTasksStore();

const newTitle = ref(title);
const newDesc = ref(desc || "");
const isEditMode = ref(false);

const handleSave = () => {
  store.editOne(id, newTitle.value, newDesc.value);
  isEditMode.value = false;
};
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
        <Input
          placeholder="Название"
          className="bg-zinc-700 rounded-t-md p-2"
          v-if="isEditMode"
          v-model="newTitle"
        />
        <p v-if="!isEditMode" class="pb-1 text-3xl">{{ title }}</p>
        <TextArea
          placeholder="Описание"
          className="bg-zinc-700 rounded-b-md p-2"
          v-if="isEditMode"
          v-model="newDesc"
        />
        <p v-if="desc && !isEditMode" class="pt-1 text-2xl">{{ desc }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <EditIcon v-if="!isEditMode" @click="isEditMode = true" />
      <SaveIcon v-if="isEditMode" @click="handleSave" />
      <DeleteIcon @click="store.deleteOne(id)" />
    </div>
  </div>
</template>
