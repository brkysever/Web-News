<template>
  <div class="app">
    <TopHeader />
<div class="container">
    <MasterHeader />
</div>    
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


<style>
.container{
  padding-top: 60px;
 
}
.app{
  padding-bottom: 80px;
}

</style>