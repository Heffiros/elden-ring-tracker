<template>
  <q-page>
    <q-form @submit.prevent="handleSubmit">
      <q-input
        v-model="form.bossesKilled"
        label="Nombre de boss tués"
        type="number"
        required
      />
      <q-input
        v-model="form.pveDeaths"
        label="Morts PVE"
        type="number"
        required
      />
      <q-input
        v-model="form.bossKiller"
        label="Boss Killer"
        required
      />
      <q-input
        v-model="form.timer"
        label="Timer"
        type="number"
        required
      />      
      <q-btn label="Ajouter la run" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'

export default {
  name: 'AddRunForm',
  data () {
    return {
      form: {
        bossesKilled: 0,
        pveDeaths: 0,
        bossKiller: '',
        timer: 0
      }
    }
  },
  methods: {
    async handleSubmit () {
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
