<template>
  <div class="mt-4">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center"
    >
      Vue Official Example
      <span class="text-xl font-light">
        <a
          href="https://github.com/vccyb"
          target="_blank"
          class="hover:underline hover:text-[#42b883] hover:scale-115 transition-all duration-300 ease-in-out"
        >
          author: vccyb</a
        ></span
      >
    </h1>

    <div
      class="container p-0 mt-[50px] border-2 border-gray-500 w-[90vw] h-[80vh] flex min-w-[1200px] min-h-[600px] overflow-hidden"
    >
      <div
        class="slideBar h-[100%] w-[20%] border-r-2 border-gray-500 min-w-[200px] overflow-y-auto"
      >
        <SlideBar />
      </div>
      <div class="content flex-1">
        <Content />
      </div>
    </div>
  </div>
  <Toaster />
</template>

<script setup lang="ts">
import SlideBar from "./components/SlideBar.vue";
import Content from "./components/Content.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<style lang="scss" scoped></style>
