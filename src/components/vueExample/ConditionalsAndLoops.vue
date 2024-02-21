<template>
  <div class="flex flex-col gap-4 justify-center items-center h-[100%]">
    <div class="flex gap-6 mt-[200px] h-[60px]">
      <Button @click="show = !show">Toggle List</Button>
      <Button @click="list.push(list.length + 1)">Push Number</Button>
      <Button @click="insert()">Random Insert Number</Button>
      <Button @click="list.pop()">Pop Number</Button>
      <Button @click="list.reverse()">Reverse List</Button>
    </div>
    <div
      class="flex-1 text-2xl text-center w-[100%] cursor-pointer overflow-y-auto overflow-x-hidden"
    >
      <TransitionGroup name="list" tag="ul" v-if="show && list.length">
        <li v-for="item of list" :key="item">
          {{ item }}
        </li>
      </TransitionGroup>
      <p v-else-if="list.length">List is not empty, but hidden.</p>
      <p v-else>List is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref } from "vue";

const show = ref<boolean>(true);
const list = ref<number[]>([1, 2, 3]);

const insert = () => {
  const index = Math.floor(Math.random() * list.value.length);
  list.value.splice(index, 0, list.value.length + 1);
};
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
/* .list-leave-active {
  position: absolute;
} */
</style>
