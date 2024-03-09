<template>
  <div
    class="w-[100%] h-[100%] flex justify-center items-center flex-col gap-2"
  >
    <div class="text-4xl font-semibold flex justify-center items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg "
        class="icon icon-tabler icon-tabler-bookmarks text-2xl scale-125"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
        <path d="M11 3h5a3 3 0 0 1 3 3v11" />
      </svg>
      <div class="">Please book your ticket</div>
    </div>
    <div class="flex gap-4 w-[50%] flex-start">
      <Select v-model="flightType">
        <SelectTrigger class="w-[200px]">
          <SelectValue placeholder="Please choose flightType" />
        </SelectTrigger>
        <SelectContent class="w-[200px]">
          <SelectItem value="one-way flight"> One-way Flight </SelectItem>
          <SelectItem value="return flight"> Return Flight </SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div class="flex justify-around items-center gap-12">
      <Calendar
        v-if="flightType === 'one-way flight'"
        v-model="date"
        class="border-2 border-gray-300 rounded-md"
      ></Calendar>
      <Calendar
        v-if="flightType === 'return flight'"
        v-model.range="dateRange"
        class="border-2 border-gray-300 rounded-md"
        :columns="2"
      ></Calendar>
      <div>
        <Button
          class="w-[200px] active:scale-90 transition-all ease-in-out duration-300"
          >Book</Button
        >
      </div>
    </div>
    <div
      class="text-2xl rounded-md p-4 font-bold text-center"
      v-if="flightType === 'return flight'"
    >
      You have booked a
      <span class="underline cursor-pointer"> {{ flightType }}</span>
      leaving on
      <span class="underline cursor-pointer">
        {{ dateRange.start?.toLocaleDateString().split("/").join("-") }}.</span
      >
      <span
        >&nbsp;&nbsp;And returning on
        <span class="underline cursor-pointer">
          {{ dateRange.end?.toLocaleDateString().split("/").join("-") }}</span
        ></span
      >
    </div>
    <div
      class="text-2xl rounded-md p-4 font-bold text-center"
      v-if="flightType === 'one-way flight'"
    >
      You have booked a
      <span class="underline cursor-pointer"> {{ flightType }}</span>
      leaving on
      <span class="underline cursor-pointer">
        {{ date?.toLocaleDateString().split("/").join("-") }}.</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { ref } from "vue";

type FlightType = "one-way flight" | "return flight";
const flightType = ref<FlightType>("one-way flight");

const date = ref<Date>();
const dateRange = ref({
  start: new Date(2024, 0, 20),
  end: new Date(2024, 2, 20),
});
</script>

<style scoped></style>
