<template>
  <BaseContainer>
    <form @submit.prevent="submitForm">
      <h4 class="caption">Name</h4>
      <input v-model="name" type="text" />
      <h4 class="caption">Description</h4>
      <textarea v-model="description" />
      <h4 class="caption">Link</h4>
      <input v-model="link" type="text" />
      <BaseButton class="form-button" type="submit" :active="true"
        >Submit</BaseButton
      >
      <BaseModal v-if="modalVisible">
        <h2>FILL OUT THE DATA</h2>
        <BaseButton @click="toggleModal(false)">Close</BaseButton>
      </BaseModal>
    </form>
  </BaseContainer>
</template>

<script>
import BaseContainer from '../UI/BaseContainer';
import BaseButton from '../UI/BaseButton';
import BaseModal from '../UI/BaseModal';

export default {
  components: {
    BaseContainer,
    BaseButton,
    BaseModal
  },
  inject: {
    addResource: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      name: '',
      description: '',
      link: '',
      modalVisible: false
    };
  },
  methods: {
    clearForm() {
      this.name = '';
      this.description = '';
      this.link = '';
    },
    validateData() {
      if (!this.name || !this.description || !this.link) {
        this.toggleModal(true);

        return false;
      }

      return true;
    },
    submitForm() {
      if (this.validateData()) {
        this.addResource({
          name: this.name,
          description: this.description,
          href: this.link
        });

        this.clearForm();
      }
    },
    toggleModal(value) {
      this.modalVisible = value;
    }
  }
};
</script>

<style scoped>
.caption {
  margin-bottom: 5px;
}

.form-button {
  display: block;
  margin-top: 10px;
}
</style>
