<template>
  <q-page class="q-pa-sm">
    <app-boss-over-time-chart />
  </q-page>
</template>



<script>
import AppBossOverTimeChart from 'src/components/AppBossOverTimeChart.vue'
export default {
  name: 'DashboardPage',
  components: {
    AppBossOverTimeChart
  }
}
</script>