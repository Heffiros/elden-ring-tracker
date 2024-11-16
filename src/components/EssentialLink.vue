<template>
  <q-item
    clickable
    :to="!link.isExternal ? link.to : undefined"
  >
    <q-item-section
      v-if="link.icon"
      avatar
    >
      <q-icon :name="link.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ link.title }}</q-item-label>
      <q-item-label>{{ link.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    link: {
      type: Object,
      default: null,
      required: true
    }
  }
})
</script>
