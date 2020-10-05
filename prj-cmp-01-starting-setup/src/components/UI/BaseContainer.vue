<template>
  <div class="container" :class="$props.class">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  width: 100%;

  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
