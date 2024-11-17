<template>
  <q-card class="no-shadow" bordered>
    <q-card-section class="text-center">
      <div class="text-h6 text-grey-8">
        Global Stat run
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="text-center">
      <div>All Run : {{ all }}</div>
      <div>Closed Run : {{ closed }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'AppAllRun',
  computed: {
    closed() {
      const store = useRunDataStore()
      return store.getNbClosedRun
    },
    all() {
      const store = useRunDataStore()
      return store.getTotalNbRun
    }
  }
}
</script>

<style scoped></style>
