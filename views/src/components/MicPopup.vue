<style scoped>
  .mic-popup {
    position: absolute;
    padding-top: 80px;
    height: 400px;
    width: 100%;
    background: #fff;
    top: 110%;
    z-index: 1
  }

  .search-mic-big {
    font-size: 150px
  }

  .result-div {
    position: absolute;
    top: -33%;
    left: -10%;
    height: 320px;
    width: 320px;
    border-radius: 50%;
    background: #fff;
    font-size: 16px;
    padding: 50px;
    z-index: 1
  }

  .result-img {
    width: 120px;
    height: 120px;
    border-radius: 50%
  }

</style>
<template>
  <div class="mic-popup card text-center">
    <i-circle :percent="micPercent" :size="250" stroke-color="#41464b" :stroke-width="2" :trail-width="1">
      <i-icon type="mic-a" class="search-mic-big"></i-icon>
      <br/><br/>
      <button class="c-btn card" @click="startMic">{{micText}}</button>
      <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
        <div v-if="resultShow" class="result-div text-center card">
          <img @click.stop="playMusic(result)" :src="result.album.picUrl" class="cursor result-img card3">
          <div class="dir"></div>
          <br/>
          <div class="cursor" @click.stop="playMusic(result)">
            {{result.name}}
          </div>
          <div style="font-size:14px;margin:.7rem 0">
            {{result.artist.name}}
          </div>
          <div style="font-size:12px">
            {{result.album.name}}
          </div>
          <div @click="resultShow=false;micText='开始识别'" class="cursor" style="font-size:10px;margin-top:1rem">
            <svg t="1494570290786" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3039">
              <path d="M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358l-288.991 288.994-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992 288.993 288.992c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z"
                p-id="3040"></path>
            </svg>
          </div>
        </div>
      </transition>

    </i-circle>
    <br/><br/>
    <div @click="close" class="cursor" style="font-size:14px">
      <svg t="1494570290786" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3039">
        <path d="M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358l-288.991 288.994-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992 288.993 288.992c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z"
          p-id="3040"></path>
      </svg>
    </div>
    <!--<button class="c-btn card" id="saveMic">保存录音</button>-->
  </div>
</template>
<script>
  let MediaStreamRecorder = require('msr')
  import {
    Message
  } from 'iview'
  import api from '../axios'
  export default {
    data() {
      return {
        micToggle: false,
        micPercent: 0,
        micText: '开始识别',
        resultShow: false,
        result: {}
      }
    },
    methods: {
      close(){
        this.$emit('close', false)
      },
      startMic() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
        if (navigator.getUserMedia) {

          let _this = this

          function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
            navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
          }
          let mediaConstraints = {
            audio: true
          };

          function uploadToPythonServer(blob) {
            var file = new File([blob], 'msr-' + (new Date).toISOString().replace(/:|\./g, '-') + '.wav', {
              type: 'audio/wav'
            });
            var formData = new FormData();
            formData.append('audioMic', file)
            api.audioRec(formData).then((data) => {
              if (data.code == 200) {
                console.log(data)
                _this.result = data.result
                _this.resultShow = true
              }else{
                _this.micText = '开始识别'
              }
            })
            // makeXMLHttpRequest('http://localhost:5000/api/audioRec', formData, function () {
            //   var downloadURL = 'http://localhost:5000/api/audioRec' + file.name;
            //   console.log('File uploaded to this path:', downloadURL);
            // });
          }

          function makeXMLHttpRequest(url, data, callback) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
              if (request.readyState == 4 && request.status == 200) {
                callback();
              }
            };
            request.open('POST', url);
            request.send(data);
          }
          captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
          let mediaRecorder
          document.querySelector('#saveMic').onclick = function () {
            mediaRecorder.save()
          }

          function onMediaSuccess(stream) {
            // let audio = document.getElementById('audio');
            // audio.src = URL.createObjectURL(stream)
            // audio.play()
            mediaRecorder = new MediaStreamRecorder(stream)
            mediaRecorder.mimeType = 'audio/wav';
            let count = 0
            mediaRecorder.ondataavailable = function (blob) {
              count++
              if (count == 1) {
                console.log('正在录音', blob)
                uploadToPythonServer(blob)
              }
            };
            mediaRecorder.start(10000)

            if (!_this.micToggle) {
              _this.micToggle = true
              _this.micText = '正在识别'
              let micSetInterval = setInterval(() => {
                if (_this.micToggle) {
                  _this.micPercent++
                }
              }, 100)
              setTimeout(() => {
                _this.micToggle = false
                _this.micText = '识别中...'
                window.clearInterval(micSetInterval)
                mediaRecorder.stop()
              }, 10100)
            }
          }

          function onMediaError(e) {
            console.error('media error', e);
          }
        } else {
          Message.error('您的浏览器不支持录音功能,请使用最新版用谷歌浏览器')
        }
      },
      playMusic(item) {
        this.$store.commit('playMuisc', {
          url: 'http://localhost:5000' + item.url,
          artist: item.artist,
          album: item.album,
          music: item
        })
      },
      test() {
        alert(1)
      }
    },
    destroyed() {
      console.log(1111)
    }
  }

</script>
