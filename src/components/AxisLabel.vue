<template>
  <text :x="point.x" :y="point.y">{{ stat.label }}</text>
</template>

<script setup lang="ts">
import { Ref, computed } from "vue";
import { valueToPoint } from "@/util/svgUtil";

type Stats = {
  label: string;
  value: number;
};

const props = defineProps<{
  stat: Stats;
  index: number;
  total: number;
}>();

interface Point {
  x: number;
  y: number;
}

const point: Ref<Point> = computed(() => {
  return valueToPoint(+props.stat.value + 10, props.index, props.total);
});
</script>

<style scoped></style>
