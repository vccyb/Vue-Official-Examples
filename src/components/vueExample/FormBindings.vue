
<template>
  <div class="parent flex flex-col gap-4 justify-center items-center h-[100%] w-[100%] p-4" >
    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-b-0 border-2 border-indigo-500">  
      <h2>Text Input</h2>
      <input v-model="text" class="border-2"> {{ text }}
      </div>

    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-b-0 border-y-2 border-indigo-500">  
      <h2>Checkbox</h2>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">Checked: {{ checked }}</label>
    </div>
    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-b-0 border-2 border-indigo-500">  
      <h2>Multi Checkbox</h2>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <p>Checked names: <pre>{{ checkedNames }}</pre></p>
    </div>
    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-2 border-indigo-500">  
      <h2>Radio</h2>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-y-2 border-indigo-500">  
      <h2>Select</h2>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span></div>
    <div class="flex justify-center items-center flex-col w-[100%] h-[100%] border-dashed border-2 border-indigo-500">  
      <h2>Multi Select</h2>
      <select v-model="multiSelected" multiple style="width:100px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ multiSelected }}</span>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const text = ref<string>('Edit me')
const checked = ref<boolean>(true)
const checkedNames = ref<string[]>(['Jack'])
const picked = ref<string>('One')
const selected = ref<string>('A')
const multiSelected = ref<string[]>(['A'])
</script>



<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>