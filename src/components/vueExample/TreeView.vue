<template>
  <div class="p-4 overflow-y-auto w-[100%] h-[100%] flex float-start">
    <ul>
      <TreeItem class="item" :model="treeData"></TreeItem>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import TreeItem from "./TreeItem.vue";

interface TreeData {
  name: string;
  children?: TreeData[];
  level: number;
}

const treeData = ref<TreeData>({
  name: "My Tree",
  level: 0,
  children: [
    { name: "hello", level: 1 },
    { name: "world", level: 1 },
    {
      name: "child folder",
      level: 1,
      children: [
        {
          name: "child folder",
          level: 2,
          children: [
            { name: "hello", level: 3 },
            { name: "world", level: 3 },
          ],
        },
        { name: "hello", level: 2 },
        { name: "world", level: 2 },
        {
          name: "child folder",
          level: 2,
          children: [
            { name: "hello", level: 3 },
            { name: "world", level: 3 },
          ],
        },
      ],
    },
  ],
});
</script>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}
</style>
