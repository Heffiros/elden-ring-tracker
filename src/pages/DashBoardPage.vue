<template>
  <q-page class="q-pa-sm">
    <app-best-run class="bestRunBlock" />
    <app-average-run class="averageRunBlock" />
    <app-boss-over-time-chart class="chartBlock" />
  </q-page>
</template>



<script>
import AppBossOverTimeChart from 'src/components/AppBossOverTimeChart.vue'
import AppBestRun from 'src/components/AppBestRun.vue'
import AppAverageRun from 'src/components/AppAverageRun.vue'
export default {
  name: 'DashboardPage',
  components: {
    AppBossOverTimeChart,
    AppBestRun,
    AppAverageRun
  }
}
</script>
<style scoped>
.bestRunBlock,
.averageRunBlock {
  width: 350px;
  display: inline-block;
  margin-left: 4px;
}

.chartBlock {
  margin-top: 16px;
}
</style>