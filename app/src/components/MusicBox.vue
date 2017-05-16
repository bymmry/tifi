<style scoped>
  .music-player {
    background: #fff;
    position: fixed;
    padding: 0 5px;
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: 2;
    line-height: 50px;
    border: 1px solid #f0f0f0
  }

</style>

<template>
  <div class="music-player" @click="$store.commit('playBox',true)">
      <div style="height:40px;width:40px;float:left;background:#f0f0f0;margin-top:5px">
      <img :src="musicData.cover" style="width:100%;height:100%">
    </div>
    <div style="float:left;line-height:20px;font-size:12px;padding-left:10px">
      <div style="height:25px;font-size:14px;padding-top:5px">
        {{musicData.name}}
      </div>
      <div style="height:25px;color:#bbb">
        {{musicData.artist}}
      </div>
    </div>
    <div style="float:right;font-size:25px">
      <svg v-if="onPlay" @click.stop="playToggle" t="1494489579501" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4257"><path d="M513.408 13.312c-275.584 0-498.944 223.36-498.944 498.944 0 77.312 17.536 150.272 48.96 215.616 0 0.192 0 0.192 0 0.192 0 0.128 0 0.128 0 0.128 0.128 0.192 0.256 0.448 0.32 0.768C63.936 728.832 63.936 728.832 64 728.832c3.392 4.864 13.248 3.968 22.336-0.64 9.408-4.864 13.76-13.696 11.008-19.456-28.16-59.648-43.968-126.144-43.968-196.48 0-254.08 205.952-460.032 460.032-460.032 254.08 0 460.032 206.016 460.032 460.032 0 254.016-205.952 460.096-460.032 460.096-81.152 0-157.248-21.12-223.424-57.984-0.128-0.128-0.192-0.32-0.384-0.32-5.184-4.032-14.592-0.32-21.12 8.192-6.4 8.256-6.144 19.328-1.344 23.552 0 0.128-0.128 0.128-0.128 0.32 72.704 41.344 156.8 65.152 246.464 65.152 275.52 0 498.88-223.36 498.88-498.944C1012.288 236.736 788.928 13.312 513.408 13.312z" p-id="4258"></path><path d="M156.544 833.472m-26.496 0a0.414 0.414 0 1 0 52.992 0 0.414 0.414 0 1 0-52.992 0Z" p-id="4259"></path><path d="M591.104 713.344 591.104 306.816c0-12.032-9.6-21.632-21.568-21.632s-21.568 9.6-21.568 21.632l0 406.528c0 11.904 9.6 21.568 21.568 21.568S591.104 725.184 591.104 713.344z" p-id="4260"></path><path d="M465.152 713.344 465.152 306.816c0-12.032-9.664-21.632-21.568-21.632s-21.568 9.6-21.568 21.632l0 406.528c0 11.904 9.664 21.568 21.568 21.568S465.152 725.184 465.152 713.344z" p-id="4261"></path></svg>
      <svg v-else @click.stop="playToggle" t="1494489248487" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373">
        <path d="M513.856 13.312c-276.736 0-500.992 224.256-500.992 500.992 0 77.568 17.6 151.04 49.152 216.704 0 0 0 0.128 0 0.128 0.064 0 0.064 0 0.064 0 0.064 0.32 0.192 0.576 0.32 0.704 0 0 0.064 0 0.128 0 3.456 4.864 13.248 4.032 22.464-0.704 9.472-4.736 13.824-13.632 11.072-19.52-28.288-59.968-44.16-126.72-44.16-197.312 0-255.104 206.784-461.952 461.952-461.952 255.04 0 461.888 206.784 461.888 461.952 0 255.232-206.784 462.08-461.888 462.08-81.408 0-157.888-21.184-224.32-58.176-0.128-0.192-0.256-0.32-0.384-0.448-5.184-3.968-14.656-0.32-21.248 8.256-6.336 8.32-6.08 19.456-1.344 23.744-0.064 0-0.064 0.192-0.192 0.192 73.024 41.536 157.376 65.472 247.488 65.472 276.608 0 500.992-224.384 500.992-501.12C1014.848 237.632 790.528 13.312 513.856 13.312z"
          p-id="2374"></path>
        <path d="M155.456 836.928m-26.496 0a0.414 0.414 0 1 0 52.992 0 0.414 0.414 0 1 0-52.992 0Z" p-id="2375"></path>
        <path d="M372.992 725.248c0 8 6.848 14.4 15.232 14.4 3.264 0 6.336-1.024 8.832-2.688l358.592-206.976c6.272-2.112 10.944-8.192 10.944-15.488 0-7.36-4.736-13.504-11.264-15.488L398.4 292.8C395.648 290.56 392.128 289.152 388.224 289.152c-8.384 0-15.232 6.464-15.232 14.4 0 1.152 0.192 2.24 0.384 3.264l0 415.104C373.184 723.008 372.992 724.032 372.992 725.248zM412.16 372.16c0-5.376 4.544-9.728 10.304-9.728 2.624 0 5.056 0.96 6.784 2.496l240.832 139.072c4.288 1.344 7.552 5.44 7.552 10.432 0 4.992-3.2 9.024-7.488 10.432l-241.792 139.84c-1.664 1.088-3.712 1.6-5.888 1.6-5.696 0-10.304-4.288-10.304-9.728 0-0.704 0.064-1.344 0.256-2.176L412.416 374.336C412.224 373.632 412.16 372.928 412.16 372.16z"
          p-id="2376"></path>
      </svg>
      <svg t="1494489375444" class="icon" style="width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3586"><path d="M928.368 851.257v-0.004c0-8.655-3.586-17.293-9.678-23.398l-91.219-91.219c-30.176-30.176-76.994 16.627-46.799 46.799l34.709 34.718h-687.853c-42.688 0-42.688 66.197 0 66.197h767.754c17.927 0 33.081-15.152 33.088-33.065v0zM928.368 851.257z" p-id="3587"></path><path d="M775.311 299.044h119.964c28.804 0 43.843-36.063 23.404-56.498l-91.219-91.219c-30.211-30.157-76.994 16.636-46.799 46.823l34.704 34.704h-40.034c-42.698 0-42.698 66.197 0 66.197v0zM775.311 299.044z" p-id="3588"></path><path d="M643.347 299.044h23.978c42.698 0 42.698-66.197 0-66.197h-23.978c-42.698 0-42.698 66.197 0 66.197v0zM643.347 299.044z" p-id="3589"></path><path d="M127.503 299.044h419.872c42.688 0 42.688-66.197 0-66.197h-419.872c-42.698 0-42.698 66.197 0 66.197v0zM127.503 299.044z" p-id="3590"></path><path d="M928.368 558.589c0-8.655-3.567-17.293-9.678-23.398l-91.219-91.219c-30.211-30.157-76.994 16.635-46.799 46.823l34.704 34.699h-687.844c-42.698 0-42.688 66.197 0 66.197h767.754c17.932 0 33.088-15.163 33.088-33.088v0 0zM928.368 558.589z" p-id="3591"></path></svg>
    </div>
    <audio v-audio :src="musicData.url"></audio>
  </div>
