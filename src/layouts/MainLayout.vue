<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer" icon="menu" aria-label="Menu" />
        <q-toolbar-title>
          <q-item class="mainLogo" clickable :to="'/'">Elden Ring Tracker</q-item>
        </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="white" icon="fab fa-github" type="a"
            href="https://github.com/pratik227/quasar-admin" target="_blank">
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-primary text-white">
      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" :link="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from "quasar"
import EssentialLink from 'components/EssentialLink.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false
    }
  },
  setup() {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()

    return {
      $q,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    linksList() {
      return [
        {
          title: this.$t('menu.add_a_run'),
          to: '/add',
          isExternal: false
        },
        {
          title: this.$t('menu.history'),
          to: '/dashboard',
          isExternal: false
        }
      ]
    }
  }
})
</script>

<style scoped>
.mainLogo {
  color: white;
}
</style>