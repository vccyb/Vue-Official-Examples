<template>
  <div
    class="flex justify-center flex-col items-center h-[100%] w-[100%] relative"
  >
    <h2 class="text-6xl mb-4 font-bold">This is Father Component</h2>
    <div class="flex flex-col">
      <TodoItem v-for="item of groceryList" :todo="item" :key="item.id" />
    </div>
    <div
      class="text-3xl font-semibold absolute right-28 bottom-12 hover:scale-110 transition-all cursor-pointer hover:underline"
    >
      Count: {{ groceryList.length }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";

interface Todo {
  id: number;
  text: string;
}

const groceryList = ref<Todo[]>([
  { id: 0, text: "Vegetables" },
  { id: 1, text: "Cheese" },
  { id: 2, text: "Whatever else humans are supposed to eat" },
]);
</script>

<style scoped></style>