</template>

<script>
  import play from './Play.vue'
  export default {
    components:{
      play
    },
    data() {
      return {
        music: '',
        volume: 100,
        hideBox: false,
        showPlayBox:false
      }
    },
    computed: {
      musicData(){
        return this.$store.state.musicBox.musicData
      },
      onPlay(){
        return this.$store.state.musicBox.onPlay
      }
    },
    methods: {
      formatTime(time) {
        let minute = parseInt(time / 60)
        if (minute < 10) {
          minute = '0' + minute
        }
        let second = (time - minute * 60).toFixed(0)
        if (second < 10) {
          second = '0' + second
        }
        return minute + ':' + second
      },
      closeMusicBox() {
        this.$emit('closeMusicBox')
      },
      fastSeek(time) {
        this.music.currentTime = time / 100 * this.music.duration
      },
      changeVolume(volume) {
        this.music.volume = volume / 100
      },
      volumeToggle() {
        if (this.music.volume > 0) {
          this.oldVolume = this.music.volume
          this.volume = 0
          this.music.volume = 0
        } else {
          this.music.volume = this.oldVolume
          this.volume = Number((this.oldVolume * 100).toFixed(0))
        }
      },
      playToggle() {
        if (this.music.paused) {
          this.music.play()
          // this.onPlay = true
        } else {
          this.music.pause()
          // this.onPlay = false
        }
      }
    },
    directives: {
      audio: {
        inserted(el, binding, vnode) {
          el.oncanplaythrough = function () {
            vnode.context.music = el
            vnode.context.$store.commit('setMusicEl',el)
            vnode.context.playToggle()
            el.ontimeupdate = function () {
              vnode.context.$store.commit('setOnPlay', true)
              if (el.currentTime <= 0) {
                vnode.context.$store.commit('setOnPlay', false)
              }
              vnode.context.$store.commit('setCurrTime', el.currentTime)
              vnode.context.$store.commit('setPlayProgress', el.currentTime / el.duration * 100)
              // console.log(vnode.context.$store.state.musicBox.playProgress)
            }
            el.onpause = function () {
              vnode.context.$store.commit('setOnPlay', false)
            }
            el.onseeked = function () {}
          }
        }
      }
    }
  }

</script>
