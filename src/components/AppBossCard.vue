<template>
  <div v-if="boss">
    <q-card class="my-card no-shadow" bordered style="max-width: 300px; margin: auto;">
      <q-img :src="boss.image" basic style="height: 200px; object-fit: cover;">
        <div class="absolute-bottom-left bg-transparent q-pa-sm">
          <div class="text-h6">
            {{ boss.name }}
          </div>
          <div class="text-h7">
            Last Death
          </div>
        </div>
      </q-img>
    </q-card>
  </div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppBossCard',
  props: {
    boss: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log(this.boss)
  }
})
</script>