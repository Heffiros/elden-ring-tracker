<template>
  <div>
    <q-card class="no-shadow" bordered>
      <q-card-section class="text-h6">
        Boss Killed overtime
      </q-card-section>
      <q-card-section>
        <ECharts :option="options" class="q-mt-md" :resizable="true" autoresize style="height: 300px;" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import ECharts from "vue-echarts"
import { defineComponent } from "vue"
import { useRunDataStore } from 'src/stores/runDataStore'
import { mapState } from 'pinia'

export default defineComponent({
  name: "LineChart",
  components: {
    ECharts
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useRunDataStore, ['runs']),
    options() {
      const store = useRunDataStore()
      return {
        title: {
          text: 'Boss Killed Overtime',
          left: 'center'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b} : {c}'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false, // pour que la ligne touche le bord de l'axe
          data: store.runs.map(run => run.bossKiller).reverse()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Boss Killed',
            type: 'line',
            data: store.runs.map(run => run.bossesKilled).reverse(),
            smooth: true,
            lineStyle: {
              width: 2,
              color: '#42A5F5' // Couleur de la ligne
            },
            showSymbol: false // Pas de symbole sur chaque point
          }
        ]
      }
    }
  }
})
</script>