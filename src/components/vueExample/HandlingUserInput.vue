<template>
  <div
    class="flex flex-col gap-4 justify-center items-center h-[100%] w-[100%]"
  >
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {{ message }}
    </h1>
    <div class="flex gap-4">
      <Button @click="reverseMessage">Reverse Message</Button>
      <Button @click="message += '!'">Append "!"</Button>

      <a href="https://vuejs.org" @click.prevent="notify">
        <Button variant="link"> A link with e.preventDefault() </Button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const message = ref<string>("Hello Vue3!");

function reverseMessage() {
  message.value = message.value.split("").reverse().join("");
}

function notify() {
  alert("navigation was prevented");
}
</script>

<style lang="scss" scoped></style>
