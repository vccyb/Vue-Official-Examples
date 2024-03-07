<template>
  <div class="w-[100%] h-[100%] flex flex-row justify-center items-center">
    <div
      class="w-[40%] h-[80%] border-2 border-solid border-sky-400 p-6 shadow-lg rounded-lg bg-white"
    >
      <div class="text-4xl font-semibold text-sky-500 text-center">Celsius</div>
      <input
        class="border-2 border-solid border-sky-400 mt-[100px] w-[100%] h-[60px] rounded-md  indent-2 text-2xl"
        :value="c"
        @input="setC"
      ></input>
      <div class="mt-[20px] text-center text-3xl text-sky-500">{{ c }}</div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-right-left scale-[200%] mx-[50px]"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 7l-18 0" />
      <path d="M18 10l3 -3l-3 -3" />
      <path d="M6 20l-3 -3l3 -3" />
      <path d="M3 17l18 0" />
    </svg>
    <div
      class="w-[40%] h-[80%] border-2 border-solid border-orange-400 p-6 shadow-lg rounded-lg bg-white"
    >
      <div class="text-4xl font-semibold text-orange-400 text-center">
        Fahrenheit
      </div>
      <input
        class="mt-[100px] border-2 border-solid border-orange-400 h-[60px] text-2xl w-[100%] rounded-md  indent-2"
        :value="f"
        @input="setF"
      ></input>
      <div class="mt-[20px] text-center text-3xl text-orange-400">
        {{ f }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const c = ref<number>(0);
const f = ref<number>(32);

function setC(e: Event) {
  let v = parseInt((<HTMLInputElement>(e.target)).value)
  c.value = v;
  f.value = v * (9 / 5) + 32;
}

function setF(e: Event) {
  let v = parseInt((<HTMLInputElement>(e.target)).value)
  f.value = v;
  c.value = (v - 32) * (5 / 9);
}
</script>

<style scoped></style>
