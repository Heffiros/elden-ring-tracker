<template>
  <q-page>
    <q-card class="table-bg no-shadow" bordered>
      <q-card-section>
        <div class="text-h6 text-white">
          Dark Mode
          <q-btn label="Export" color="blue" class="float-right text-capitalize  shadow-3" icon="person" />
        </div>
      </q-card-section>
      <q-separator color="white" />
      <q-card-section class="q-pa-none">
        <q-table v-if="runs" dark class="table-bg" :rows="runs" :columns="columns" hide-bottom>
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item style="max-width: 420px">
                <q-item-section avatar>
                  <q-avatar>
                    <img :src="props.row.avatar">
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ props.row.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Action="props">
            <q-td :props="props">
              <q-btn icon="edit" size="sm" flat dense />
              <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense />
            </q-td>
          </template>
          <template v-slot:body-cell-Progress="props">
            <q-td :props="props">
              <q-linear-progress dark :value="props.row.progress / 100" class="q-mt-md" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { useRunDataStore } from 'src/stores/runDataStore'
import { mapState } from 'pinia'

export default {
  name: 'RunTable',
  data() {
    return {
      columns: [
        { name: 'Nombre de boss tués', label: 'Nombre de boss tués', field: 'bossesKilled', sortable: true, align: 'left' },
        { name: 'PVE Deaths', label: 'PVE Deaths', field: 'pveDeaths', sortable: true, align: 'left' },
        { name: 'Boss Killer', label: 'Boss Killer', field: 'bossKiller', sortable: true, align: 'left' },
        { name: 'Timer', label: 'Timer', field: 'timer', sortable: true, align: 'left' }
      ]
    }
  },
  computed: {
    ...mapState(useRunDataStore, ['runs'])
  },
  mounted() {
    const store = useRunDataStore()
    store.fetchItems()
  }
}
</script>

<style scoped>
.q-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.table-bg {
  background-color: #162b4d;
}
</style>
