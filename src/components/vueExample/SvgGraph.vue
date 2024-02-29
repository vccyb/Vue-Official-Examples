<template>
  <div>
    <svg width="200" height="200">
      <PolyGraph :stats="stats" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import PolyGraph from "../PolyGraph.vue";
import { ref } from "vue";

type Stats = {
  label: string;
  value: number;
};

const stats = ref<Stats[]>([
  { label: "A", value: 100 },
  { label: "B", value: 100 },
  { label: "C", value: 100 },
  { label: "D", value: 100 },
  { label: "E", value: 100 },
  { label: "F", value: 100 },
]);
</script>

<style scoped></style>
