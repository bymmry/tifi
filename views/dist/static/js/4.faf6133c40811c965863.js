webpackJsonp([4],{645:function(t,e,i){i(695);var n=i(2)(i(705),i(680),"data-v-334edcd6",null);t.exports=n.exports},654:function(t,e,i){var n=i(2)(null,i(655),null,null);t.exports=n.exports},655:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i-row",[i("i-col",{staticStyle:{"font-size":"40px"},attrs:{span:1}},[t._v("\n      可惜\n    ")]),t._v(" "),i("i-col",{attrs:{span:1,offset:"1"}},[i("div",{staticStyle:{width:"1px",height:"300px",background:"#ccc","margin-top":"5px"}})]),t._v(" "),i("i-col",{staticStyle:{"font-size":"22px"},attrs:{span:1}},[t._v("\n      您还没登录\n    ")]),t._v(" "),i("i-col",{attrs:{span:1,offset:"1"}},[i("div",{staticStyle:{width:"1px",height:"200px",background:"#ccc","margin-top":"5px"}})]),t._v(" "),i("i-col",{staticStyle:{"font-size":"18px"},attrs:{span:1}},[i("div",{staticClass:"text-link",staticStyle:{width:"20px"},on:{click:function(e){t.$store.commit("showUserBox","login")}}},[t._v("立即尝试")])]),t._v(" "),i("i-col",{staticClass:"text-center",staticStyle:{"font-size":"16px"},attrs:{span:3,offset:"14"}},[i("div",{staticClass:"dir",staticStyle:{"margin-top":"0","margin-bottom":"1.2rem"}}),t._v("\n      期待您的到来\n      "),i("div",{staticClass:"dir",staticStyle:{"margin-bottom":"0","margin-top":"1.2rem"}})])],1)],1)},staticRenderFns:[]}},662:function(t,e,i){e=t.exports=i(641)(!0),e.push([t.i,".select[data-v-334edcd6]{margin-bottom:1rem;transition:all .2s;font-size:13px}.select.active[data-v-334edcd6]{font-size:16px;font-weight:500}.select[data-v-334edcd6]:hover{font-size:16px;font-weight:400}.user-img[data-v-334edcd6]{width:100px;height:100px;border-radius:50%;margin:0 auto}.user-img-min[data-v-334edcd6]{width:50px;height:50px;border-radius:50%;margin:0 auto}.user-img-none[data-v-334edcd6]{width:100px;height:100px;border-radius:50%;line-height:100px;font-size:30px;font-weight:300;margin:0 auto;text-align:center}.user-img-none-min[data-v-334edcd6]{width:50px;height:50px;border-radius:50%;line-height:50px;font-size:20px;font-weight:300;margin:0 auto;text-align:center}","",{version:3,sources:["/Users/xiecp/tifi/views/src/components/Friends.vue"],names:[],mappings:"AACA,yBACE,mBAAoB,AACpB,mBAAsB,AACtB,cAAe,CAChB,AACD,gCACE,eAAgB,AAChB,eAAgB,CACjB,AACD,+BACE,eAAgB,AAChB,eAAgB,CACjB,AACD,2BACE,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,aAAc,CACf,AACD,+BACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,aAAc,CACf,AACD,gCACE,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,iBAAkB,CACnB,AACD,oCACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,iBAAkB,CACnB",file:"Friends.vue",sourcesContent:["\n.select[data-v-334edcd6]{\n  margin-bottom: 1rem;\n  transition: all 200ms;\n  font-size: 13px\n}\n.select.active[data-v-334edcd6]{\n  font-size: 16px;\n  font-weight: 500\n}\n.select[data-v-334edcd6]:hover{\n  font-size: 16px;\n  font-weight: 400\n}\n.user-img[data-v-334edcd6] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin: 0 auto\n}\n.user-img-min[data-v-334edcd6] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 0 auto\n}\n.user-img-none[data-v-334edcd6] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  line-height: 100px;\n  font-size: 30px;\n  font-weight: 300;\n  margin: 0 auto;\n  text-align: center\n}\n.user-img-none-min[data-v-334edcd6] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  line-height: 50px;\n  font-size: 20px;\n  font-weight: 300;\n  margin: 0 auto;\n  text-align: center\n}\n"],sourceRoot:""}])},680:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["member"==t.user.type?i("i-row",[i("i-col",{attrs:{span:"4"}},[i("affix",[i("div",{staticClass:"text-center",staticStyle:{width:"100px"}},[t.user.picUrl?i("img",{staticClass:"user-img card",attrs:{src:t.user.picUrl}}):i("div",{staticClass:"user-img-none card"},[t._v("\n            音\n          ")]),t._v(" "),i("br"),i("br"),t._v(" "),i("h3",[t._v(t._s(t.user.name))]),t._v(" "),i("tooltip",{attrs:{trigger:"hover",content:"您还没填写地区哦"}},[i("small",{staticStyle:{color:"#bbb"}},[t._v("来自  火星")])]),t._v(" "),i("br"),i("br"),t._v(" "),i("div",[i("div",{staticClass:"dir"}),t._v(" "),i("div",[i("div",{staticClass:"text-left",staticStyle:{"font-size":"12px"}},[t._v("\n                动态\n              ")]),t._v(" "),i("div",{staticClass:"text-right",staticStyle:{"font-size":"30px"}},[t._v("\n                145\n              ")])]),t._v(" "),i("div",{staticClass:"dir"}),t._v(" "),i("div",[i("div",{staticClass:"text-left",staticStyle:{"font-size":"12px"}},[t._v("\n                朋友\n              ")]),t._v(" "),i("div",{staticClass:"text-right",staticStyle:{"font-size":"30px"}},[t._v("\n                72\n              ")])]),t._v(" "),i("div",{staticClass:"dir"}),t._v(" "),i("div",[i("div",{staticClass:"text-left",staticStyle:{"font-size":"12px"}},[t._v("\n                关注\n              ")]),t._v(" "),i("div",{staticClass:"text-right",staticStyle:{"font-size":"30px"}},[t._v("\n                158\n              ")])]),t._v(" "),i("div",{staticClass:"dir"}),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"card c-btn",on:{click:function(e){t.myRenewVisible=!0}}},[t._v("发表动态")])])],1)]),t._v("\n       \n    ")],1),t._v(" "),i("i-col",{attrs:{span:"20"}},[i("i-row",{attrs:{gutter:32}},[i("i-col",{attrs:{span:"1"}},[i("affix",[i("h1",[t._v(t._s(t.selectVal[t.selected])+"动态")])]),t._v("\n           \n        ")],1),t._v(" "),i("i-col",{attrs:{span:"19",offset:"1"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.myRenewVisible?i("i-row",{staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[i("i-col",{attrs:{span:"3"}},[t.user.picUrl?i("img",{staticClass:"card user-cover-min",attrs:{src:t.user.picUrl}}):i("div",{staticClass:"card user-img-none-min text-center"},[t._v("\n                  音\n                ")])]),t._v(" "),i("i-col",{staticStyle:{"font-size":"12px"},attrs:{span:"21"}},[i("div",[i("mu-text-field",{staticStyle:{"font-size":"14px"},attrs:{hintText:"今天天气不错!",multiLine:"",rows:2,rowsMax:5,fullWidth:""},model:{value:t.myRenew,callback:function(e){t.myRenew=e},expression:"myRenew"}}),t._v(" "),i("button",{staticClass:"c-btn card",staticStyle:{padding:"5px 10px"}},[t._v("确认发表")]),t._v("  \n                  "),i("span",{staticClass:"cursor",on:{click:function(e){e.stopPropagation(),t.myRenewVisible=!1}}},[t._v("取消")])],1)])],1):t._e()],1),t._v(" "),t._l(t.renew,function(e,n){return i("i-row",{key:n,staticStyle:{"margin-bottom":"2rem"},attrs:{gutter:32}},[i("i-col",{attrs:{span:"3"}},[t.user.picUrl?i("img",{staticClass:"user-img-min card",attrs:{src:t.user.picUrl}}):i("div",{staticClass:"user-img-none-min card"},[t._v("\n                友\n              ")])]),t._v(" "),i("i-col",{staticStyle:{"font-size":"14px"},attrs:{span:"18"}},[i("span",{staticClass:"text-link"},[t._v(t._s(e.user.name))]),t._v("  \n              发布了动态:\n              "),i("br"),t._v(" "),i("span",{staticStyle:{"font-size":"14px",color:"#bbb"}},[t._v(t._s(e.time))]),t._v(" "),i("br"),t._v("\n              "+t._s(e.content)+"\n              "),i("br"),i("br"),t._v(" "),i("i-row",{staticStyle:{"font-size":"12px"}},[i("i-col",{staticClass:"text-left",attrs:{span:"4"}},[i("button",{staticClass:"card c-btn",staticStyle:{padding:"2px 10px"},on:{click:function(i){i.stopPropagation(),t.replyIndex=n,t.reply="@"+e.user.name+":"}}},[t._v("回复")])]),t._v(" "),i("i-col",{staticClass:"text-right cursor",attrs:{span:"20"}},[i("i-icon",{attrs:{type:"chatbubble-working"}}),t._v("评论("+t._s(e.reContent.length)+")  |  "),i("i-icon",{attrs:{type:"thumbsup"}}),t._v(" 赞("+t._s(e.like)+")\n                ")],1)],1),t._v(" "),i("div",{staticClass:"dir",staticStyle:{background:"#f0f0f0"}}),t._v(" "),i("transition",{attrs:{name:"fade",mode:"out-in"}},[t.replyIndex==n?i("i-row",{attrs:{gutter:32}},[i("i-col",{attrs:{span:"3"}},[t.user.picUrl?i("img",{staticClass:"card user-cover-min",attrs:{src:t.user.picUrl}}):i("div",{staticClass:"card user-img-none-min text-center"},[t._v("\n                      音\n                    ")])]),t._v(" "),i("i-col",{staticStyle:{"font-size":"12px"},attrs:{span:"21"}},[i("div",[i("mu-text-field",{staticStyle:{"font-size":"14px"},attrs:{hintText:"这条动态不错哦",multiLine:"",rows:2,rowsMax:5,fullWidth:""},model:{value:t.reply,callback:function(e){t.reply=e},expression:"reply"}}),t._v(" "),i("button",{staticClass:"c-btn card",staticStyle:{padding:"5px 10px"}},[t._v("确认回复")]),t._v("  \n                      "),i("span",{staticClass:"cursor",on:{click:function(e){e.stopPropagation(),t.replyIndex=-1,t.reply=""}}},[t._v("取消")])],1)])],1):t._e()],1)],1),t._v(" "),i("i-col",{staticClass:"text-center",staticStyle:{"padding-top":"10px"},attrs:{span:"3"}},[i("span",{staticClass:"cursor",staticStyle:{padding:"5px 10px",border:"1px solid #f44336","border-radius":"5px",color:"#f44336"}},[t._v("\n                关注+\n              ")])])],1)})],2),t._v(" "),i("i-col",{staticClass:"text-right cursor",attrs:{span:"3"}},[i("affix",t._l(t.select,function(e,n){return i("div",{staticClass:"select",class:{active:n==t.selected},on:{click:function(e){e.stopPropagation(),t.selected=n}}},[t._v("\n              "+t._s(e)+"\n            ")])})),t._v("\n           \n          ")],1)],1)],1)],1):i("visitor")],1)},staticRenderFns:[]}},695:function(t,e,i){var n=i(662);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(642)("e2ecd934",n,!0)},705:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(654),s=i.n(n);e.default={components:{visitor:s.a},data:function(){return{selected:0,selectVal:["发烧友","我的","朋友","我关注的"],select:["查看所有","我的动态","只看朋友","我关注的"],moreSong:!1,morePlaylist:!1,myRenewVisible:!1,myRenew:"",renew:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]},{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]},{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]},{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]},{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]},{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1]",id:"",user:{uid:"",name:"TIFI官方"},time:"5月1日 8:19 上午",like:130,reContent:[{picUrl:"",content:"1984年因获得首届香港十八区业余歌唱大赛冠军而出道。1985年发行个人首张专辑《Smile》。1993年发行的专辑《吻别》打破华语唱片在台湾的销量纪录[1] ",id:"",user:{uid:"",name:"TIFI官方回复"},time:"最近",like:220}]}],replyIndex:-1,reply:""}},computed:{user:function(){return this.$store.state.user}}}}});
//# sourceMappingURL=4.faf6133c40811c965863.js.map