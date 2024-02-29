<template>
  <div>
    <g>
      <polygon :points="points"></polygon>
      <circle cx="100" cy="100" r="80"></circle>
      <axis-label
        v-for="(stat, index) in stats"
        :stat="stat"
        :index="index"
        :total="stat.length"
      ></axis-label>
    </g>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AxisLabel from "./AxisLabel.vue";

import { valueToPoint } from "../util/svgUtil";

type Stats = {
  label: string;
  value: number;
};

const props = defineProps<{
  stats: Stats[];
}>();

const points = computed(() => {
  const total = props.stats.length;
  return props.stats
    .map((stat, i) => {
      const { x, y } = valueToPoint(stat.value, i, total);
      return `${x},${y}`;
    })
    .join(" ");
});
</script>

<style scoped></style>
