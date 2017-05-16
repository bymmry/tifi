<style scoped>
  .select{
    margin-bottom: 1rem;
    transition: all 200ms;
    font-size: 13px
  }
  .select.active{
    font-size: 16px;
    font-weight: 500
  }
  .select:hover{
    font-size: 16px;
    font-weight: 400
  }
  .user-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto
  }
  .user-img-min {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto
  }

  .user-img-none {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    line-height: 100px;
    font-size: 30px;
    font-weight: 300;
    margin: 0 auto;
    text-align: center
  }
  .user-img-none-min {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    font-size: 20px;
    font-weight: 300;
    margin: 0 auto;
    text-align: center
  }
</style>
<template>
  <div>

    <i-row v-if="user.type=='member'">
      <i-col span="4">
        <affix>
          <div style="width:100px" class="text-center">
            <img v-if="user.picUrl" :src="user.picUrl" class="user-img card" />
            <div v-else class="user-img-none card">
              音
            </div>
            <br /><br />
            <h3>{{user.name}}</h3>
            <tooltip trigger="hover" content="您还没填写地区哦">
              <small style="color:#bbb">来自&nbsp;&nbsp;火星</small>
            </tooltip>
            <br /><br />
            <div>
              <div class="dir"></div>
              <div>
                <div class="text-left" style="font-size:12px">
                  动态
                </div>
                <div class="text-right" style="font-size:30px">
                  145
                </div>
              </div>
              <div class="dir"></div>
              <div>
                <div class="text-left" style="font-size:12px">
                  朋友
                </div>
                <div class="text-right" style="font-size:30px">
                  72
                </div>
              </div>
              <div class="dir"></div>
              <div>
                <div class="text-left" style="font-size:12px">
                  关注
                </div>
                <div class="text-right" style="font-size:30px">
                  158
                </div>
              </div>
              <div class="dir"></div>
              <br />
              <button @click="myRenewVisible=true" class="card c-btn">发表动态</button>
            </div>
          </div>
        </affix>
        &nbsp;
      </i-col>
      <i-col span="20">
        <i-row :gutter="32">
          <i-col span="1">
            <affix>
              <h1>{{selectVal[selected]}}动态</h1>
            </affix>
            &nbsp;
          </i-col>
          <i-col span="19" offset="1">
            <transition name="fade" mode="out-in">
              <i-row style="margin-bottom:2rem" v-if="myRenewVisible" :gutter="32">
                <i-col span="3">
                  <img v-if="user.picUrl" :src="user.picUrl" class="card user-cover-min" />
                  <div v-else class="card user-img-none-min text-center">
                    音
                  </div>
                </i-col>
                <i-col span="21" style="font-size:12px">
                  <div>
                    <mu-text-field style="font-size:14px" v-model="myRenew" hintText="今天天气不错!" multiLine :rows="2" :rowsMax="5" fullWidth/>
                    <button style="padding:5px 10px" class="c-btn card">确认发表</button>&nbsp;&nbsp;
                    <span @click.stop="myRenewVisible=false" class="cursor">取消</span>
                  </div>
                </i-col>
              </i-row>
            </transition>
            <i-row style="margin-bottom:2rem" :gutter="32" :key="index" v-for="item,index in renew">
              <i-col span="3">
                <img v-if="user.picUrl" :src="user.picUrl" class="user-img-min card" />
                <div v-else class="user-img-none-min card">
                  友
                </div>
              </i-col>
              <i-col span="18" style="font-size:14px">
                <span class="text-link">{{item.user.name}}</span>&nbsp;&nbsp;
                发布了动态:
                <br />
                <span style="font-size:14px;color:#bbb">{{item.time}}</span>
                <br />
                {{item.content}}
                <br /><br />
                <i-row style="font-size:12px">
                  <i-col span="4" class="text-left">
                    <button @click.stop="replyIndex=index;reply='@'+item.user.name+':'" style="padding:2px 10px" class="card c-btn">回复</button>
                  </i-col>
                  <i-col span="20" class="text-right cursor" >
                    <i-icon type="chatbubble-working"></i-icon>评论({{item.reContent.length}})&nbsp;&nbsp;|&nbsp;&nbsp;<i-icon type="thumbsup"></i-icon> 赞({{item.like}})
                  </i-col>
                </i-row>
                <div class="dir" style="background:#f0f0f0">
                </div>
                <transition name="fade" mode="out-in">
                  <i-row v-if="replyIndex==index" :gutter="32">
                    <i-col span="3">
                      <img v-if="user.picUrl" :src="user.picUrl" class="card user-cover-min" />
                      <div v-else class="card user-img-none-min text-center">
                        音
                      </div>
                    </i-col>
                    <i-col span="21" style="font-size:12px">
                      <div>
                        <mu-text-field style="font-size:14px" v-model="reply" hintText="这条动态不错哦" multiLine :rows="2" :rowsMax="5" fullWidth/>
                        <button style="padding:5px 10px" class="c-btn card">确认回复</button>&nbsp;&nbsp;
                        <span @click.stop="replyIndex=-1;reply=''" class="cursor">取消</span>
                      </div>
                    </i-col>
                  </i-row>
                </transition>
              </i-col>
              <i-col span="3" class="text-center" style="padding-top:10px">
                <span class="cursor" style="padding:5px 10px;border:1px solid #f44336;border-radius:5px;color:#f44336">
                  关注+
                </span>
              </i-col>
            </i-row>
          </i-col>
          <i-col span="3" class="text-right cursor">
            <affix>
              <div @click.stop="selected=index" class="select" :class="{'active':index == selected}" v-for="item,index in select">
                {{item}}
              </div>
            </affix>
            &nbsp;
            <!-- <div style="margin:1rem 0;background:#bbb">只看朋友</div>
            <div>我关注的</div> -->
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <visitor v-else></visitor>
  </div>
</template>

<script>
import visitor from './Visitor.vue'
  export default {
    components: {
      visitor
    },
    data() {
      return {
        selected:0,
        selectVal:['发烧友','我的','朋友','我关注的'],
        select:['查看所有','我的动态','只看朋友','我关注的'],
        moreSong: false,
        morePlaylist: false,
        myRenewVisible:false,
        myRenew:'',
        renew: [{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        },{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        },{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        },{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        },{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        },{
          picUrl: '',
          content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]',
          id: '',
          user: {
            uid: '',
            name: 'TIFI官方',
          },
          time: '5月1日 8:19 上午',
          like: 130,
          reContent: [{
            picUrl: '',
            content: '1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ',
            id: '',
            user: {
              uid: '',
              name: 'TIFI官方回复',
            },
            time: '最近',
            like:220
          }]
        }],
        replyIndex:-1,
        reply:''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }

</script>
