<template>
  <div class="w-[100%] h-[100%] flex p-6 gap-6">
    <div class="flex-1 h-[100%]">
      <Card class="h-[100%]">
        <CardHeader>
          <CardTitle>MarkDown Input</CardTitle>
        </CardHeader>
        <CardContent class="h-[85%]">
          <textarea
            :value="input"
            @input="update"
            class="w-[100%] h-[100%] outline-none resize-none border-dashed border-2 p-4"
          ></textarea>
        </CardContent>
      </Card>
    </div>
    <div class="flex-1">
      <Card class="h-[100%]">
        <CardHeader>
          <CardTitle>MarkDown Render</CardTitle>
        </CardHeader>
        <CardContent class="h-[85%]">
          <div
            v-html="output"
            class="w-[100%] h-[100%] overflow-y-auto outline-none markdown-body p-4"
          ></div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import "github-markdown-css/github-markdown.css";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { marked } from "marked";
import { debounce } from "lodash-es";
import { ref, computed } from "vue";

const input = ref<string>("# hello");
const output = computed(() => marked(input.value));
const update = debounce((e: any) => {
  input.value = e.target.value;
}, 100);
</script>

<style scoped></style>
