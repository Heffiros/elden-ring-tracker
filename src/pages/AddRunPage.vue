<template>
  <q-page>
    <run-creator />
  </q-page>
</template>

<script>
import RunCreator from 'src/components/form/RunCreator.vue'

export default {
  name: 'AddRunForm',
  components: {
    RunCreator
  }
}
</script>

<style scoped>
.q-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.q-btn {
  margin-top: 20px;
}
</style>
