<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>default footer</div>
            <div><Button @click="$emit('close')">OK</Button></div>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Button from "./ui/button/Button.vue";
const props = defineProps<{
  show: boolean;
}>();
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  border-radius: 6px;
}

.modal-header {
  padding: 10px;
  min-height: 30px;
}

:deep(.modal-header h3) {
  color: #42b983;
  font-size: 16px;
  font-weight: 600;
}

.modal-body {
  padding: 10px;
  min-height: 280px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
