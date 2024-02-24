<template>
  <div class="flex justify-center items-center h-[100%] w-[100%]">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out hover:text-[#42b883]"
    >
      {{ message }}
    </h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const message = ref<string>("Hello World!");
</script>

<style lang="scss" scoped></style>
