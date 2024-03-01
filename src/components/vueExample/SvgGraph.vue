<template>
  <div class="w-[100%] h-[100%] flex justify-center items-center">
    <div
      class="w-[60%] h-[100%] flex flex-col relative justify-center items-center"
    >
      <svg class="scale-150 absolute top-20 left-20" width="200" height="200">
        <PolyGraph :stats="stats" />
      </svg>
      <div
        class="absolute right-16 bottom-20 flex flex-col gap-4 max-h-[300px] overflow-y-auto"
      >
        <div
          class="flex gap-8 flex-row flex-start min-w-[320px]"
          v-for="stat in stats"
        >
          <label>{{ stat.label }}</label>
          <input type="range" v-model="stat.value" min="0" max="100" />
          <span>{{ stat.value }}</span>
          <button
            class="bg-violet-500 p-1 rounded flex text-white h-6 w-8 justify-center items-center"
            @click="remove(stat)"
          >
            x
          </button>
        </div>
      </div>
      <form id="add" class="absolute right-16 bottom-6">
        <input
          class="border-2 mx-4 border-violet-500 rounded outline-none pl-2"
          type="text"
          name="newlabel"
          v-model="newLabel"
        />
        <button class="bg-violet-500 p-1 rounded-md text-white" @click="add">
          Add a Stat
        </button>
      </form>
    </div>
    <div
      class="w-[40%] h-[100%] flex flex-col justify-center items-start m-2 border-solid border-2 border-gray-300 rounded-lg p-4"
    >
      <pre class="flex flex-row w-[100%] h-[100%] overflow-y-auto">{{
        stats
      }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Label } from "radix-vue";
import PolyGraph from "../PolyGraph.vue";
import { ref } from "vue";

type Stats = {
  label: string;
  value: number;
};
const newLabel = ref<string>("");
const stats = ref<Stats[]>([
  { label: "A", value: 100 },
  { label: "B", value: 100 },
  { label: "C", value: 100 },
  { label: "D", value: 100 },
  { label: "E", value: 100 },
  { label: "F", value: 100 },
]);

function remove(stat: Stats) {
  if (stats.value.length > 3) {
    stats.value.splice(stats.value.indexOf(stat), 1);
  } else {
    alert("You need at least 3 stats");
  }
}

function add(e: Event) {
  e.preventDefault();
  if (!newLabel.value) return;
  stats.value.push({
    label: newLabel.value,
    value: 100,
  });
  newLabel.value = "";
}
</script>

<style>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}

text {
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}
</style>
