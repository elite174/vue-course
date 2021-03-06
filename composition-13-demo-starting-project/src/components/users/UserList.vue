<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import { computed, ref, toRefs } from 'vue';

import UserItem from './UserItem.vue';

import { useTerm } from '../../hooks/useTerm';

export default {
  components: {
    UserItem
  },
  props: ['users'],
  setup(props) {
    const { users } = toRefs(props);

    const sorting = ref(null);

    const { enteredSearchTerm, activeSearchTerm, updateSearch } = useTerm();

    const availableUsers = computed(() => {
      let _users = [];

      if (activeSearchTerm.value) {
        _users = users.value.filter(usr =>
          usr.fullName.includes(activeSearchTerm.value)
        );
      } else if (users.value) {
        _users = users.value;
      }
      return _users;
    });

    const displayedUsers = computed(() => {
      if (!sorting.value) {
        return availableUsers.value;
      }

      return availableUsers.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
          return 1;
        } else if (sorting.value === 'asc') {
          return -1;
        } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
          return -1;
        } else {
          return 1;
        }
      });
    });

    const sort = mode => (sorting.value = mode);

    return {
      enteredSearchTerm,
      activeSearchTerm,
      sorting,
      availableUsers,
      displayedUsers,
      updateSearch,
      sort
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
