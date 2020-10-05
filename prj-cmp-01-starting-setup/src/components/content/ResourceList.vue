<template>
  <div class="resource-list">
    <BaseContainer
      :class="'resource-list-container'"
      v-for="item in resources"
      :key="item.id"
    >
      <div class="row">
        <h3>{{ item.name }}</h3>
        <BaseButton @click="deleteResource(item.id)">Delete</BaseButton>
      </div>
      <p>{{ item.description }}</p>
      <BaseLink :href="item.href" />
    </BaseContainer>
  </div>
</template>

<script>
import BaseContainer from '../UI/BaseContainer';
import BaseLink from '../UI/BaseLink';
import BaseButton from '../UI/BaseButton';

export default {
  components: {
    BaseContainer,
    BaseLink,
    BaseButton
  },
  inject: {
    resources: {
      required: true,
      type: Array
    },
    deleteResource: {
      required: true,
      type: Function
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.resource-list {
  width: 100%;
}

.resource-list-container {
  margin-bottom: 30px;
  text-align: initial;
}

.resource-list-container:last-child {
  margin-bottom: 0px;
}
</style>
