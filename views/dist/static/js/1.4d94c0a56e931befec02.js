webpackJsonp([1],{651:function(t,e,i){i(692);var a=i(2)(i(713),i(677),"data-v-0e58c7f7",null);t.exports=a.exports},659:function(t,e,i){e=t.exports=i(641)(!0),e.push([t.i,".search-bg[data-v-0e58c7f7]{position:absolute;background:#f0f0f0;top:0;height:calc(150px + 9rem);z-index:-1;width:100%;left:0}.search-input[data-v-0e58c7f7]{background:#fff;width:100%;border:none;outline:none;height:50px;font-size:20px;padding:0 50px}.search-icon[data-v-0e58c7f7]{right:20px}.search-icon[data-v-0e58c7f7],.search-mic[data-v-0e58c7f7]{color:#bababa;font-size:24px;position:absolute;top:13px;cursor:pointer;z-index:1}.search-mic[data-v-0e58c7f7]{left:20px}.song-result-content[data-v-0e58c7f7]{line-height:40px}.song-result-content.active[data-v-0e58c7f7]{background:#f0f0f0}.album-result-content[data-v-0e58c7f7]{line-height:50px}.album-result-content.active[data-v-0e58c7f7]{background:#f0f0f0}","",{version:3,sources:["/Users/xiecp/tifi/views/src/components/Search.vue"],names:[],mappings:"AACA,4BACE,kBAAmB,AACnB,mBAAoB,AACpB,MAAO,AACP,0BAA2B,AAC3B,WAAY,AACZ,WAAY,AACZ,MAAO,CACR,AACD,+BACE,gBAAiB,AACjB,WAAY,AACZ,YAAa,AACb,aAAc,AACd,YAAa,AACb,eAAgB,AAChB,cAAgB,CACjB,AACD,8BAKE,UAAY,CAGb,AACD,2DARE,cAAe,AACf,eAAgB,AAChB,kBAAmB,AACnB,SAAU,AAEV,eAAgB,AAChB,SAAU,CAUX,AARD,6BAKE,SAAW,CAGZ,AACD,sCACE,gBAAiB,CAClB,AACD,6CACE,kBAAmB,CACpB,AACD,uCACE,gBAAiB,CAClB,AACD,8CACE,kBAAmB,CACpB",file:"Search.vue",sourcesContent:["\n.search-bg[data-v-0e58c7f7] {\n  position: absolute;\n  background: #f0f0f0;\n  top: 0;\n  height: calc(150px + 9rem);\n  z-index: -1;\n  width: 100%;\n  left: 0\n}\n.search-input[data-v-0e58c7f7] {\n  background: #fff;\n  width: 100%;\n  border: none;\n  outline: none;\n  height: 50px;\n  font-size: 20px;\n  padding: 0 50px;\n}\n.search-icon[data-v-0e58c7f7] {\n  color: #bababa;\n  font-size: 24px;\n  position: absolute;\n  top: 13px;\n  right: 20px;\n  cursor: pointer;\n  z-index: 1\n}\n.search-mic[data-v-0e58c7f7] {\n  color: #bababa;\n  font-size: 24px;\n  position: absolute;\n  top: 13px;\n  left: 20px;\n  cursor: pointer;\n  z-index: 1\n}\n.song-result-content[data-v-0e58c7f7] {\n  line-height: 40px\n}\n.song-result-content.active[data-v-0e58c7f7] {\n  background: #f0f0f0\n}\n.album-result-content[data-v-0e58c7f7] {\n  line-height: 50px\n}\n.album-result-content.active[data-v-0e58c7f7] {\n  background: #f0f0f0\n}\n\n"],sourceRoot:""}])},663:function(t,e,i){e=t.exports=i(641)(!0),e.push([t.i,".mic-popup[data-v-369f38b4]{position:absolute;padding-top:80px;height:400px;width:100%;background:#fff;top:110%;z-index:1}.search-mic-big[data-v-369f38b4]{font-size:150px}.result-div[data-v-369f38b4]{position:absolute;top:-33%;left:-10%;height:320px;width:320px;border-radius:50%;background:#fff;font-size:16px;padding:50px;z-index:1}.result-img[data-v-369f38b4]{width:120px;height:120px;border-radius:50%}","",{version:3,sources:["/Users/xiecp/tifi/views/src/components/MicPopup.vue"],names:[],mappings:"AACA,4BACE,kBAAmB,AACnB,iBAAkB,AAClB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,SAAU,AACV,SAAU,CACX,AACD,iCACE,eAAgB,CACjB,AACD,6BACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,aAAc,AACd,YAAa,AACb,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,aAAc,AACd,SAAU,CACX,AACD,6BACE,YAAa,AACb,aAAc,AACd,iBAAkB,CACnB",file:"MicPopup.vue",sourcesContent:["\n.mic-popup[data-v-369f38b4] {\n  position: absolute;\n  padding-top: 80px;\n  height: 400px;\n  width: 100%;\n  background: #fff;\n  top: 110%;\n  z-index: 1\n}\n.search-mic-big[data-v-369f38b4] {\n  font-size: 150px\n}\n.result-div[data-v-369f38b4] {\n  position: absolute;\n  top: -33%;\n  left: -10%;\n  height: 320px;\n  width: 320px;\n  border-radius: 50%;\n  background: #fff;\n  font-size: 16px;\n  padding: 50px;\n  z-index: 1\n}\n.result-img[data-v-369f38b4] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%\n}\n\n"],sourceRoot:""}])},670:function(t,e,i){(function(i){function a(t){if(!t)throw"MediaStream is mandatory.";this.start=function(i){var a;"undefined"!=typeof MediaRecorder?a=d:(C||y||w)&&(-1!==this.mimeType.indexOf("video")?a=h:-1!==this.mimeType.indexOf("audio")&&(a=u)),"image/gif"===this.mimeType&&(a=f),"audio/wav"!==this.mimeType&&"audio/pcm"!==this.mimeType||(a=u),this.recorderType&&(a=this.recorderType),e=new a(t),e.blobs=[];var n=this;e.ondataavailable=function(t){e.blobs.push(t),n.ondataavailable(t)},e.onstop=this.onstop,e.onStartedDrawingNonBlankFrames=this.onStartedDrawingNonBlankFrames,e=o(e,this),e.start(i)},this.onStartedDrawingNonBlankFrames=function(){},this.clearOldRecordedFrames=function(){e&&e.clearOldRecordedFrames()},this.stop=function(){e&&e.stop()},this.ondataavailable=function(t){console.log("ondataavailable..",t)},this.onstop=function(t){console.warn("stopped..",t)},this.save=function(t,i){if(!t){if(!e)return;return void ConcatenateBlobs(e.blobs,e.blobs[0].type,function(t){r(t)})}r(t,i)},this.pause=function(){e&&(e.pause(),console.log("Paused recording.",this.mimeType||e.mimeType))},this.resume=function(){e&&(e.resume(),console.log("Resumed recording.",this.mimeType||e.mimeType))},this.recorderType=null,this.mimeType="video/webm",this.disableLogs=!1;var e}function n(t){if(!t)throw"MediaStream is mandatory.";var e=this,i=c();this.stream=t,this.start=function(c){function d(t){s++,e.ondataavailable(t)}n=new a(t),o=new a(t),n.mimeType="audio/ogg",o.mimeType="video/webm";for(var u in this)"function"!=typeof this[u]&&(n[u]=o[u]=this[u]);n.ondataavailable=function(t){r[s]||(r[s]={}),r[s].audio=t,r[s].video&&!r[s].onDataAvailableEventFired&&(r[s].onDataAvailableEventFired=!0,d(r[s]))},o.ondataavailable=function(t){if(i)return e.ondataavailable({video:t,audio:t});r[s]||(r[s]={}),r[s].video=t,r[s].audio&&!r[s].onDataAvailableEventFired&&(r[s].onDataAvailableEventFired=!0,d(r[s]))},o.onstop=n.onstop=function(t){e.onstop(t)},i?o.start(c):(o.onStartedDrawingNonBlankFrames=function(){o.clearOldRecordedFrames(),n.start(c)},o.start(c))},this.stop=function(){n&&n.stop(),o&&o.stop()},this.ondataavailable=function(t){console.log("ondataavailable..",t)},this.onstop=function(t){console.warn("stopped..",t)},this.pause=function(){n&&n.pause(),o&&o.pause()},this.resume=function(){n&&n.resume(),o&&o.resume()};var n,o,r={},s=0}function o(t,e){for(var i in e)"function"!=typeof e[i]&&(t[i]=e[i]);return t}function r(t,e){if(!t)throw"Blob object is required.";if(!t.type)try{t.type="video/webm"}catch(t){}var i=(t.type||"video/webm").split("/")[1];if(e&&-1!==e.indexOf(".")){var a=e.split(".");e=a[0],i=a[1]}var n=(e||Math.round(9999999999*Math.random())+888888888)+"."+i;if(void 0!==navigator.msSaveOrOpenBlob)return navigator.msSaveOrOpenBlob(t,n);if(void 0!==navigator.msSaveBlob)return navigator.msSaveBlob(t,n);var o=document.createElement("a");o.href=b.createObjectURL(t),o.target="_blank",o.download=n,navigator.mozGetUserMedia&&(o.onclick=function(){(document.body||document.documentElement).removeChild(o)},(document.body||document.documentElement).appendChild(o));var r=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});o.dispatchEvent(r),navigator.mozGetUserMedia||b.revokeObjectURL(o.href)}function s(t){var e=["Bytes","KB","MB","GB","TB"];if(0===t)return"0 Bytes";var i=parseInt(Math.floor(Math.log(t)/Math.log(1e3)),10);return(t/Math.pow(1e3,i)).toPrecision(3)+" "+e[i]}function c(){var t=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,e=!!window.chrome&&!t;if(void 0!==window.InstallTrigger)return!0;if(!e)return!1;var i,a,n=(navigator.appVersion,navigator.userAgent),o=""+parseFloat(navigator.appVersion),r=parseInt(navigator.appVersion,10);return e&&(i=n.indexOf("Chrome"),o=n.substring(i+7)),-1!==(a=o.indexOf(";"))&&(o=o.substring(0,a)),-1!==(a=o.indexOf(" "))&&(o=o.substring(0,a)),r=parseInt(""+o,10),isNaN(r)&&(o=""+parseFloat(navigator.appVersion),r=parseInt(navigator.appVersion,10)),r>=49}function d(t){function e(){if("active"in t){if(!t.active)return!1}else if("ended"in t&&t.ended)return!1;return!0}var i=this;this.start=function(e,n){if(i.mimeType||(i.mimeType="video/webm"),-1!==i.mimeType.indexOf("audio")&&t.getVideoTracks().length&&t.getAudioTracks().length){var o;navigator.mozGetUserMedia?(o=new x,o.addTrack(t.getAudioTracks()[0])):o=new x(t.getAudioTracks()),t=o}-1!==i.mimeType.indexOf("audio")&&(i.mimeType=C?"audio/webm":"audio/ogg"),i.dontFireOnDataAvailableEvent=!1;var r={mimeType:i.mimeType};i.disableLogs||n||console.log("Passing following params over MediaRecorder API.",r),a&&(a=null),C&&!c()&&(r="video/vp8");try{a=new MediaRecorder(t,r)}catch(e){a=new MediaRecorder(t)}"canRecordMimeType"in a&&!1===a.canRecordMimeType(i.mimeType)&&(i.disableLogs||console.warn("MediaRecorder API seems unable to record mimeType:",i.mimeType)),a.ignoreMutedMedia=i.ignoreMutedMedia||!1;var s=!1;a.ondataavailable=function(t){if(!i.dontFireOnDataAvailableEvent&&t.data&&t.data.size&&!(t.data.size<26800)&&!s){s=!0;var n=i.getNativeBlob?t.data:new Blob([t.data],{type:i.mimeType||"video/webm"});i.ondataavailable(n),i.dontFireOnDataAvailableEvent=!0,a&&(a.stop(),a=null),i.start(e,"__disableLogs")}},a.onerror=function(t){i.disableLogs||("InvalidState"===t.name?console.error("The MediaRecorder is not in a state in which the proposed operation is allowed to be executed."):"OutOfMemory"===t.name?console.error("The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute."):"IllegalStreamModification"===t.name?console.error("A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute."):"OtherRecordingError"===t.name?console.error("Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute."):"GenericError"===t.name?console.error("The UA cannot provide the codec or recording option that has been requested.",t):console.error("MediaRecorder Error",t)),a&&"inactive"!==a.state&&"stopped"!==a.state&&a.stop()};try{a.start(36e5)}catch(t){a=null}setTimeout(function(){a&&"recording"===a.state&&a.requestData()},e)},this.stop=function(t){a&&"recording"===a.state&&(a.requestData(),setTimeout(function(){i.dontFireOnDataAvailableEvent=!0,a&&"recording"===a.state&&a.stop(),a=null},2e3))},this.pause=function(){a&&"recording"===a.state&&a.pause()},this.ondataavailable=function(t){console.log("recorded-blob",t)},this.resume=function(){if(this.dontFireOnDataAvailableEvent){this.dontFireOnDataAvailableEvent=!1;var t=i.disableLogs;return i.disableLogs=!0,this.record(),void(i.disableLogs=t)}a&&"paused"===a.state&&a.resume()},this.clearRecordedData=function(){a&&(this.pause(),this.dontFireOnDataAvailableEvent=!0,this.stop())};var a;!function t(){if(a)return!1===e()?void i.stop():void setTimeout(t,1e3)}()}function u(t){this.start=function(a){a=a||1e3,e=new l(t,this),e.record(),i=setInterval(function(){e.requestData()},a)},this.stop=function(){e&&(e.stop(),clearTimeout(i))},this.pause=function(){e&&e.pause()},this.resume=function(){e&&e.resume()},this.ondataavailable=function(){};var e,i}function l(t,e){function i(t,e){for(var i=t.length+e.length,a=new Float32Array(i),n=0,o=0;o<i;)a[o++]=t[n],a[o++]=e[n],n++;return a}function a(t,e){for(var i=new Float32Array(e),a=0,n=t.length,o=0;o<n;o++){var r=t[o];i.set(r,a),a+=r.length}return i}function n(t,e,i){for(var a=i.length,n=0;n<a;n++)t.setUint8(e+n,i.charCodeAt(n))}function o(t){for(var e=t.length,i=new Int16Array(e);e--;)i[e]=65535*t[e];return i.buffer}var r=44100;_.AudioContextConstructor||(_.AudioContextConstructor=new _.AudioContext),r=_.AudioContextConstructor.sampleRate;var c,d,u,l,h=[],p=[],f=!1,v=0,m=e.sampleRate||r,g=e.mimeType||"audio/wav",A=g.indexOf("audio/pcm")>-1,b=e.audioChannels||2;this.record=function(){f=!0,h.length=p.length=0,v=0},this.requestData=function(){if(!C){if(0===v)return void(y=!1);y=!0;var t=h.slice(0),r=p.slice(0),c=v;h.length=p.length=[],v=0,y=!1;var d=a(t,c),u=d;if(2===b){u=i(d,a(r,c))}if(A){var l=new Blob([o(u)],{type:"audio/pcm"});return console.debug("audio recorded blob size:",s(l.size)),void e.ondataavailable(l)}var f=new ArrayBuffer(44+2*u.length),g=new DataView(f);n(g,0,"RIFF"),g.setUint32(4,44+2*u.length-8,!0),n(g,8,"WAVE"),n(g,12,"fmt "),g.setUint32(16,16,!0),g.setUint16(20,1,!0),g.setUint16(22,b,!0),g.setUint32(24,m,!0),g.setUint32(28,m*b*2,!0),g.setUint16(32,2*b,!0),g.setUint16(34,16,!0),n(g,36,"data"),g.setUint32(40,2*u.length,!0);for(var w=u.length,x=44,_=0;_<w;_++)g.setInt16(x,32767*u[_],!0),x+=2;var l=new Blob([g],{type:"audio/wav"});console.debug("audio recorded blob size:",s(l.size)),e.ondataavailable(l)}},this.stop=function(){f=!1,this.requestData(),u.disconnect()};var l=_.AudioContextConstructor;_.VolumeGainNode=l.createGain();var d=_.VolumeGainNode;_.AudioInput=l.createMediaStreamSource(t);var u=_.AudioInput;u.connect(d);var w=e.bufferSize||2048;if(0===e.bufferSize&&(w=0),l.createJavaScriptNode)c=l.createJavaScriptNode(w,b,b);else{if(!l.createScriptProcessor)throw"WebAudio API has no support on this browser.";c=l.createScriptProcessor(w,b,b)}w=c.bufferSize,console.debug("using audio buffer-size:",w);var y=!1;window.scriptprocessornode=c,1===b&&console.debug("All right-channels are skipped.");var C=!1;this.pause=function(){C=!0},this.resume=function(){C=!1},c.onaudioprocess=function(t){if(f&&!y&&!C){var e=t.inputBuffer.getChannelData(0);if(h.push(new Float32Array(e)),2===b){var i=t.inputBuffer.getChannelData(1);p.push(new Float32Array(i))}v+=w}},d.connect(c),c.connect(l.destination)}function h(t){this.start=function(a){a=a||1e3,e=new p(t,this);for(var n in this)"function"!=typeof this[n]&&(e[n]=this[n]);e.record(),i=setInterval(function(){e.requestData()},a)},this.stop=function(){e&&(e.stop(),clearTimeout(i))},this.clearOldRecordedFrames=function(){e&&e.clearOldRecordedFrames()},this.pause=function(){e&&e.pause()},this.resume=function(){e&&e.resume()},this.ondataavailable=function(){};var e,i}function p(t,e){function i(){if(v)return u=(new Date).getTime(),void setTimeout(i,500);if(!c){if(o)return setTimeout(i,100);var t=(new Date).getTime()-u;if(!t)return i();u=(new Date).getTime(),!f.isHTMLObject&&d.paused&&d.play(),p.drawImage(d,0,0,h.width,h.height),c||l.frames.push({duration:t,image:h.toDataURL("image/webp")}),r||a(l.frames[l.frames.length-1])||(r=!0,e.onStartedDrawingNonBlankFrames()),setTimeout(i,10)}}function a(t,e,i){var a=document.createElement("canvas");a.width=h.width,a.height=h.height;var n,o,r,s=a.getContext("2d"),c={r:0,g:0,b:0},d=Math.sqrt(Math.pow(255,2)+Math.pow(255,2)+Math.pow(255,2)),u=e&&e>=0&&e<=1?e:0,l=i&&i>=0&&i<=1?i:0,p=new Image;p.src=t.image,s.drawImage(p,0,0,h.width,h.height);var f=s.getImageData(0,0,h.width,h.height);n=0,o=f.data.length,r=f.data.length/4;for(var v=0;v<o;v+=4){var m={r:f.data[v],g:f.data[v+1],b:f.data[v+2]};Math.sqrt(Math.pow(m.r-c.r,2)+Math.pow(m.g-c.g,2)+Math.pow(m.b-c.b,2))<=d*u&&n++}return!(r-n<=r*l)}function n(t,e,i,a){var n=document.createElement("canvas");n.width=h.width,n.height=h.height;for(var o=n.getContext("2d"),r=[],s=-1===e,c=e&&e>0&&e<=t.length?e:t.length,d={r:0,g:0,b:0},u=Math.sqrt(Math.pow(255,2)+Math.pow(255,2)+Math.pow(255,2)),l=i&&i>=0&&i<=1?i:0,p=a&&a>=0&&a<=1?a:0,f=!1,v=0;v<c;v++){var m,g,A;if(!f){var b=new Image;b.src=t[v].image,o.drawImage(b,0,0,h.width,h.height);var w=o.getImageData(0,0,h.width,h.height);m=0,g=w.data.length,A=w.data.length/4;for(var y=0;y<g;y+=4){var C={r:w.data[y],g:w.data[y+1],b:w.data[y+2]};Math.sqrt(Math.pow(C.r-d.r,2)+Math.pow(C.g-d.g,2)+Math.pow(C.b-d.b,2))<=u*l&&m++}}!f&&A-m<=A*p||(s&&(f=!0),r.push(t[v]))}return r=r.concat(t.slice(c)),r.length<=0&&r.push(t[t.length-1]),r}this.record=function(a){this.width||(this.width=320),this.height||(this.height=240),this.video&&this.video instanceof HTMLVideoElement&&(this.width||(this.width=d.videoWidth||d.clientWidth||320),this.height||(this.height=d.videoHeight||d.clientHeight||240)),this.video||(this.video={width:this.width,height:this.height}),this.canvas&&this.canvas.width&&this.canvas.height||(this.canvas={width:this.width,height:this.height}),h.width=this.canvas.width,h.height=this.canvas.height,this.video&&this.video instanceof HTMLVideoElement?(this.isHTMLObject=!0,d=this.video.cloneNode()):(d=document.createElement("video"),d.src=b.createObjectURL(t),d.width=this.video.width,d.height=this.video.height),d.muted=!0,d.play(),u=(new Date).getTime(),l=new k.Video(e.speed,e.quality),console.log("canvas resolutions",h.width,"*",h.height),console.log("video width/height",d.width||h.width,"*",d.height||h.height),i()},this.clearOldRecordedFrames=function(){l.frames=[]};var o=!1;this.requestData=function(){if(!v){if(!l.frames.length)return void(o=!1);o=!0;var t=l.frames.slice(0);l.frames=n(t,-1),l.compile(function(t){e.ondataavailable(t),console.debug("video recorded blob size:",s(t.size))}),l.frames=[],o=!1}};var r=!1,c=!1;this.stop=function(){c=!0,this.requestData()};var d,u,l,h=document.createElement("canvas"),p=h.getContext("2d"),f=this,v=!1;this.pause=function(){v=!0},this.resume=function(){v=!1}}function f(t){function e(){c=Date.now();var t=new Blob([new Uint8Array(u.stream().bin)],{type:"image/gif"});a.ondataavailable(t),u.stream().bin=[]}if("undefined"==typeof GIFEncoder)throw"Please link: https://cdn.webrtc-experiment.com/gif-recorder.js";this.start=function(t){function a(t){if(i)return void setTimeout(a,500,t);h=requestAnimationFrame(a),void 0===typeof d&&(d=t),t-d<90||(r.paused&&r.play(),o.drawImage(r,0,0,c,p),u.addFrame(o),d=t)}t=t||1e3;var c=this.videoWidth||320,p=this.videoHeight||240;n.width=r.width=c,n.height=r.height=p,u=new GIFEncoder,u.setRepeat(0),u.setDelay(this.frameRate||this.speed||200),u.setQuality(this.quality||1),u.start(),s=Date.now(),h=requestAnimationFrame(a),l=setTimeout(e,t)},this.stop=function(){h&&(cancelAnimationFrame(h),clearTimeout(l),e())};var i=!1;this.pause=function(){i=!0},this.resume=function(){i=!1},this.ondataavailable=function(){},this.onstop=function(){};var a=this,n=document.createElement("canvas"),o=n.getContext("2d"),r=document.createElement("video");r.muted=!0,r.autoplay=!0,r.src=b.createObjectURL(t),r.play();var s,c,d,u,l,h=null}var v,m;void 0!==a&&(a.MultiStreamRecorder=n);var g="Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45";!function(t){"undefined"==typeof window&&("undefined"==typeof window&&void 0!==i&&(i.navigator={userAgent:g,getUserMedia:function(){}},t.window=i),"undefined"==typeof document&&(t.document={},document.createElement=document.captureStream=document.mozCaptureStream=function(){return{}}),"undefined"==typeof location&&(t.location={protocol:"file:",href:"",hash:""}),"undefined"==typeof screen&&(t.screen={width:0,height:0}))}(void 0!==i?i:window);var A=window.AudioContext;void 0===A&&("undefined"!=typeof webkitAudioContext&&(A=webkitAudioContext),"undefined"!=typeof mozAudioContext&&(A=mozAudioContext)),"undefined"==typeof window&&(window={});var A=window.AudioContext;void 0===A&&("undefined"!=typeof webkitAudioContext&&(A=webkitAudioContext),"undefined"!=typeof mozAudioContext&&(A=mozAudioContext));var b=window.URL;void 0===b&&"undefined"!=typeof webkitURL&&(b=webkitURL),"undefined"!=typeof navigator?(void 0!==navigator.webkitGetUserMedia&&(navigator.getUserMedia=navigator.webkitGetUserMedia),void 0!==navigator.mozGetUserMedia&&(navigator.getUserMedia=navigator.mozGetUserMedia)):navigator={getUserMedia:function(){},userAgent:g};var w=!(-1===navigator.userAgent.indexOf("Edge")||!navigator.msSaveBlob&&!navigator.msSaveOrOpenBlob),y=!1;"undefined"!=typeof opera&&navigator.userAgent&&-1!==navigator.userAgent.indexOf("OPR/")&&(y=!0);var C=!w&&!w&&!!navigator.webkitGetUserMedia,x=window.MediaStream;void 0===x&&"undefined"!=typeof webkitMediaStream&&(x=webkitMediaStream),void 0!==x&&("getVideoTracks"in x.prototype||(x.prototype.getVideoTracks=function(){if(!this.getTracks)return[];var t=[];return this.getTracks.forEach(function(e){-1!==e.kind.toString().indexOf("video")&&t.push(e)}),t},x.prototype.getAudioTracks=function(){if(!this.getTracks)return[];var t=[];return this.getTracks.forEach(function(e){-1!==e.kind.toString().indexOf("audio")&&t.push(e)}),t}),"stop"in x.prototype||(x.prototype.stop=function(){this.getAudioTracks().forEach(function(t){t.stop&&t.stop()}),this.getVideoTracks().forEach(function(t){t.stop&&t.stop()})})),"undefined"!=typeof location&&0===location.href.indexOf("file:")&&console.error("Please load this HTML file on HTTP or HTTPS.");var _={AudioContext:A},_={AudioContext:window.AudioContext||window.webkitAudioContext};void 0!==a&&(a.MediaRecorderWrapper=d),void 0!==a&&(a.StereoAudioRecorder=u),void 0!==a&&(a.StereoAudioRecorderHelper=l),void 0!==a&&(a.WhammyRecorder=h),void 0!==a&&(a.WhammyRecorderHelper=p),void 0!==a&&(a.GifRecorder=f);var k=function(){function t(t,e){this.frames=[],t||(t=1),this.duration=1e3/t,this.quality=e||.8}function e(t){var e=b.createObjectURL(new Blob([t.toString(),"this.onmessage =  function (e) {"+t.name+"(e.data);}"],{type:"application/javascript"})),i=new Worker(e);return b.revokeObjectURL(e),i}function i(t){function e(t){var e=a(t);if(!e)return[];for(var n=[{id:440786851,data:[{data:1,id:17030},{data:1,id:17143},{data:4,id:17138},{data:8,id:17139},{data:"webm",id:17026},{data:2,id:17031},{data:2,id:17029}]},{id:408125543,data:[{id:357149030,data:[{data:1e6,id:2807729},{data:"whammy",id:19840},{data:"whammy",id:22337},{data:h(e.duration),id:17545}]},{id:374648427,data:[{id:174,data:[{data:1,id:215},{data:1,id:29637},{data:0,id:156},{data:"und",id:2274716},{data:"V_VP8",id:134},{data:"VP8",id:2459272},{data:1,id:131},{id:224,data:[{data:e.width,id:176},{data:e.height,id:186}]}]}]}]}],o=0,r=0;o<t.length;){var c=[],d=0;do{c.push(t[o]),d+=t[o].duration,o++}while(o<t.length&&d<3e4);var u={id:524531317,data:i(r,0,c)};n[1].data.push(u),r+=d}return s(n)}function i(t,e,i){return[{data:t,id:231}].concat(i.map(function(t){var i=c({discardable:0,frame:t.data.slice(4),invisible:0,keyframe:1,lacing:0,trackNum:1,timecode:Math.round(e)});return e+=t.duration,{data:i,id:163}}))}function a(t){if(!t[0])return void postMessage({error:"Something went wrong. Maybe WebP format is not supported in the current browser."});for(var e=t[0].width,i=t[0].height,a=t[0].duration,n=1;n<t.length;n++)a+=t[n].duration;return{duration:a,width:e,height:i}}function n(t){for(var e=[];t>0;)e.push(255&t),t>>=8;return new Uint8Array(e.reverse())}function o(t){return new Uint8Array(t.split("").map(function(t){return t.charCodeAt(0)}))}function r(t){var e=[];t=(t.length%8?new Array(9-t.length%8).join("0"):"")+t;for(var i=0;i<t.length;i+=8)e.push(parseInt(t.substr(i,8),2));return new Uint8Array(e)}function s(t){for(var e=[],i=0;i<t.length;i++){var a=t[i].data;"object"==typeof a&&(a=s(a)),"number"==typeof a&&(a=r(a.toString(2))),"string"==typeof a&&(a=o(a));var c=a.size||a.byteLength||a.length,d=Math.ceil(Math.ceil(Math.log(c)/Math.log(2))/8),u=c.toString(2),l=new Array(7*d+7+1-u.length).join("0")+u,h=new Array(d).join("0")+"1"+l;e.push(n(t[i].id)),e.push(r(h)),e.push(a)}return new Blob(e,{type:"video/webm"})}function c(t){var e=0;if(t.keyframe&&(e|=128),t.invisible&&(e|=8),t.lacing&&(e|=t.lacing<<1),t.discardable&&(e|=1),t.trackNum>127)throw"TrackNumber > 127 not supported";return[128|t.trackNum,t.timecode>>8,255&t.timecode,e].map(function(t){return String.fromCharCode(t)}).join("")+t.frame}function d(t){for(var e=t.RIFF[0].WEBP[0],i=e.indexOf("*"),a=0,n=[];a<4;a++)n[a]=e.charCodeAt(i+3+a);var o,r,s;return s=n[1]<<8|n[0],o=16383&s,s=n[3]<<8|n[2],r=16383&s,{width:o,height:r,data:e,riff:t}}function u(t,e){return parseInt(t.substr(e+4,4).split("").map(function(t){var e=t.charCodeAt(0).toString(2);return new Array(8-e.length+1).join("0")+e}).join(""),2)}function l(t){for(var e=0,i={};e<t.length;){var a=t.substr(e,4),n=u(t,e),o=t.substr(e+4+4,n);e+=8+n,i[a]=i[a]||[],"RIFF"===a||"LIST"===a?i[a].push(l(o)):i[a].push(o)}return i}function h(t){return[].slice.call(new Uint8Array(new Float64Array([t]).buffer),0).map(function(t){return String.fromCharCode(t)}).reverse().join("")}var p=new e(t.map(function(t){var e=d(l(atob(t.image.slice(23))));return e.duration=t.duration,e}));postMessage(p)}return t.prototype.add=function(t,e){if("canvas"in t&&(t=t.canvas),"toDataURL"in t&&(t=t.toDataURL("image/webp",this.quality)),!/^data:image\/webp;base64,/gi.test(t))throw"Input must be formatted properly as a base64 encoded DataURI of type image/webp";this.frames.push({image:t,duration:e||this.duration})},t.prototype.compile=function(t){var a=e(i);a.onmessage=function(e){if(e.data.error)return void console.error(e.data.error);t(e.data)},a.postMessage(this.frames)},{Video:t}}();void 0!==a&&(a.Whammy=k),function(){window.ConcatenateBlobs=function(t,e,i){function a(){if(!t[r])return n();var e=new FileReader;e.onload=function(t){o.push(t.target.result),r++,a()},e.readAsArrayBuffer(t[r])}function n(){var t=0;o.forEach(function(e){t+=e.byteLength});var a=new Uint16Array(t),n=0;o.forEach(function(t){var e=t.byteLength;e%2!=0&&(t=t.slice(0,e-1)),a.set(new Uint16Array(t),n),n+=e});var r=new Blob([a.buffer],{type:e});i(r)}var o=[],r=0;a()}}(),t.exports=a,v=[],void 0!==(m=function(){return a}.apply(e,v))&&(t.exports=m)}).call(e,i(13))},671:function(t,e,i){i(696);var a=i(2)(i(706),i(682),"data-v-369f38b4",null);t.exports=a.exports},677:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-bg"}),t._v(" "),i("i-row",[i("i-col",{attrs:{span:"18",offset:"3"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"min-card search-input",attrs:{type:"text",placeholder:"今天想听点什么..."},domProps:{value:t.keywords},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.search(e)},input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),i("i-icon",{staticClass:"search-mic",attrs:{type:"mic-a"},nativeOn:{click:function(e){t.micPopup=!t.micPopup}}}),t._v(" "),i("i-icon",{staticClass:"search-icon",attrs:{type:"search"},nativeOn:{click:function(e){t.search(e)}}}),t._v(" "),i("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[t.micPopup?i("mic-popup",{on:{close:t.closeMic}}):t._e()],1)],1)],1),t._v(" "),i("br"),i("br"),i("br"),t._v(" "),i("i-row",[i("i-col",{attrs:{span:"24"}},[i("div",{staticClass:"min-card card text-center",staticStyle:{"line-height":"60px",height:"60px"}},[t._l(t.type,function(e,a){return e.color?i("tag",{key:a,staticStyle:{margin:"0 1rem"},attrs:{color:e.color,type:"dot"},nativeOn:{click:function(e){t.searchDetil(a)}}},[t._v("\n          "+t._s(e.str)+t._s(a==t.activeType&&t.resultShow?"("+t.result.count+")个结果":"")+"\n        ")]):t._e()}),t._v(" "),t._l(t.type,function(e,a){return 4==a?i("tag",{key:a,staticStyle:{margin:"0 1rem"},attrs:{type:"dot"},nativeOn:{click:function(e){t.searchDetil(a)}}},[t._v("\n          "+t._s(e.str)+t._s(a==t.activeType&&t.resultShow?"("+t.result.count+")个结果":"")+"\n        ")]):t._e()})],2)])],1),t._v(" "),i("br"),i("br"),t._v(" "),i("div",{staticClass:"card",staticStyle:{"min-height":"400px",padding:"50px"}},[1===t.type[t.activeType].code&&t.resultShow?i("div",[t._l(t.result.data,function(e,a){return i("div",{staticClass:"song-result-content text-center",class:{active:a%2==0}},[0==a?i("i-row",{staticStyle:{background:"#fff"}},[i("i-col",{attrs:{span:"24"}},[i("i-row",[i("i-col",{attrs:{span:"2"}},[t._v("\n                 \n              ")]),t._v(" "),i("i-col",{attrs:{span:"4"}},[t._v("\n                歌手名\n              ")]),t._v(" "),i("i-col",{attrs:{span:"10"}},[t._v("\n                歌曲名\n              ")]),t._v(" "),i("i-col",{attrs:{span:"8"}},[t._v("\n                所属专辑\n              ")])],1),t._v(" "),i("div",{staticClass:"dir",staticStyle:{"margin-bottom":"0"}})],1)],1):t._e(),t._v(" "),i("i-row",[i("i-col",{attrs:{span:"2"}},[i("i-icon",{staticStyle:{cursor:"pointer"},attrs:{type:"play"},nativeOn:{click:function(i){t.wyPlayMusic(e)}}})],1),t._v(" "),i("i-col",{attrs:{span:"4"}},[t._v("\n            "+t._s(e.artists[0].name)+"\n            ")]),t._v(" "),i("i-col",{attrs:{span:"10"}},[t._v("\n            "+t._s(e.name)+"\n            ")]),t._v(" "),i("i-col",{attrs:{span:"8"}},[t._v("\n            "+t._s(e.album.name)+"\n            ")])],1)],1)}),t._v(" "),i("br"),i("br")],2):t._e(),t._v(" "),10===t.type[t.activeType].code&&t.resultShow?i("div",[i("i-row",[i("i-col",{attrs:{span:"22",offset:"1"}},t._l(t.result.data,function(e,a){return i("i-row",{key:a,staticClass:"text-center",attrs:{gutter:64}},t._l(t.result.data,function(e,n){return 4*a<=n&&n<4*(a+1)?i("i-col",{key:n,attrs:{span:"6"}},[i("div",{staticStyle:{height:"150px","margin-bottom":".5rem"}},[i("img",{staticClass:"card card-hover",staticStyle:{height:"150px",width:"100%"},attrs:{src:e.picUrl},on:{click:function(i){t.$store.commit("router",{path:"/album",id:e.id})}}})]),t._v(" "),i("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticStyle:{"font-size":"12px",color:"#bbb"}},[t._v(t._s(e.artist.name)+" - "+t._s(t.formatTime(e.publishTime)))]),t._v(" "),i("br")]):t._e()}))}))],1),t._v(" "),i("br"),i("br")],1):t._e(),t._v(" "),100===t.type[t.activeType].code&&t.resultShow?i("div",[i("i-row",[i("i-col",{attrs:{span:"22",offset:"1"}},t._l(t.result.data,function(e,a){return i("i-row",{key:a,staticClass:"album-result-content text-center",attrs:{gutter:64}},t._l(t.result.data,function(e,n){return 4*a<=n&&n<4*(a+1)?i("i-col",{key:n,attrs:{span:"6"}},[i("div",{staticClass:"cursor",staticStyle:{height:"150px"}},[i("img",{staticClass:"card card-hover",staticStyle:{height:"150px",width:"100%"},attrs:{src:e.img1v1Url},on:{click:function(i){t.$store.commit("router",{path:"/artist",id:e.id})}}})]),t._v(" "),i("div",[t._v(t._s(e.name))])]):t._e()}))}))],1),t._v(" "),i("br"),i("br")],1):t._e(),t._v(" "),1e3===t.type[t.activeType].code&&t.resultShow?i("div",[i("i-row",[i("i-col",{attrs:{span:"22",offset:"1"}},t._l(t.result.data,function(e,a){return i("i-row",{key:a,staticClass:"text-center",attrs:{gutter:64}},t._l(t.result.data,function(e,n){return 4*a<=n&&n<4*(a+1)?i("i-col",{key:n,attrs:{span:"6"}},[i("div",{staticStyle:{height:"150px","margin-bottom":".5rem"}},[i("img",{staticClass:"card card-hover",staticStyle:{height:"150px",width:"100%"},attrs:{src:e.coverImgUrl},on:{click:function(i){t.$store.commit("router",{path:"/playlist",id:e.id})}}})]),t._v(" "),i("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticStyle:{"font-size":"12px",color:"#bbb"}},[t._v("\n                "+t._s(e.trackCount)+"首 - "+t._s(e.playCount)+"次播放\n              ")]),t._v(" "),i("br")]):t._e()}))}))],1),t._v(" "),i("br"),i("br")],1):t._e(),t._v(" "),1004===t.type[t.activeType].code&&t.resultShow?i("div",[t._l(t.result.data,function(e,a){return i("i-row",{key:a,staticClass:"text-center",attrs:{gutter:64}},t._l(t.result.data,function(e,n){return 4*a<=n&&n<4*(a+1)?i("i-col",{key:n,attrs:{span:"6"}},[i("div",{staticStyle:{height:"100px","margin-bottom":".5rem"}},[i("img",{staticClass:"card card-hover",staticStyle:{height:"100px",width:"100%"},attrs:{src:e.cover},on:{click:function(i){t.$store.commit("router",{id:e.id,path:"/playMv"})}}})]),t._v(" "),i("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticStyle:{"font-size":"12px",color:"#bbb"}},[t._v("\n            "+t._s(e.artistName)+" - "+t._s(t.formatTimeMi(e.duration/1e3))+"\n          ")]),t._v(" "),i("br")]):t._e()}))}),t._v(" "),i("br"),i("br")],2):t._e(),t._v(" "),t.resultShow?i("mu-pagination",{staticStyle:{"justify-content":"center"},attrs:{total:t.result.count,current:t.currPage,defaultPageSize:t.pageSize},on:{pageChange:t.pageChange}}):t._e()],1),t._v(" "),i("div",{staticStyle:{height:"80px"}})],1)},staticRenderFns:[]}},682:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mic-popup card text-center"},[i("i-circle",{attrs:{percent:t.micPercent,size:250,"stroke-color":"#41464b","stroke-width":2,"trail-width":1}},[i("i-icon",{staticClass:"search-mic-big",attrs:{type:"mic-a"}}),t._v(" "),i("br"),i("br"),t._v(" "),i("button",{staticClass:"c-btn card",on:{click:t.startMic}},[t._v(t._s(t.micText))]),t._v(" "),i("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[t.resultShow?i("div",{staticClass:"result-div text-center card"},[i("img",{staticClass:"cursor result-img card3",attrs:{src:t.result.album.picUrl},on:{click:function(e){e.stopPropagation(),t.playMusic(t.result)}}}),t._v(" "),i("div",{staticClass:"dir"}),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"cursor",on:{click:function(e){e.stopPropagation(),t.playMusic(t.result)}}},[t._v("\n          "+t._s(t.result.name)+"\n        ")]),t._v(" "),i("div",{staticStyle:{"font-size":"14px",margin:".7rem 0"}},[t._v("\n          "+t._s(t.result.artist.name)+"\n        ")]),t._v(" "),i("div",{staticStyle:{"font-size":"12px"}},[t._v("\n          "+t._s(t.result.album.name)+"\n        ")]),t._v(" "),i("div",{staticClass:"cursor",staticStyle:{"font-size":"10px","margin-top":"1rem"},on:{click:function(e){t.resultShow=!1,t.micText="开始识别"}}},[i("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{t:"1494570290786",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3039"}},[i("path",{attrs:{d:"M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358l-288.991 288.994-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992 288.993 288.992c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z","p-id":"3040"}})])])]):t._e()])],1),t._v(" "),i("br"),i("br"),t._v(" "),i("div",{staticClass:"cursor",staticStyle:{"font-size":"14px"},on:{click:t.close}},[i("svg",{staticClass:"icon",staticStyle:{width:"1em",height:"1em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{t:"1494570290786",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3039"}},[i("path",{attrs:{d:"M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358l-288.991 288.994-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992 288.993 288.992c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z","p-id":"3040"}})])])],1)},staticRenderFns:[]}},692:function(t,e,i){var a=i(659);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(642)("30c59cd4",a,!0)},696:function(t,e,i){var a=i(663);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(642)("507fb7af",a,!0)},706:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(25),n=(i.n(a),i(34)),o=i(670);e.default={data:function(){return{micToggle:!1,micPercent:0,micText:"开始识别",resultShow:!1,result:{}}},methods:{close:function(){this.$emit("close",!1)},startMic:function(){if(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia){var t=function(t){var e=new File([t],"msr-"+(new Date).toISOString().replace(/:|\./g,"-")+".wav",{type:"audio/wav"}),i=new FormData;i.append("audioMic",e),n.a.audioRec(i).then(function(t){200==t.code?(console.log(t),r.result=t.result,r.resultShow=!0):r.micText="开始识别"})},e=function(e){c=new o(e),c.mimeType="audio/wav";var i=0;if(c.ondataavailable=function(e){1==++i&&(console.log("正在录音",e),t(e))},c.start(1e4),!r.micToggle){r.micToggle=!0,r.micText="正在识别";var a=setInterval(function(){r.micToggle&&r.micPercent++},100);setTimeout(function(){r.micToggle=!1,r.micText="识别中...",window.clearInterval(a),c.stop()},10100)}},i=function(t){console.error("media error",t)},r=this,s={audio:!0};!function(t,e,i){navigator.mediaDevices.getUserMedia(t).then(e).catch(i)}(s,e,i);var c=void 0;document.querySelector("#saveMic").onclick=function(){c.save()}}else a.Message.error("您的浏览器不支持录音功能,请使用最新版用谷歌浏览器")},playMusic:function(t){this.$store.commit("playMusic",{url:"http://localhost:5000"+t.url,artist:t.artist,album:t.album,music:t})},test:function(){alert(1)}},destroyed:function(){console.log(1111)}}},713:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(i(34),i(43)),n=i(671),o=i.n(n),r=i(0),s=i.n(r);s.a.locale("zh-cn"),e.default={components:{MicPopup:o.a},data:function(){return{micPopup:!1,micToggle:!1,micPercent:0,micText:"开始识别",keywords:"",activeType:0,type:[{code:1,val:"song",str:"歌曲",color:"blue"},{code:10,val:"album",str:"专辑",color:"green"},{code:100,val:"artist",str:"歌手",color:"red"},{code:1e3,val:"playlist",str:"歌单",color:"yellow"},{code:1004,val:"mv",str:"MV"}],currPage:1,resultShow:!1,result:{count:10,data:[]},pageSize:10}},watch:{},methods:{closeMic:function(t){this.micPopup=!1},pageChange:function(t){this.currPage=t,console.log(t),this.search()},search:function(){var t=this;this.resultShow=!1;var e=this.keywords,i=this.type[this.activeType];10==i.code&&(this.pageSize=12),100==i.code&&(this.pageSize=12),1004==i.code&&(this.pageSize=12);var n=(this.currPage-1)*this.pageSize;a.a.search(e,i.code,n,this.pageSize).then(function(e){200===e.code&&(t.result.count=e.result[i.val+"Count"],t.result.data=e.result[i.val+"s"],t.resultShow=!0)})},searchDetil:function(t){this.activeType=t,this.currPage=1,this.search()},wyPlayMusic:function(t){var e={url:t.mp3Url,artist:{name:t.artists[0].name},album:{name:t.album.name,picUrl:t.album.picUrl},music:{name:t.name,wyID:t.id,url:t.mp3Url}};this.$store.commit("playMusic",e)},formatTime:function(t){return s()(t).format("YYYY 年")},formatTimeMi:function(t){var e=parseInt(t/60);e<10&&(e="0"+e);var i=(t-60*e).toFixed(0);return i<10&&(i="0"+i),e+":"+i},fixedPlayLeft:function(t){this.playLeft=t}},mounted:function(){}}}});
//# sourceMappingURL=1.4d94c0a56e931befec02.js.map