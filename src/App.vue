<template>
  <div id="app">
    <TopHeader />

    <MasterHeader />
    <router-view />
  </div>
</template>

<script>
import MasterHeader from '@/components/Header.vue'

import TopHeader from '@/components/TopHeader.vue'
export default {
  name: 'App',
  components: {
    MasterHeader,
    TopHeader
  }
}
</script>
