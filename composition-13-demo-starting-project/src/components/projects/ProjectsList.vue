<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, toRefs, watch } from 'vue';

import { useTerm } from '../../hooks/useTerm';

import ProjectItem from './ProjectItem.vue';

export default {
  components: {
    ProjectItem
  },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);

    const { enteredSearchTerm, activeSearchTerm, updateSearch } = useTerm();

    const availableProjects = computed(() => {
      if (activeSearchTerm.value) {
        return user.value.projects.filter(prj =>
          prj.title.includes(activeSearchTerm.value)
        );
      }
      return user.value.projects;
    });

    const hasProjects = computed(
      () => user.value.projects && availableProjects.value.length > 0
    );

    watch(user, () => (enteredSearchTerm.value = ''));

    return {
      enteredSearchTerm,
      activeSearchTerm,
      updateSearch,
      availableProjects,
      hasProjects
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
