<template>
  <div class="w-[100%] h-[100%] relative" ref="container">
    <svg class="w-[100%] h-[100%] bg-[#E6E6FA]" @click="onClick">
      <foreignObject x="0" y="40%" width="100%" height="200">
        <p class="tip">
          Click on the canvas to draw a circle. Click on a circle to select it.
          Right-click on the canvas to adjust the radius of the selected circle.
        </p>
      </foreignObject>
      <circle
        v-for="circle in circles"
        :cx="circle.cx"
        :cy="circle.cy"
        :r="circle.r"
        :fill="circle === selectedCircle ? '#86D486' : '#E6F7E6'"
        @click="selectedCircle = circle"
        @contextmenu.prevent="adjust(circle)"
      ></circle>
    </svg>
    <div class="absolute top-2 w-[100%] flex justify-center gap-4">
      <button
        class="w-[80px] bg-purple-600 text-white p-2 rounded-md active:scale-95"
        @click="undo"
        :disabled="index <= 0"
      >
        Undo
      </button>
      <button
        @click="redo"
        :disabled="index >= history.length - 1"
        class="w-[80px] bg-purple-600 text-white p-2 rounded-md active:scale-95"
      >
        Redo
      </button>
    </div>
    <div class="dialog" v-if="adjusting" @click.stop>
      <p>
        Adjust radius of circle at ({{ selectedCircle.cx }},
        {{ selectedCircle.cy }})
      </p>
      <input type="range" v-model="selectedCircle.r" min="1" max="300" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowReactive, toRaw } from "vue";
const container = ref<HTMLDivElement | null>(null);
interface Circle {
  cx: number;
  cy: number;
  r: number;
}
const index = ref(0);
const circles = ref<Circle[]>([]);
const history = shallowReactive<any>([[]]);
const selectedCircle = ref<any>();
const adjusting = ref(false);
//@ts-ignore
function onClick({ clientX: x, clientY: y }) {
  if (adjusting.value) {
    adjusting.value = false;
    selectedCircle.value = null;
    push();
    return;
  }
  let baseL = container.value!.offsetLeft;
  let baseT = container.value!.offsetTop;
  selectedCircle.value = [...circles.value].reverse().find(({ cx, cy, r }) => {
    const dx = cx - (x - baseL);
    const dy = cy - (y - baseT);
    return Math.sqrt(dx * dx + dy * dy) <= r;
  });
  if (!selectedCircle.value) {
    circles.value.push({
      cx: x - baseL,
      cy: y - baseT,
      r: 50,
    });
    push();
  }
}

function adjust(circle: Circle) {
  selectedCircle.value = circle;
  adjusting.value = true;
}

function push() {
  history.length = ++index.value;
  history.push(clone(circles.value));
  console.log(toRaw(history));
}

function undo() {
  circles.value = clone(history[--index.value]);
}

function redo() {
  circles.value = clone(history[++index.value]);
}

function clone(circles: Circle[]) {
  return circles.map((c) => ({ ...c }));
}
</script>

<style scoped>
.tip {
  text-align: center;
  padding: 0 50px;
  color: #bbb;
}

.dialog {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 350px;
  height: 100px;
  padding: 5px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.dialog input {
  display: block;
  width: 200px;
  margin: 0px auto;
}
</style>
