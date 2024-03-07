import { defineStore } from "pinia";
import Task from "../models/Task";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      {
        id: 0,
        title: "Тестовая задача",
        desc: "Описание тестовой задачи",
        isCompleted: false,
      },
    ],
  }),
  actions: {
    addOne(task: Task) {
      this.tasks.push(task);
    },
  },
});
