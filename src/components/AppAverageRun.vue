<template>
  <q-card v-if="average" class="no-shadow" bordered>
    <q-card-section class="text-center">
      <div class="text-h6 text-grey-8">
        Average Run
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="text-center">
      Boss Tué : {{ average }}
    </q-card-section>
  </q-card>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'AppAverageRun',
  computed: {
    average() {
      const store = useRunDataStore()
      return store.getAverageRun
    }
  }
}
</script>

<style scoped></style>
