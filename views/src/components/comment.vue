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

  .user-cover-none {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 20px
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
            <img v-if="user.picUrl" :src="user.picUrl" class="card user-cover" />
            <div v-else class="card user-cover-none text-center">
              音
            </div>
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
        <br /><br />
        <h2>
          热门评论
          <i-icon type="fireball"></i-icon>
        </h2>
        <div class="dir"></div>
        <div v-for="(item,index) in hot">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img v-if="item.user.avatarUrl" :src="item.user.avatarUrl" class="card user-cover" />
              <div v-else class="card user-cover-none text-center">
                TIFI
              </div>
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
                  发表于 {{formatTime(item.time)}}
                  <span class="c-btn card" style="padding:.2rem .5rem">回复</span>
                </i-col>
                <i-col span="12" class="text-right cursor">
                  赞({{item.likedCount}})
                </i-col>
              </i-row>
            </i-col>
          </i-row>
          <div v-if="index!==hot.length-1" class="dir"></div>
        </div>
        <br /><br />
        <h2>
          最新评论
          <i-icon type="flash"></i-icon>
        </h2>
        <div class="dir"></div>
        <div v-for="(item,index) in data.comments">
          <i-row style="padding:1rem 0">
            <i-col span="2">
              <img v-if="item.user.avatarUrl" :src="item.user.avatarUrl" class="card user-cover" />
              <div v-else class="card user-cover-none text-center">
                TIFI
              </div>
            </i-col>
            <i-col span="22">
              <span class="text-link">{{item.user.nickname}}:</span> {{item.content}}
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
                  发表于 {{formatTime(item.time)}}
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
        <mu-pagination style="justify-content: center" :total="data.total" :current="currPage" @pageChange="pageChange">
        </mu-pagination>
      </i-col>
    </i-row>

  </div>
</template>
<script>
  import wyApi from '../wyApi.js'
  import moment from 'moment'
  moment.locale('zh-cn')
  export default {
    props: {
      data: {
        type: Object,
        default () {
          return {
            total: 2,
            comments: [{
              beReplied: [{
                content: '可以的',
                user: {
                  avatarUrl: "",
                  nickname: '官方回复'
                }
              }],
              likedCount: 0,
              time: Date.parse(new Date()),
              content: '这是您在TIFI创建的歌单,希望您能寻得知心的音乐',
              user: {
                avatarUrl: "",
                nickname: '官方评论'
              }
            }]
          }
        }
      },
      hot: {
        type: Array,
        default () {
          return [{
            beReplied: [{
              content: '可以的',
              user: {
                nickname: '官方回复',
                avatarUrl: ""
              }
            }],
            likedCount: 0,
            time: Date.parse(new Date()),
            content: '这是您在TIFI创建的歌单,希望您能寻得知心的音乐',
            user: {
              avatarUrl: "",
              nickname: '官方评论'
            }
          }]
        }
      }
    },
    data() {
      return {
        fixedTalk: false,
        currPage: 1
      }
    },
    computed: {
      user() {
        return this.$store.state.user
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
        this.$emit('pageChange', val)
        this.currPage = val
      },
      formatTime(val) {
        return moment(val).format('MMMDo YYYY hh:mm a')
      }
    },
    mounted() {}
  }

</script>
