<template>
  <div class="q-pa-md">
    <q-carousel arrows animated v-model="slide" height="400px">
      <q-carousel-slide v-for="boss in bosses" :key="boss.name" :img-src="boss.image">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{ boss.name }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'
import AppBossCard from 'src/components/AppBossCard.vue'

export default {
  name: 'AppDeathBoss',
  components: {
    AppBossCard
  },
  data() {
    return {
      allBosses: [],
      lastThreeRun: [],
      bosses: null
    }
  },
  computed: {
    bosses: function () {
      const store = useRunDataStore()
      const lastRuns = store.getLastXRun(3) // Obtenir les derniers runs

      return lastRuns
        .map(run => {
          return this.allBosses.find(boss => boss.name === run.bossKiller)
        })
        .filter(boss => boss !== undefined) // Supprimer les valeurs `undefined` si aucun boss n'est trouvé
    }
  },
  async created() {
    try {
      const response = await fetch('/bosses.json')
      const data = await response.json()
      this.allBosses = data
    } catch (error) {
      console.error('Erreur lors du chargement des données JSON:', error)
    }
  }
}
</script>
