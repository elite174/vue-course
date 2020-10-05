<template>
  <button class="button" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      required: false,
      type: Boolean
    }
  },
  computed: {
    classes() {
      return {
        'button-active': Boolean(this.$props.active),
        [this.$props.class]: true
      };
    }
  }
};
</script>

<style scoped>
.button {
  padding: 10px 16px;
  margin: 0;
}

.button-active {
  background: blueviolet;
}
</style>
