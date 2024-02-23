<template>
  <div
    class="border-2 p-4 mt-4 border-gray-800 hover:scale-105 hover:bg-zinc-400 cursor-pointer transition-all"
  >
    <h2 class="text-gray-800">This is Child Component</h2>
    <div class="text-2xl">{{ `${todo.id} - ${todo.text}` }}</div>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  id: number;
  text: string;
}
defineProps<{
  todo: Todo;
}>();
</script>

<style scoped></style>
