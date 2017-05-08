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
        <h2>共{{data.total}}条评论</h2>
        <br />
        <h3>
          热门评论
          <i-icon type="fireball"></i-icon>
        </h3>
        <div class="dir"></div>
        <div v-for="(item,index) in data.hotComments">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img :src="item.user.avatarUrl" class="card user-cover" />
            </i-col>
            <i-col span="22">
              <span class="text-link">{{item.user.nickname}}:</span> {{item.content}}
              <br/>
              <div v-if="item.beReplied">
                <br/>
                <div v-for="re in item.beReplied" style="border:1px solid #ccc;padding:.5rem">
                  <span class="text-link">{{re.user.nickname}}:</span> {{re.content}}
                  <br/>
                </div>
              </div>
              <br /><br />
              <i-row>
                <i-col span="12">
                  发表于 {{item.time}}
                  <span class="c-btn card" style="padding:.2rem .5rem">回复</span>
                </i-col>
                <i-col span="12" class="text-right cursor">
                  赞({{item.likedCount}})
                </i-col>
              </i-row>
            </i-col>
          </i-row>
          <div v-if="index!==data.hotComments.length-1" class="dir"></div>
        </div>
        <br />
        <h3>
          最新评论
          <i-icon type="flash"></i-icon>
        </h3>
        <div class="dir"></div>
        <div v-for="(item,index) in data.comments">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img :src="item.user.avatarUrl" class="card user-cover" />
            </i-col>
            <i-col span="22">
              <span class="text-link">{{item.user.nickname}}:</span> {{item.content}}
              <br /><br />
              <i-row>
                <i-col span="12">
                  发表于 {{item.time}}
                  <span class="c-btn card" style="padding:.2rem .5rem">回复</span>
                </i-col>
                <i-col span="12" class="text-right cursor">
                  赞({{item.likedCount}})
                </i-col>
              </i-row>
            </i-col>
          </i-row>
          <div v-if="index!==data.comments.length-1" class="dir"></div>
        </div>
        <br />
        <mu-pagination :total="data.total" :current="1" @pageChange="pageChange">
        </mu-pagination>
      </i-col>
    </i-row>

  </div>
</template>
<script>
  import wyApi from '../wyApi.js'
  export default {
    props: {
      data: {
        type: Object,
        default () {
          return {
            total: 2,
            comments: [{
              beReplied: [{
                content: '不错哦',
                user: {
                  avatarUrl: "http://p1.music.126.net/BKAR7WwpjP_4g4yIdeNRXA==/3413983609951723.jpg",
                  nickname: '回复测试'
                }
              }],
              likedCount: 999,
              time: 1487684420785,
              content: '一入古风深似海 风吹石岛 我无法说出内心的爱 大海的远和一个人的苍茫 我只能遥望 在潮起潮落中 黎明近在眼前',
              user: {
                avatarUrl: "http://p1.music.126.net/BKAR7WwpjP_4g4yIdeNRXA==/3413983609951723.jpg",
                nickname: '测试评论'
              }
            }],
            hotComments: [{
              beReplied: [{
                content: '不错哦',
                user: {
                  nickname: '回复测试'
                }
              }],
              likedCount: 999,
              time: 1487684420785,
              content: '一入古风深似海 风吹石岛 我无法说出内心的爱 大海的远和一个人的苍茫 我只能遥望 在潮起潮落中 黎明近在眼前',
              user: {
                avatarUrl: "http://p1.music.126.net/BKAR7WwpjP_4g4yIdeNRXA==/3413983609951723.jpg",
                nickname: '测试评论'
              }
            }]
          }
        }
      }
    },
    data() {
      return {
        fixedTalk: false,
      }
    },
    methods: {
      getCommont() {
        wyApi.getComment(this.wyID).then((data) => {
          console.log(data)
          this.data = data
        })
      },
      fixedTalkChange(val) {
        this.fixedTalk = val
      },
      pageChange(val) {
        this.$emit('pageChange',val)
      }
    },
    mounted() {
    }
  }

</script>
