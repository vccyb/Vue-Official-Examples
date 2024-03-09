<template>
  <div class="flex justify-center items-center p-6 flex-col w-[100%] h-[100%]">
    <div class="text-[120px]">{{ (elapsed / 1000).toFixed(1) }}s</div>
    <div class="text-3xl flex w-[50%] justify-evenly items-center font-bold">
      <span class="w-[200px]">Elapsed Time:</span>
      <Progress
        class="flex-1 max-w-[300px] my-progress h-[20px]"
        v-model="progressRate"
      ></Progress>
    </div>
    <div class="text-3xl flex w-[50%] justify-evenly font-bold">
      <span class="w-[200px]">
        Duration:
        <span class="font-medium text-base">
          {{ (duration / 1000).toFixed(1) }}s
        </span>
      </span>
      <InputVue
        type="range"
        class="flex-1 max-w-[300px] p-0"
        v-model="duration"
        min="1"
        max="30000"
      ></InputVue>
    </div>
    <div
      class="w-[50%] flex justify-center font-semibold text-2xl active:scale-95 transition-all duration-300 hover:cursor-pointer"
    >
      <ButtonVue @click="reset">Reset</ButtonVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import ButtonVue from "../ui/button/Button.vue";
import InputVue from "../ui/input/Input.vue";
import { Progress } from "../ui/progress";

const duration = ref<number>(15 * 1000);
const elapsed = ref<number>(0);

let lastTime: DOMHighResTimeStamp;
let handle: number;

const update = () => {
  console.log("elapsed", elapsed.value);
  console.log("lastTime", lastTime);
  elapsed.value = performance.now() - lastTime;
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle);
  } else {
    handle = requestAnimationFrame(update);
  }
};

const reset = () => {
  elapsed.value = 0;
  lastTime = performance.now();
  update();
};

// const progressRate = computed(() => {
//   Math.min(elapsed.value / duration.value, 1);
// });

const progressRate = computed(() => {
  return Math.min(elapsed.value / duration.value, 1) * 100;
});

reset();

onUnmounted(() => {
  cancelAnimationFrame(handle);
});
</script>

<style scoped>
.my-progress :deep(.bg-primary) {
  background-color: #39b54a;
}
</style>
