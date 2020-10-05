<template>
  <TheLayout>
    <template #header>
      <TheHeader />
    </template>
    <TheContent>
      <Navigation
        :active-tab="activeTab"
        :tabs="tabs"
        :set-active-tab="setActiveTab"
        :class="'navigation'"
      />
      <component :is="currentComponent" />
    </TheContent>
  </TheLayout>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
import TheLayout from './components/layout/TheLayout';
import TheContent from './components/layout/TheContent';
import Navigation from './components/content/Navigation';
import ResourceList from './components/content/ResourceList';
import ResourceForm from './components/content/ResourceForm';

const tabs = [
  {
    text: 'Stored resources',
    name: 'resources'
  },
  {
    text: 'Add resource',
    name: 'add'
  }
];

export default {
  components: {
    TheHeader,
    TheLayout,
    TheContent,
    Navigation,
    ResourceList,
    ResourceForm
  },
  data() {
    return {
      resources: [
        {
          id: '1',
          name: 'Google',
          description: 'some optional description',
          href: 'https://google.ru'
        }
      ],
      activeTab: tabs[0].name,
      tabs
    };
  },
  computed: {
    currentComponent() {
      return this.activeTab === 'add' ? 'resource-form' : 'resource-list';
    }
  },
  provide() {
    return {
      deleteResource: this.deleteResource,
      addResource: this.addResource,
      resources: this.resources
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    deleteResource(id) {
      console.log(this.resources);
      const index = this.resources.findIndex(item => item.id === id);
      this.resources.splice(index, 1);
      console.log(this.resources);
    },
    addResource(resourceData) {
      this.resources.push({ ...resourceData, id: String(Math.random()) });
      this.activeTab = 'resources';
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.navigation {
  margin-bottom: 30px;
}
</style>
