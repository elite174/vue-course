<template>
  <div class="layout">
    <slot name="header"> </slot>
    <slot> </slot>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;

  height: 100vh;
}
</style>
