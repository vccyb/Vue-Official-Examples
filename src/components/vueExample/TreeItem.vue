<template>
  <div>
    <li class="flex flex-col gap-1 text-xl font-mono relative">
      <div
        @click="toggle"
        @dblclick="changeType"
        class="flex gap-2 flex-start items-center"
      >
        <svg
          v-if="isFolder"
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-folder"
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
          <path
            d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-file"
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
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path
            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
          />
        </svg>
        {{ model.name }}
        <span v-if="isFolder"> [{{ isOpen ? "-" : "+" }}]</span>
      </div>
      <ul class="ml-8" v-show="isOpen" v-if="isFolder">
        <TreeItem
          class="item"
          v-for="model in childArr"
          :model="model"
        ></TreeItem>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  model: TreeData;
}

interface TreeData {
  name: string;
  children?: TreeData[];
  level: number;
}

const props = defineProps<Props>();

const isOpen = ref<boolean>(false);
const isFolder = computed(() => {
  return props.model.children && props.model.children.length;
});

// 打开或者关闭目录
function toggle() {
  isOpen.value = !isOpen.value;
}

// 将一个文件 转换为目录
function changeType() {
  if (!isFolder.value) {
    props.model.children = [];
    addChild();
    isOpen.value = true;
  }
}

const childArr = computed(() => {
  if (props.model.children && props.model.children.length) {
    return props.model.children;
  }
  return [];
});

function addChild() {
  props.model.children &&
    props.model.children.push({
      name: "new stuff",
      level: props.model.level + 1,
    });
}
</script>

<style scoped>
.line {
  display: flex;
  width: 2px;
  background-color: grey;
  transform: translateX(6px) translateY(30px);
  position: absolute;
  left: 0;
  top: 0;
}
</style>
