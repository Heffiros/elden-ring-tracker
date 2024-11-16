<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useRunDataStore } from 'src/stores/runDataStore'

export default defineComponent({
  name: 'App',
  mounted() {
    const store = useRunDataStore()
    store.fetchItems()
  }
});
</script>
