<template lang="html">
  <div>
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './fcHome/header'
import myMain from './fcHome/main'
import myFooter from './fcHome/footer'
export default {
  components: {
    myHeader,
    myMain,
    myFooter
  }
}
</script>

<style lang="css">
</style>
