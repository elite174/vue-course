<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<style scoped>
.content {
  height: 100%;
  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
}
</style>
