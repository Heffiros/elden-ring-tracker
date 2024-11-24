<template>
  <q-page class="q-pa-sm">
    <app-all-run class="allBlock" />
    <app-best-run class="bestRunBlock" />
    <app-average-run class="averageRunBlock" />
    <app-timer-average-run class="timeAverageRunBlock" />
    <app-death-boss class="toto" />
    <app-boss-over-time-chart class="chartBlock" />
  </q-page>
</template>



<script>
import AppBossOverTimeChart from 'src/components/AppBossOverTimeChart.vue'
import AppBestRun from 'src/components/AppBestRun.vue'
import AppAverageRun from 'src/components/AppAverageRun.vue'
import AppAllRun from 'src/components/AppAllRun.vue'
import AppTimerAverageRun from 'src/components/AppTimerAverageRun.vue'
import AppDeathBoss from 'src/components/AppDeathBoss.vue'

export default {
  name: 'DashboardPage',
  components: {
    AppBossOverTimeChart,
    AppBestRun,
    AppAverageRun,
    AppAllRun,
    AppTimerAverageRun,
    AppDeathBoss
  }
}
</script>
<style scoped>
.bestRunBlock,
.averageRunBlock,
.allBlock,
.timeAverageRunBlock {
  min-width: 350px;
  min-height: 140px;
  display: inline-block;
  margin-left: 4px;
}

.toto {
  background-color: red;
}

.chartBlock {
  margin-top: 16px;
}
</style>