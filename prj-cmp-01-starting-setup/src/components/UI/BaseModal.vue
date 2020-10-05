<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;

  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
}

.modal-content {
  background: white;
}
</style>
