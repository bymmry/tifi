webpackJsonp([10],{650:function(t,i,n){n(691);var e=n(2)(n(712),n(676),"data-v-0cd3923d",null);t.exports=e.exports},658:function(t,i,n){i=t.exports=n(641)(!0),i.push([t.i,".searchBtn[data-v-0cd3923d]{margin-top:.5rem;margin-bottom:4rem;text-align:center;cursor:pointer;font-size:1.5rem;padding:.5rem;width:100%}.demo-carousel[data-v-0cd3923d]{width:100%;height:200px;background:#f0f0f0;border-radius:4px;text-align:center;line-height:200px}.mini-box[data-v-0cd3923d]{background:#fff;position:fixed;padding:0 1rem;bottom:0;right:0;width:100%;z-index:99;line-height:50px;border:1px solid #ebebeb;font-size:20px}.cover[data-v-0cd3923d]{height:161.5px;width:100%;text-align:center;line-height:161.5px;background:#f0f0f0;border-radius:4px}.cover img[data-v-0cd3923d]{height:150px;width:100%}","",{version:3,sources:["/Users/xiecp/tifi/views/src/components/Recommend.vue"],names:[],mappings:"AACA,4BACE,iBAAkB,AAClB,mBAAoB,AACpB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,cAAe,AACf,UAAW,CACZ,AAQD,gCACE,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,CACnB,AACD,2BACE,gBAAiB,AACjB,eAAgB,AAChB,eAAgB,AAChB,SAAW,AACX,QAAU,AACV,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,yBAA0B,AAC1B,cAAe,CAChB,AACD,wBACE,eAAe,AACf,WAAW,AAEX,kBAAmB,AACnB,oBAAqB,AACrB,mBAAoB,AACpB,iBAAkB,CACnB,AACD,4BACE,aAAa,AACb,UAAW,CACZ",file:"Recommend.vue",sourcesContent:["\n.searchBtn[data-v-0cd3923d] {\n  margin-top: .5rem;\n  margin-bottom: 4rem;\n  text-align: center;\n  cursor: pointer;\n  font-size: 1.5rem;\n  padding: .5rem;\n  width: 100%\n}\n/*.sm-searchBtn {\n  text-align: center;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: .5rem;\n  width: 100%\n}*/\n.demo-carousel[data-v-0cd3923d] {\n  width: 100%;\n  height: 200px;\n  background: #f0f0f0;\n  border-radius: 4px;\n  text-align: center;\n  line-height: 200px\n}\n.mini-box[data-v-0cd3923d] {\n  background: #fff;\n  position: fixed;\n  padding: 0 1rem;\n  bottom: 0%;\n  right: 0%;\n  width: 100%;\n  z-index: 99;\n  line-height: 50px;\n  border: 1px solid #ebebeb;\n  font-size: 20px\n}\n.cover[data-v-0cd3923d] {\n  height:161.5px;\n  width:100%;\n  /*margin-bottom: 1rem;*/\n  text-align: center;\n  line-height: 161.5px;\n  background: #f0f0f0;\n  border-radius: 4px\n}\n.cover img[data-v-0cd3923d]{\n  height:150px;\n  width:100%;\n}\n\n"],sourceRoot:""}])},676:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("i-row",{attrs:{gutter:32}},[n("i-col",{attrs:{span:18}},[n("div",{staticStyle:{"margin-bottom":"3rem"}},[n("div",{staticStyle:{"font-size":"2rem"}},[t._v("TIFI MUSIC - 忠实至上")]),t._v(" "),n("div",{staticStyle:{"font-size":"1rem"}},[t._v("好音乐，天然在你身边")])]),t._v(" "),n("i-row",{staticStyle:{"line-height":"2rem","margin-bottom":"2rem"}},[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"4"}},[n("h1",[t._v("热门歌单")])]),t._v(" "),n("i-col",{attrs:{span:"18"}},t._l(t.hotPlayListTag,function(i,e){return n("span",{staticStyle:{cursor:"pointer","padding-left":"0.7rem"}},[n("span",{staticClass:"text-hover"},[t._v(t._s(i))]),t._v(" "),e!=t.hotPlayListTag.length-1?n("span",{staticStyle:{"padding-left":"0.7rem"}},[t._v("|")]):t._e()])})),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"2"}},[n("a",[t._v("更多")])])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"3rem"}},t._l(2,function(i){return n("i-row",{key:i,staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[t._l(t.hotPlaylist,function(e,a){return 4*(i-1)<=a&&a<4*i?n("i-col",{key:a,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[n("progressive-img",{staticClass:"card card-hover",attrs:{src:e.coverImgUrl,placeholder:e.coverImgUrl},nativeOn:{click:function(i){t.$store.commit("router",{id:e.id,path:"/playlist",picUrl:e.coverImgUrl})}}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              "+t._s(e.name)+"\n            ")])]):t._e()}),t._v(" "),t._l(8,function(e){return 4*(i-1)<=e-1&&e-1<4*i&&t.hotPlaylist.length<=0?n("i-col",{key:e,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[t._v("\n              loading...\n            ")]),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              ...\n            ")])]):t._e()})],2)})),t._v(" "),n("i-row",{staticStyle:{"line-height":"2rem","margin-bottom":"2rem"}},[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"4"}},[n("h1",[t._v("热门单曲")])]),t._v(" "),n("i-col",{attrs:{span:"18"}},t._l(t.hotPlayListTag,function(i,e){return n("span",{staticStyle:{cursor:"pointer","padding-left":"0.7rem"}},[n("span",{staticClass:"text-hover"},[t._v(t._s(i))]),t._v(" "),e!=t.hotPlayListTag.length-1?n("span",{staticStyle:{"padding-left":"0.7rem"}},[t._v("|")]):t._e()])})),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"2"}},[n("a",[t._v("更多")])])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"3rem"}},t._l(2,function(i){return n("i-row",{key:i,staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[t._l(t.hotSong,function(e,a){return 4*(i-1)<=a&&a<4*i?n("i-col",{key:a,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[n("progressive-img",{staticClass:"card card-hover",attrs:{src:e.album.picUrl,placeholder:e.album.picUrl},nativeOn:{click:function(i){t.wyPlayMusic(e)}}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              "+t._s(e.name)+" - "+t._s(e.artists[0].name)+"\n            ")])]):t._e()}),t._v(" "),t._l(8,function(e){return 4*(i-1)<=e-1&&e-1<4*i&&t.hotPlaylist.length<=0?n("i-col",{key:e,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[t._v("\n              loading...\n            ")]),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              ...\n            ")])]):t._e()})],2)})),t._v(" "),n("i-row",{staticStyle:{"line-height":"2rem","margin-bottom":"2rem"}},[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"4"}},[n("h1",[t._v("精选歌单")])]),t._v(" "),n("i-col",{attrs:{span:"18"}},t._l(t.hotPlayListTag,function(i,e){return n("span",{staticStyle:{cursor:"pointer","padding-left":"0.7rem"}},[n("span",{staticClass:"text-hover"},[t._v(t._s(i))]),t._v(" "),e!=t.hotPlayListTag.length-1?n("span",{staticStyle:{"padding-left":"0.7rem"}},[t._v("|")]):t._e()])})),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"2"}},[n("a",[t._v("更多")])])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"3rem"}},t._l(2,function(i){return n("i-row",{key:i,staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[t._l(t.hightPlaylist,function(e,a){return 4*(i-1)<=a&&a<4*i?n("i-col",{key:a,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[n("progressive-img",{staticClass:"card card-hover",attrs:{src:e.coverImgUrl,placeholder:e.coverImgUrl},nativeOn:{click:function(i){t.$store.commit("router",{id:e.id,path:"/playlist",picUrl:e.coverImgUrl})}}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              "+t._s(e.name)+"\n            ")])]):t._e()}),t._v(" "),t._l(8,function(e){return 4*(i-1)<=e-1&&e-1<4*i&&t.hotPlaylist.length<=0?n("i-col",{key:e,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[t._v("\n              loading...\n            ")]),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              ...\n            ")])]):t._e()})],2)})),t._v(" "),n("i-row",{staticStyle:{"line-height":"2rem","margin-bottom":"2rem"}},[n("i-col",{staticStyle:{"text-align":"left"},attrs:{span:"4"}},[n("h1",[t._v("热门歌手")])]),t._v(" "),n("i-col",{attrs:{span:"18"}},t._l(t.hotPlayListTag,function(i,e){return n("span",{staticStyle:{cursor:"pointer","padding-left":"0.7rem"}},[n("span",{staticClass:"text-hover"},[t._v(t._s(i))]),t._v(" "),e!=t.hotPlayListTag.length-1?n("span",{staticStyle:{"padding-left":"0.7rem"}},[t._v("|")]):t._e()])})),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"2"}},[n("a",[t._v("更多")])])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"3rem"}},t._l(2,function(i){return n("i-row",{key:i,staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[t._l(t.hotArtist,function(e,a){return 4*(i-1)<=a&&a<4*i?n("i-col",{key:a,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[n("progressive-img",{staticClass:"card card-hover",attrs:{src:e.img1v1Url,placeholder:e.img1v1Url},nativeOn:{click:function(i){t.$store.commit("router",{id:e.id,path:"/artist"})}}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              "+t._s(e.name)+"\n            ")])]):t._e()}),t._v(" "),t._l(8,function(e){return 4*(i-1)<=e-1&&e-1<4*i&&t.hotPlaylist.length<=0?n("i-col",{key:e,attrs:{span:"6"}},[n("div",{staticClass:"cover"},[t._v("\n              loading...\n            ")]),t._v(" "),n("div",{staticStyle:{"margin-top":".5rem"}},[t._v("\n              ...\n            ")])]):t._e()})],2)}))],1),t._v(" "),n("i-col",{attrs:{span:"6"}},[n("i-row",[n("i-col",{attrs:{span:"24"}},[n("md-button",{staticClass:"btn card searchBtn",nativeOn:{click:function(i){t.$store.commit("router","/search")}}},[n("i-icon",{attrs:{type:"search"}}),t._v("  今天也来点小曲\n          ")],1)],1)],1),t._v(" "),n("i-row",{staticStyle:{"margin-bottom":"2rem"}},[n("i-col",{attrs:{span:"12"}},[n("h3",[t._v("今日播放最多")])]),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[n("a",[t._v("Top 100")])])],1),t._v(" "),t._l(t.playTop,function(i,e){return n("i-row",{key:e,staticStyle:{"margin-bottom":"1rem"}},[n("i-col",{attrs:{span:"22"}},[n("div",{},[n("i-icon",{staticStyle:{cursor:"pointer"},attrs:{type:"play"},nativeOn:{click:function(n){t.playMusic(i)}}}),t._v("\n               "+t._s(i.music.name)+" - "+t._s(i.artist.name)+"\n          ")],1)]),t._v(" "),n("i-col",{attrs:{span:"2"}},[n("mu-badge",{attrs:{content:""+10*(10-e),color:"#41464b"}})],1)],1)}),t._v(" "),n("br"),n("br"),t._v(" "),n("i-row",{staticStyle:{"margin-bottom":"2rem"}},[n("i-col",{attrs:{span:"12"}},[n("h3",[t._v("新歌榜")])]),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[n("a",[t._v("Top 100")])])],1),t._v(" "),t._l(t.toplist,function(i,e){return n("i-row",{key:e,staticStyle:{"margin-bottom":"1rem"}},[n("i-col",{attrs:{span:"22"}},[n("div",{},[n("i-icon",{staticStyle:{cursor:"pointer"},attrs:{type:"play"},nativeOn:{click:function(n){t.wyPlayMusic(i)}}}),t._v("\n              "+t._s(i.name)+" - "+t._s(i.artists[0].name)+"\n          ")],1)]),t._v(" "),n("i-col",{attrs:{span:"2"}},[n("mu-badge",{attrs:{content:e+1+"",color:"#41464b"}})],1)],1)}),t._v(" "),n("br"),n("br"),t._v(" "),n("i-row",{staticStyle:{"margin-bottom":"2rem"}},[n("i-col",{attrs:{span:"12"}},[n("h3",[t._v("KTV榜")])]),t._v(" "),n("i-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[n("a",[t._v("Top 100")])])],1),t._v(" "),t._l(t.ktvTop,function(i,e){return n("i-row",{key:e,staticStyle:{"margin-bottom":"1rem"}},[n("i-col",{attrs:{span:"22"}},[n("div",{},[n("i-icon",{staticStyle:{cursor:"pointer"},attrs:{type:"play"},nativeOn:{click:function(n){t.wyPlayMusic(i)}}}),t._v("\n              "+t._s(i.name)+" - "+t._s(i.artists[0].name)+"\n          ")],1)]),t._v(" "),n("i-col",{attrs:{span:"2"}},[n("mu-badge",{attrs:{content:e+1+"",color:"#41464b"}})],1)],1)})],2)],1)],1)},staticRenderFns:[]}},691:function(t,i,n){var e=n(658);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(642)("9793b62e",e,!0)},712:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(34),a=n(43),r=n(299),s=n.n(r);i.default={components:{mdButton:s.a},data:function(){return{msg:"TIFI MUSIC - 大道至简 悟在天成",hotPlayListTag:["华语","流行","老歌","粤语","英文","摇滚","民谣"],hotPlaylist:[],hotSong:[],hightPlaylist:[],hotArtist:[],playTop:[],toplist:[],ktvTop:[],carImg:0}},methods:{playMusic:function(t){this.$store.commit("playMusic",{url:"http://localhost:5000"+t.music.url,artist:t.artist,album:t.album,music:t.music})},wyPlayMusic:function(t){var i={url:t.mp3Url,artist:{name:t.artists[0].name},album:{name:t.album.name,picUrl:t.album.picUrl},music:{name:t.name,wyID:t.id,url:t.mp3Url}};this.$store.dispatch("playMusic",i)}},mounted:function(){var t=this;a.a.getHotPlaylist(8).then(function(i){200==i.code&&(t.hotPlaylist=i.playlists)}).then(function(){a.a.getToplist(1).then(function(i){200==i.code&&(t.hotSong=i.result.tracks)})}).then(function(){a.a.getHightPlaylist(8).then(function(i){200==i.code&&(t.hightPlaylist=i.playlists)})}).then(function(){a.a.getHotArtist(8).then(function(i){200==i.code&&(console.log(i),t.hotArtist=i.artists)})}).then(function(){e.a.retrieveMusic().then(function(i){200===i.code&&(t.playTop=i.data)})}).then(function(){a.a.getToplist().then(function(i){200===i.code&&i.result.tracks.forEach(function(i,n){n<10&&t.toplist.push(i)})})}).then(function(){a.a.getToplist(7).then(function(i){200===i.code&&i.result.tracks.forEach(function(i,n){n<10&&t.ktvTop.push(i)})})})}}}});
//# sourceMappingURL=10.d3f68e25c472e7c5bda7.js.map