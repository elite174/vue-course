<template>
  <BaseContainer :class="containerClasses">
    <BaseButton
      v-for="tab in tabs"
      :active="tab.name === activeTab"
      :key="tab.name"
      @click="setActiveTab(tab.name)"
    >
      {{ tab.text }}
    </BaseButton>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../UI/BaseContainer';
import BaseButton from '../UI/BaseButton';

export default {
  components: {
    BaseContainer,
    BaseButton
  },
  computed: {
    containerClasses() {
      return {
        [this.$props.class]: true,
        container: true
      };
    }
  },
  props: {
    tabs: {
      required: true,
      type: Array
    },
    activeTab: {
      required: true,
      type: String
    },
    setActiveTab: {
      required: true,
      type: Function
    }
  }
};
</script>

<style scoped>
.button {
  margin-right: 20px;
}

.button:last-child {
  margin: 0;
}

.container {
  text-align: center;
}
</style>
