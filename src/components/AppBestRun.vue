<template>
  <q-card v-if="best" class="no-shadow" bordered>
    <q-card-section class="text-center">
      <div class="text-h6 text-grey-8">
        Best Run
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="text-center">
      Boss Tué : {{ best.bossesKilled }}
    </q-card-section>
  </q-card>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'AppBestRun',
  computed: {
    best() {
      const store = useRunDataStore()
      return store.getBestRun
    }
  }
}
</script>

<style scoped></style>
