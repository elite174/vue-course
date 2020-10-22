import { ref, watch } from 'vue';

export const useTerm = () => {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const updateSearch = val => (enteredSearchTerm.value = val);

  watch(enteredSearchTerm, val => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    activeSearchTerm,
    updateSearch
  };
};
