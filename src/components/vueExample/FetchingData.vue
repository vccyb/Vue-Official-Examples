<template>
  <div class="w-[100%] h-[100%] flex flex-col justify-center items-center">
    <h2 class="text-4xl font-bold flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-vue"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16.5 4l-4.5 8l-4.5 -8" />
        <path d="M3 4l9 16l9 -16" />
      </svg>
      <span class="pl-2"> Latest Vue Core Commits </span>
    </h2>
    <div class="flex pt-4 w-[50%] justify-around">
      <Select v-model="currentBranch">
        <SelectTrigger class="w-[150px]">
          <SelectValue placeholder="Please choose branch" />
        </SelectTrigger>
        <SelectContent class="w-[150px]">
          <SelectItem value="main"> main </SelectItem>
          <SelectItem value="v2-compat"> v2-compat </SelectItem>
        </SelectContent>
      </Select>
      <span
        class="text-xl p-2 flex justify-center items-center hover:underline hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out"
      >
        Current branch: vuejs/vue@{{ currentBranch }}</span
      >
    </div>
    <div class="pt-4 w-[80%]">
      <ul class="">
        <div v-if="commits" class="flex flex-col gap-4">
          <li
            class="min-h-[80px] p-4 border-dotted border-2 border-gray-300 flex justify-center items-center hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
            v-for="{ html_url, sha, author, commit } in commits"
          >
            <div class="flex-1">
              <a
                class="text-[#42b883] text-lg font-bold hover:underline"
                :href="html_url"
                target="_blank"
                >{{ sha.slice(0, 7) }}</a
              >
              - <span class="message">{{ truncate(commit.message) }}</span>
            </div>
            <div class="w-[200px]">
              by
              <span class="text-[#42b883] text-lg font-bold hover:underline">
                <a :href="author.html_url" target="_blank">{{
                  commit.author.name
                }}</a>
              </span>
              at <span class="date">{{ formatDate(commit.author.date) }}</span>
            </div>
          </li>
        </div>
        <div
          v-else
          class="w-[100%] h-[100%] flex justify-center items-center text-6xl font-bold text-gray-800"
        >
          <span> Loading </span>
          <div class="loading ml-2">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;
const branches = ["main", "v2-compat"] as const;

type Branch = (typeof branches)[number];

const currentBranch = ref<Branch>(branches[0]);
const commits = ref<any>(null);

watchEffect(async () => {
  const url = `${API_URL}${currentBranch.value}`;
  setTimeout(async () => {
    commits.value = await (await fetch(url)).json();
  }, 2000);
});

function truncate(v: any) {
  const newline = v.indexOf("\n");
  return newline > 0 ? v.slice(0, newline) : v;
}

function formatDate(v: any) {
  return v.replace(/T|Z/g, " ");
}
</script>

<style scoped>
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 54px;
  height: 18px;
}

.loading > div {
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 100%;
  animation: ball-beat 0.7s -0.15s infinite linear;
}

.loading > div:nth-child(2n-1) {
  animation-delay: -0.5s;
}

@keyframes ball-beat {
  50% {
    opacity: 0.2;
    transform: scale(0.75);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
