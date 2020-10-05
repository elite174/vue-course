<template>
  <a class="link" :href="href" target="_blank">
    <slot>{{ text }}</slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
      type: String
    },
    text: {
      required: false,
      type: String,
      default: 'Visit resource'
    }
  }
};
</script>

<style scoped>
.link {
  color: orange;
  text-decoration: none;
}
</style>
