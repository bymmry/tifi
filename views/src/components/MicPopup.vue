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

</style>
<template>
  <div class="mic-popup card text-center">
    <i-circle :percent="micPercent" :size="250" stroke-color="#41464b" :stroke-width="2" :trail-width="1">
      <i-icon type="mic-a" class="search-mic-big"></i-icon>
      <br/><br/>
      <button class="c-btn card" @click="startMic">{{micText}}</button>
    </i-circle>
    <br/><br/>
    <button class="c-btn card" id="saveMic">保存录音</button>
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
        micText: '开始识别'
      }
    },
    methods: {
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
            formData.append('audioTest', file)
            makeXMLHttpRequest('http://localhost:5000/audioRec', formData, function () {
              var downloadURL = 'http://localhost:5000/audioRec' + file.name;
              console.log('File uploaded to this path:', downloadURL);
            });
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
              if(count==1){
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
                _this.micText = '重新识别'
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
      }
    }
  }

</script>
