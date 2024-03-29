import { defineStore } from "pinia";
import Task from "../models/Task";

export const useTasksStore = defineStore("tasks", {
  state: (): { tasks: Task[] } => ({
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
      this.tasks = [task, ...this.tasks];
    },
    deleteOne(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleComplete(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (!task) return;
      task.isCompleted = !task.isCompleted;
    },
    editOne(id: number, title: string, desc: string) {
      const task = this.tasks.find((task) => task.id === id);
      if (!task) return;
      task.title = title;
      task.desc = desc;
    },
  },
  getters: {
    getActive({ tasks }) {
      return tasks.filter((task) => !task.isCompleted);
    },
  },
  persist: true,
});
