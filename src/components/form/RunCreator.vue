<template>
  <div>
    <q-form @submit.prevent="handleSubmit">
      <q-input v-model="form.bossesKilled" label="Nombre de boss tués" type="number" required />
      <q-input v-model="form.pveDeaths" label="Morts PVE" type="number" required />


      <q-select v-model="form.bossKiller" :options="options" label="Boss Killer" emit-value map-options use-input
        input-debounce="300" hint="Search" stack-label />

      <q-input v-model="form.timer" label="Timer" type="number" required />
      <q-btn class="add" label="Ajouter la run" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'RunCreator',
  data() {
    return {
      options: [],
      form: {
        bossesKilled: 0,
        pveDeaths: 0,
        bossKiller: '',
        timer: 0
      }
    }
  },
  methods: {
    async handleSubmit() {
      const newRun = {
        bossesKilled: this.form.bossesKilled,
        pveDeaths: this.form.pveDeaths,
        bossKiller: this.form.bossKiller,
        timer: this.form.timer
      }
      const store = useRunDataStore()
      await store.addItem(newRun)
      this.form = {
        idRun: '',
        bossesKilled: 0,
        pveDeaths: 0,
        bossKiller: '',
        timer: 0
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('/bosses.json')
      const data = await response.json()
      this.options = data.map(boss => ({
        label: boss.name,
        value: boss.name
      }))
    } catch (error) {
      console.error('Erreur lors du chargement des données JSON:', error)
    }
  }
}
</script>

<style scoped>
.add {
  margin-top: 8px;
}
</style>
