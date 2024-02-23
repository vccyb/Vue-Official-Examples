<template>
  <div
    class="flex flex-col gap-4 justify-center items-center h-[100%] w-[100%]"
  >
    <p class="text-2xl cursor-pointer hover:underline">
      <span :title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound
        title!
      </span>
    </p>
    <p
      class="text-2xl mt-2 cursor-pointer hover:underline"
      @click="toggleRed"
      :class="{ red: isRed }"
    >
      🚀 This should be red... but click me to toggle it.
    </p>
    <p
      class="text-2xl mt-2 cursor-pointer hover:underline"
      @click="toggleColor"
      :style="{ color }"
    >
      🧑‍🚀 This should be green, and should toggle between green and blue on
      click.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref<string>("Hello Vue3!");

const isRed = ref<boolean>(false);

const color = ref<string>("green");

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value === "green" ? "blue" : "green";
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
