<template>
  <div>
    <h1
      class="text-center flex justify-center items-center py-4 border-b-2 border-gray-500 font-bold title"
    >
      vue 官方的例子
    </h1>
    <div class="p-2">
      <span class="mb-4 px-4 text-lg font-semibold tracking-tight">Basic</span>
      <div>
        <Button
          v-for="item of basicData"
          variant="link"
          class="w-[100%] h-[30px]"
          :class="activeMenuCss(item)"
          @click="handleClick(item)"
          :key="item.name"
          >{{ item.name }}</Button
        >
      </div>
    </div>
    <div class="border-t-2 border-gray-500 p-2">
      <span class="mb-4 px-4 text-lg font-semibold tracking-tight"
        >Practical</span
      >
      <Button
        v-for="item of practicalData"
        variant="link"
        class="w-[100%] h-[30px]"
        :class="activeMenuCss(item)"
        @click="handleClick(item)"
        :key="item.name"
        >{{ item.name }}</Button
      >
    </div>
    <div class="border-t-2 border-gray-500 p-2">
      <span class="mb-4 px-4 text-lg font-semibold tracking-tight"
        >7 GUIs
      </span>
      <Button
        v-for="item of guiData"
        variant="link"
        class="w-[100%] h-[30px]"
        :class="activeMenuCss(item)"
        @click="handleClick(item)"
        :key="item.name"
        >{{ item.name }}</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

import { useRoute, useRouter } from "vue-router";

type Category = "Basic" | "Practical" | "7 GUIs";

interface Menu {
  name: string;
  path: string;
  type: Category;
}

const data: Menu[] = [
  { name: "Hello World", path: "/basic-1", type: "Basic" },
  { name: "Handling User Input", path: "/basic-2", type: "Basic" },
  { name: "Attribute Bindings", path: "/basic-3", type: "Basic" },
  { name: "Conditionals and Loops", path: "/basic-4", type: "Basic" },
  { name: "Form Bindings", path: "/basic-5", type: "Basic" },
  { name: "Simple Component", path: "/basic-6", type: "Basic" },
  { name: "Markdown Editor", path: "/practical-1", type: "Practical" },
  { name: "Fetching Data", path: "/practical-2", type: "Practical" },
  {
    name: "Grid with Sort and Filter",
    path: "/practical-3",
    type: "Practical",
  },
  { name: "Tree View", path: "/practical-4", type: "Practical" },
  { name: "SVG Graph", path: "/practical-5", type: "Practical" },
  { name: "Modal with Transitions", path: "/practical-6", type: "Practical" },
  { name: "List with Transitions", path: "/practical-7", type: "Practical" },
  { name: "TodoMVC", path: "/practical-8", type: "Practical" },
  { name: "Counter", path: "/gui-1", type: "7 GUIs" },
  { name: "Temperature Converter", path: "/gui-2", type: "7 GUIs" },
  { name: "Flight Booker", path: "/gui-3", type: "7 GUIs" },
  { name: "Timer", path: "/gui-4", type: "7 GUIs" },
  { name: "CRUD", path: "/gui-5", type: "7 GUIs" },
  { name: "Circle Drawer", path: "/gui-6", type: "7 GUIs" },
  { name: "Cells", path: "/gui-7", type: "7 GUIs" },
];

const basicData = data.filter((item) => item.type === "Basic");
const practicalData = data.filter((item) => item.type === "Practical");
const guiData = data.filter((item) => item.type === "7 GUIs");

const router = useRouter();
const route = useRoute();
const handleClick = (menu: Menu) => {
  router.push(menu.path);
};

console.log(route.path);

const activeMenuCss = (menu: Menu) => {
  if (menu.path === route.path) {
    return "bg-gray-200 text-gray-900";
  }
};
</script>

<style scoped>
.title {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
}
</style>
