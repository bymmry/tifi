<style scoped>
  .user-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto
  }

  .playlist-detail {
    line-height: 35px
  }

  .playlist-detail.active {
    background: #f7f7f7
  }

  .playlist-card-img {
    width: 100%;
    height: 150px
  }

</style>
<template>
  <div>
    <modal v-model="moreSong" width="1000" :closable="false" :styles="{top: '4rem'}">
      <div slot="header">
        <i-row style="line-height:20px">
          <i-col span="19">
            一周听歌 218
          </i-col>
          <i-col span="2">
            最近一周
          </i-col>
          <i-col span="1" class="text-center">
            |
          </i-col>
          <i-col span="2" class="text-right">
            所有时间
          </i-col>
        </i-row>
      </div>
      <div style="height:70vh;overflow:auto">
        <i-row class="playlist-detail" :class="{active:n%2!==0}" :key="n.id" v-for="n in 20">
          <i-col span="2" class="text-center">
            {{n}}
          </i-col>
          <i-col span="2" class="text-center">
            <i-icon type="play"></i-icon>
          </i-col>
          <i-col span="10">
            伤感的恋人
          </i-col>
          <i-col span="4">
            黄凯芹
          </i-col>
          <i-col span="4" style="padding-top:12.5px">
            <mu-linear-progress :max="200" mode="determinate" :size="10" :value="(20-n+1)*10" />
          </i-col>
          <i-col span="2" class="text-center">
            {{(20-n+1)*10}}次
          </i-col>
        </i-row>
      </div>
      <div slot="footer" style="opacity:0">
      </div>
    </modal>
    <i-row>
      <i-col span="5">
        <div style="width:150px" class="text-center">
          <img src="../assets/img/mulai.jpg" class="user-img" />
          <br /><br />
          <h3>多部未华子的眼睛</h3>
          <tooltip trigger="hover" content="您还没填写地区哦">
            <small style="color:#bbb">来自&nbsp;&nbsp;火星</small>
          </tooltip>
          <br /><br />
          <div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:12px">
                原创歌单
              </div>
              <div class="text-right" style="font-size:30px">
                48
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:12px">
                收藏歌单
              </div>
              <div class="text-right" style="font-size:30px">
                126
              </div>
            </div>
            <div class="dir"></div>
            <div>
              <div class="text-left" style="font-size:12px">
                累计听歌
              </div>
              <div class="text-right" style="font-size:30px">
                1478
              </div>
            </div>
            <div class="dir"></div>
            <br />
            <button class="card c-btn">编辑个人资料</button>
          </div>
        </div>
      </i-col>
      <i-col span="19">
        <i-row>
          <i-col span="1">
            <h1>听歌统计</h1>
          </i-col>
          <i-col span="22" offset="1">
            <i-row style="line-height:20px">
              <i-col span="19">
                一周听歌 218
              </i-col>
              <i-col span="2">
                最近一周
              </i-col>
              <i-col span="1" class="text-center">
                |
              </i-col>
              <i-col span="2" class="text-right">
                所有时间
              </i-col>
            </i-row>
            <div class="dir base-bg"></div>
            <i-row class="playlist-detail" :class="{active:n%2!==0}" :key="n.id" v-for="n in 10">
              <i-col span="2" class="text-center">
                {{n}}
              </i-col>
              <i-col span="2" class="text-center">
                <i-icon type="play"></i-icon>
              </i-col>
              <i-col span="10">
                伤感的恋人
              </i-col>
              <i-col span="4">
                黄凯芹
              </i-col>
              <i-col span="4" style="padding-top:12.5px">
                <mu-linear-progress mode="determinate" :size="10" :value="(10-n+1)*10" />
              </i-col>
              <i-col span="2" class="text-center">
                {{(10-n+1)*10}}次
              </i-col>
            </i-row>
            <div class="text-right text-link" @click="moreSong=true">
              查看更多
            </div>
          </i-col>
        </i-row>
        <br/>
        <i-row>
          <i-col span="1">
            <h1>原创歌单</h1>
          </i-col>
          <i-col span="22" offset="1">
            <div class="dir"></div>
            <br/>
            <i-row :gutter="32">
              <i-col span="6" :key="n.id" v-for="n in 4">
                <img src="../assets/img/mulai.jpg" class="playlist-card-img">
                <h4>遣别离愁，两心同处自难断</h4>
                <br/>
              </i-col>
            </i-row>
            <div class="text-right text-link">
              查看更多
            </div>
          </i-col>
        </i-row>
        <br/>
        <i-row>
          <i-col span="1">
            <h1>收藏歌单</h1>
          </i-col>
          <i-col span="22" offset="1">
            <div class="dir"></div>
            <br>
            <i-row :gutter="32">
              <i-col span="6" :key="n.id" v-for="n in 4">
                <img src="../assets/img/mulai.jpg" class="playlist-card-img">
                <h4>遣别离愁，两心同处自难断</h4>
                <br>
              </i-col>
            </i-row>
            <div class="text-right text-link">
              查看更多
            </div>
          </i-col>
        </i-row>
      </i-col>
    </i-row>
    <div style="height:50px"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        moreSong: false,
        morePlaylist: false
      }
    }
  }

</script>
