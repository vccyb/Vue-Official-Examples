<template>
  <div
    class="container flex justify-center items-center w-[100%] h-[100%] flex-col gap-2"
  >
    <Button
      @click="count++"
      variant="secondary"
      class="w-[200px] h-[60px] text-2xl active:scale-90 transition-all duration-300 ease-in-out outline-none shadow-xl"
      >Count</Button
    >
    <div class="text-[200px] font-semibold">
      {{ count }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../ui/button/Button.vue";
import { ref } from "vue";

const count = ref(0);
</script>

<style scoped>
.container {
  background-color: #8e44ad;
  color: #fff;
  font-family: "Roboto Mono", sans-serif;
}
</style>
