<template>
  <div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
    <div class="text-4xl mb-8 font-semibold translate-y-[-50px]">
      Simple CRUD
    </div>
    <div class="w-[70%] flex justify-start">
      <input
        type="text"
        class="border-2 w-[40%] mb-4 indent-1"
        placeholder="Filter prefix"
        v-model="prefix"
      />
    </div>
    <div class="w-[70%] flex gap-4">
      <select size="5" class="h-[100px] border-2 w-[40%]" v-model="selected">
        <option v-for="name in filteredNames" :key="name">
          {{ name }}
        </option>
      </select>
      <div class="flex-1 flex flex-col gap-4 items-center justify-center">
        <div class="flex flex-start w-[100%]">
          <label class="flex justify-evenly gap-2 w-[100%]">
            <span class="w-[50px]"> Name: </span>
            <input
              type="text"
              class="border-2 w-[140px] indent-1"
              v-model="first"
            />
          </label>
        </div>
        <div class="flex flex-start w-[100%]">
          <label class="flex justify-evenly gap-2 w-[100%]">
            <span class="w-[50px]"> Surname: </span>
            <input
              type="text"
              class="border-2 w-[140px] indent-1"
              v-model="last"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="w-[70%] flex justify-start mt-4 gap-4">
      <button
        class="w-[80px] bg-purple-600 text-white p-2 rounded-md active:scale-95"
        @click="create"
      >
        Create
      </button>
      <button
        class="w-[80px] bg-purple-600 text-white p-2 rounded-md active:scale-95"
        @click="update"
      >
        Update
      </button>
      <button
        class="w-[80px] bg-purple-600 text-white p-2 rounded-md active:scale-95"
        @click="del"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
const names = reactive<string[]>([
  "Emil, Hans",
  "Mustermann, Max",
  "Tisch, Roman",
]);
const prefix = ref<string>("");
const selected = ref<string>("");
const first = ref<string>("");
const last = ref<string>("");
const filteredNames = computed(() => {
  return names.filter((name) => {
    return name
      .toLocaleLowerCase()
      .startsWith(prefix.value.toLocaleLowerCase());
  });
});

watch(selected, (newValue) => {
  const [lastName, firstName] = newValue.split(", ");
  first.value = firstName;
  last.value = lastName;
});

function create() {
  if (!hasValidInput()) return;
  const fullName = `${last.value}, ${first.value}`;
  if (names.includes(fullName)) return;
  names.push(fullName);
  first.value = "";
  last.value = "";
}

function hasValidInput() {
  return first.value.trim() && last.value.trim();
}

function update() {
  if (!hasValidInput()) return;
  const i = names.indexOf(selected.value);
  names[i] = `${last.value}, ${first.value}`;
  selected.value = names[i];
}

function del() {
  if (!selected.value) return;
  const i = names.indexOf(selected.value);
  names.splice(i, 1);
  selected.value = "";
  first.value = "";
  last.value = "";
}
</script>

<style scoped></style>
