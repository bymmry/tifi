<style lang="css" scoped>
  .br {
    margin: .5rem 0
  }

  .min-cover {
    width: 40px;
    height: 40px
  }

  .cover {
    width: 200px;
    height: 200px
  }

  .user-cover {
    width: 50px;
    height: 50px;
    border-radius: 50%
  }
</style>
<template>
  <div>
    <i-row>
      <i-col span="1">
        <affix @on-change="fixedTalkChange">
          <h1>评论详情</h1>
        </affix>
      </i-col>
      <i-col span="22" :offset="fixedTalk?'2':'1'" style="padding-top:.5rem">
        <i-row>
          <i-col span="2">
            <img src="../assets/img/mulai.jpg" class="card user-cover" />
          </i-col>
          <i-col span="22">
            <div>
              <mu-text-field hintText="此曲悠然婉转，意深情长" multiLine :rows="3" :rowsMax="10" fullWidth/>
              <button class="c-btn card">发表评论</button>
            </div>
          </i-col>
        </i-row>
        <br /><br /><br />
        <h2>共132条评论</h2>
        <br />
        <h3>
          热门评论
          <i-icon type="fireball"></i-icon>
        </h3>
        <div class="dir"></div>
        <div v-for="n in 5">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img src="../assets/img/mulai.jpg" class="card user-cover" />
            </i-col>
            <i-col span="22">
              <span class="username">多部未华子的眼睛:</span> 一入古风深似海 风吹石岛 我无法说出内心的爱 大海的远和一个人的苍茫 我只能遥望 在潮起潮落中 黎明近在眼前
              <br /><br />
              <i-row>
                <i-col span="12">
                  发表于 4月15日 20:00
                  <span class="c-btn card" style="padding:.2rem .5rem">回复</span>
                </i-col>
                <i-col span="12" class="text-right cursor">
                  赞(1324)
                </i-col>
              </i-row>
            </i-col>
          </i-row>
          <div v-if="n!=5" class="dir"></div>
        </div>
        <br />
        <h3>
          最新评论
          <i-icon type="flash"></i-icon>
        </h3>
        <div class="dir"></div>
        <div v-for="n in 5">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img src="../assets/img/mulai.jpg" class="card user-cover" />
            </i-col>
            <i-col span="22">
              <span class="username">多部未华子的眼睛:</span> 一入古风深似海 风吹石岛 我无法说出内心的爱 大海的远和一个人的苍茫 我只能遥望 在潮起潮落中 黎明近在眼前
              <br /><br />
              <i-row>
                <i-col span="12">
                  发表于 4月15日 20:00
                  <span class="c-btn card" style="padding:.2rem .5rem">回复</span>
                </i-col>
                <i-col span="12" class="text-right cursor">
                  赞(1324)
                </i-col>
              </i-row>
            </i-col>
          </i-row>
          <div v-if="n!=5" class="dir"></div>
        </div>
        <br />
        <mu-pagination style="justify-content: end" :total="50" :current="1">
        </mu-pagination>
      </i-col>
    </i-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fixedTalk: false
      }
    },
    methods: {
      fixedTalkChange(val) {
        this.fixedTalk = val
      }
    }
  }

</script>
