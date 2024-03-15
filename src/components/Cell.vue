<template>
  <div @click="editing = true" :title="cells[c][r]" class="cell">
    <input
      v-if="editing"
      :value="cells[c][r]"
      class="w-[100%]"
      @change="update"
      @blur="update"
      @vue:mounted="({ el }) => el.focus()"
    />
    <span v-else>{{ evalCell(cells[c][r]) }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { cells, evalCell } from "../util/store";

interface Cell {
  c: number;
  r: number;
}
const props = defineProps<Cell>();

const editing = ref(false);

function update(e: any) {
  editing.value = false;
  cells[props.c][props.r] = e.target.value;
}
</script>

<style scoped>
.cell,
.cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
}
</style>
