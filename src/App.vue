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
    if (store.getTotalNbRun === 0) {
      store.fetchItems()
    }
  }
})
</script>
