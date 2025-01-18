import { defineStore } from "pinia";

export const userStore = defineStore("user", () => {
  const user = ref({
    name: "John Doe",
    email: "user@example.com",
  });
  
  return { user }
});
