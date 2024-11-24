<template>
  <q-card v-if="average" class="no-shadow" bordered>
    <q-card-section class="text-center">
      <div class="text-h6 text-grey-8">
        Average Game Time
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="text-center">
      {{ average }}
    </q-card-section>
  </q-card>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'AppTimerAverageRun',
  computed: {
    average() {
      const store = useRunDataStore()
      const averageTime = store.getTimeAverageRun
      if (averageTime < 60)
        return store.getTimeAverageRun + 'min'
      else
        return store.getTimeAverageRun / 60 + 'hour'
    }
  }
}
</script>

<style scoped></style>
