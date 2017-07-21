<template lang="html">
  <div class="my-left">
    <div v-for="item,index0 in nav">
      <div @click="navClick(index0)" style="line-height:55px;position:relative;padding-left:55px;border-bootom:1px solid #ccc;border-top:1px solid #ccc"
      :style="{background:navIndex==index0?'#2576cf':'',color:navIndex==index0?'#fff':''}">
        <mu-icon-button :icon="item.icon" style="position:absolute;top:3.5px;left:0"/>
        <mu-icon-button @click.stop="navIndex=-1" v-if="navIndex==index0" icon="expand_more" style="position:absolute;top:3px;right:0"/>
        <mu-icon-button @click.stop="navClick(index0)" v-else icon="chevron_right" style="position:absolute;top:3px;right:0"/>
        <span style="cursor:pointer">{{item.title}}</span>
      </div>
      <div @click.stop="nextClick(index1)" v-if="navIndex==index0" v-for="next,index1 in item.next" style="line-height:38px;position:relative;">
        <div v-if="typeof(next)=='object'">
          <mu-icon-button @click.stop="nextIndex=-1" v-if="nextIndex==index1" icon="arrow_drop_down" style="position:absolute;top:-6px;left:15px;color:#b3c2c7"/>
          <mu-icon-button @click.stop="nextClick(index1)" v-else icon="arrow_drop_down" style="position:absolute;top:-6px;left:15px;color:#b3c2c7;transform:rotate(-90deg);"/>
          <div style="cursor:pointer;padding-left:55px">{{next.title}}</div>
          <div v-if="nextIndex==index1" v-for="child,index2 in next.next" style="font-size:14px">
            <div @click.stop="childClick(index2)" style="padding-left:55px;cursor:pointer;" :style="{background:childIndex==index2?'#80b32a':'',color:childIndex==index2?'#fff':''}">
              {{child}}
            </div>
          </div>
        </div>
        <div v-else>
          <span style="cursor:pointer;padding-left:55px">{{next}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    nav:{
      type:Array,
      default(){
        return []
      }
    },
    navOrderIndex:{
      type:Number,
      default:0
    }
  },
  data(){
    return {
      navIndex:0,
      nextIndex:0,
      childIndex:0
    }
  },
	methods: {
    emitIndex(){
      this.$emit('getIndex',[this.navIndex,this.nextIndex,this.childIndex])
    },
		navClick(index0) {
      this.navIndex=index0
      this.nextIndex=0
      this.childIndex=0
      this.emitIndex()
		},
    nextClick(index1) {
			this.nextIndex=index1;
      this.childIndex=0
      this.emitIndex()
		},
    childClick(index2) {
			this.childIndex=index2
      this.emitIndex()
		},
	},
  mounted(){
    this.emitIndex()
  }
}
</script>

<style lang="scss" scope>
.my-left {
    font-size: 16px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
