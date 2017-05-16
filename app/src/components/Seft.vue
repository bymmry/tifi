<template>
  <div>
    <!--<keep-alive>-->
      <transition name="fade" mode="out-in">
        <router-view class="child-continer"></router-view>
      </transition>
    <!--</keep-alive>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }

</script>
