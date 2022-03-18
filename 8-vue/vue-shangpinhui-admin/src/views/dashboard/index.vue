<template>
  <div>
    <Card></Card>
    <Observe></Observe>
    <Sale></Sale>
  </div>
</template>

<script>
import Card from '@/views/dashboard/Card'
import Observe from '@/views/dashboard/Observe'
import Sale from '@/views/dashboard/Sale'

export default {
  name: 'Dashboard',
  components: {
    Card,
    Observe,
    Sale
  }
}
</script>

<style scoped>

</style>
