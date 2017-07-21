<template lang="html">
  <div>
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './fcApp/header'
import myMain from './fcApp/main'
import myFooter from './fcApp/footer'
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
