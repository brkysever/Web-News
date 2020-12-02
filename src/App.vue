<template>
  <div id="app">
 <Container>
<MasterHeader/>
</Container>
  </div>
</template>

<script>
import MasterHeader from '@/components/Header.vue'
import Container from '@/components/Container.vue'
export default {
  name:'App',
  components: {
    MasterHeader,
    Container
    
  }
}
</script>
