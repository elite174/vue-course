<template>
  <li>
    <h3>{{ userName }}</h3>
    <button @click="viewProjects">View Projects</button>
  </li>
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: ['id', 'userName'],
  emits: ['list-projects'],
  setup(props, { emit }) {
    const { id } = toRefs(props);

    const viewProjects = () => {
      emit('list-projects', id.value);
    };

    return {
      viewProjects
    };
  }
};
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>
