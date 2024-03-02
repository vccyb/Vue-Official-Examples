<template>
  <div class="w-[100%] h-[100%] flex justify-center items-center gap-4">
    <Button @click="showModal = true">Show Modal</Button>
    <Button @click="showModal2">Show Modal with dialog html tag</Button>
    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Custom header</h3>
        </template>
      </Modal>
    </Teleport>

    <Teleport to="body">
      <dialog ref="dialog" class="dialog rounded-md">
        <button
          autofocus
          @click="closeModal2"
          class="bg-violet-500 text-white p-1 rounded"
        >
          Close
        </button>
        <p class="text-2xl">这是一个原生的Dialog标签</p>
      </dialog>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../ui/button/Button.vue";
import Modal from "../Modal.vue";

const showModal = ref<boolean>(false);

const dialog = ref<HTMLDialogElement>();

function showModal2() {
  (dialog.value as HTMLDialogElement).showModal();
}

function closeModal2() {
  (dialog.value as HTMLDialogElement).close();
}
</script>

<style scoped>
.dialog {
  width: 30%;
  min-height: 300px;
  padding: 10px;
}
</style>
