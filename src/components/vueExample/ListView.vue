<template>
  <div
    class="w-[100%] h-[100%] flex flex-col justify-center items-center gap-4 relative"
  >
    <div class="flex gap-4 absolute top-[20px] justify-center items-center">
      <Button @click="insert">insert at random index</Button>
      <Button @click="reset">reset</Button>
      <Button @click="shuffle">shuffle</Button>
    </div>
    <div
      class="w-[100%] max-h-[600px] absolute top-[100px] flex justify-center overflow-auto"
    >
      <TransitionGroup
        name="fade"
        tag="ul"
        class="w-[90%] h-[100%] p-6 items-center justify-center flex flex-col gap-3 overflow-y-hidden overflow-x-hidden"
      >
        <div
          v-for="item in items"
          :key="item"
          class="border-2 w-[80%] border-dashed border-gray-300 p-4 cursor-pointer flex text-4xl justify-between"
        >
          {{ item }}
          <Button class="text-xl" @click="remove(item)">x</Button>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash-es";
import Button from "../ui/button/Button.vue";
import { ref } from "vue";

const getInitialItems = () => [1, 2, 3, 4];

const items = ref<number[]>(getInitialItems());

let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

function reset() {
  items.value = getInitialItems();
  id = items.value.length + 1;
}

function shuffle() {
  items.value = _.shuffle(items.value);
}

function remove(item: number) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1);
  }
}
</script>

<style scoped>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(10px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
