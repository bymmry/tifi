<template>
  <div>
    <i-row>
      <i-col :span="1" style="font-size:40px">
        可惜
      </i-col>
      <i-col :span="1" offset="1">
        <div style="width:1px;height:300px;background:#ccc;margin-top:5px">
        </div>
      </i-col>
      <i-col :span="1" style="font-size:22px">
        您还没登录
      </i-col>
      <i-col :span="1" offset="1">
        <div style="width:1px;height:200px;background:#ccc;margin-top:5px">
        </div>
      </i-col>
      <i-col :span="1" style="font-size:18px">
        <div @click="$store.commit('showUserBox','login')" class="text-link" style="width:20px">立即尝试</div>
      </i-col>
      <i-col :span="3" offset="14" class="text-center" style="font-size:16px">
        <div class="dir" style="margin-top:0;margin-bottom:1.2rem">
        </div>
        期待您的到来
        <div class="dir" style="margin-bottom:0;margin-top:1.2rem">
        </div>
      </i-col>
    </i-row>
  </div>
</template>
