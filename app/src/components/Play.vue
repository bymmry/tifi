<style scoped>
  .play-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: #fff
  }

  .blur-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100%;
    -webkit-filter: blur(40px) brightness(0.6);
    -moz-filter: blur(40px) brightness(0.6);
    filter: blur(40px) brightness(0.6);
    z-index: 1
  }

  .main {
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 0;
    left: 0;
    color: #fff
  }

  .header {
    font-size: 18px;
    padding: 2rem .8rem
  }

  .cover-main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative
  }

  .cover-circle {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 0 auto;
    -webkit-animation: change 50s linear infinite
  }

  .cover {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .cover-progress {
    position: absolute;
    left: calc(50% - 150px);
    z-index: 1
    /*width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1*/
  }

  @-webkit-keyframes change {
    0% {
      -webkit-transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(180deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  .playTime {
    text-align: center;
    font-size: 14px;
    margin-bottom: 2rem
  }

  .lyric-main {
    height: 100px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
    line-height: 20px
  }

  .activeLrc {
    color: #f45754;
    transition: all 418ms;
  }

  .more-lyric {
    position: fixed;
    top: 50px;
  }

  .progress {
    padding: 0 2rem
  }

  .control {
    position: fixed;
    bottom: 2%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 50px;
    line-height: 50px
  }

  .comment {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    font-weight: 300
  }

</style>
<template>
  <div class="play-box">
    <div class="blur-div" :style="{'background':'url('+musicData.cover+') center'}">

    </div>
    <div class="main" v-show="!commentShow">
      <div class="header">
        <div style="padding:0 2rem;height:50px">
          <div>
            {{musicData.name}}
            <div style="float:right">
              <svg @click="music.currentTime=0;music.play()" t="1494498618783" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8306">
                <path d="M4.096 442.368c0-2.048 4.096-6.144 4.096-6.144l155.648-102.4 102.4 155.648c4.096 6.144 2.048 14.336-4.096 18.432s-14.336 2.048-18.432-4.096L157.696 368.64l-133.12 88.064c-6.144 4.096-14.336 2.048-18.432-4.096C4.096 448.512 4.096 444.416 4.096 442.368z"
                  p-id="8307"></path>
                <path d="M149.504 354.304c2.048-8.192 10.24-10.24 14.336-8.192 6.144 2.048 10.24 10.24 8.192 14.336-67.584 221.184 57.344 454.656 278.528 522.24 221.184 67.584 454.656-57.344 522.24-278.528S917.504 149.504 696.32 81.92c-120.832-36.864-251.904-16.384-358.4 55.296-6.144 4.096-14.336 2.048-18.432-4.096-4.096-6.144-2.048-14.336 4.096-18.432 112.64-75.776 251.904-98.304 378.88-57.344 233.472 71.68 366.592 321.536 294.912 555.008S677.888 978.944 444.416 907.264C210.944 837.632 77.824 587.776 149.504 354.304z"
                  p-id="8308"></path>
              </svg>
              <svg @click="$store.commit('playBox',false)" t="1494498763016" class="icon" style="width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10186">
                <path d="M917.333333 490.666667l-759.146667 0 368.896-368.917333c8.341333-8.341333 8.341333-21.824 0-30.165333-8.341333-8.362667-21.824-8.341333-30.165333 0l-405.312 405.312c-1.984 1.984-3.541333 4.330667-4.629333 6.954667-1.002667 2.432-1.472 5.013333-1.536 7.594667 0 0.192-0.106667 0.362667-0.106667 0.533333s0.106667 0.341333 0.106667 0.512c0.064 2.602667 0.533333 5.184 1.536 7.616 2.176 5.226667 6.314667 9.365333 11.541333 11.541333 2.538667 1.045333 5.205333 1.557333 7.893333 1.6 0.085333 0 0.170667 0.042667 0.256 0.042667l810.666667 0c11.776 0 21.333333-9.536 21.333333-21.333333S929.109333 490.666667 917.333333 490.666667z"
                  p-id="10187"></path>
                <path d="M346.069333 721.237333 346.069333 721.237333l-96.32-96.32c-8.341333-8.341333-21.824-8.341333-30.186667 0s-8.341333 21.824 0 30.165333l181.013333 181.013333 0 0 96.32 96.32c8.341333 8.341333 21.824 8.341333 30.186667 0s8.341333-21.824 0-30.165333L346.069333 721.237333z"
                  p-id="10188"></path>
              </svg>
            </div>
          </div>
          <div style="margin:.1rem 0;font-size:12px;font-weight:300">
            {{musicData.artist}}
          </div>
        </div>
        <div class="wdir">
        </div>
        <div class="cover-main">
          <mu-circular-progress mode="determinate" class="cover-progress" :strokeWidth="3" :size="301" color="red" :value="playProgress"
          />
          <div class="cover-circle">
            <img :src="musicData.cover" class="cover" style="padding:20px;border:none">
          </div>
        </div>
        <div class="playTime">
          {{formatTime(currTime)}} / {{formatTime(music.duration)}}
        </div>
        <div class="lyric-main" style="height:90px;overflow:hidden" v-lyricScroll>
          <div v-if="index == activeLrcIndex || (index-1) == activeLrcIndex || (index+1) == activeLrcIndex" :class="{activeLrc:index===activeLrcIndex}"
            v-for="(item,index) in lyricText">
            <span v-if="item">{{item}}</span>
            <span v-else>~</span>
          </div>
          <!--<svg v-if="moreLyric" t="1494524136827" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4523">
            <path d="M850.026 223.191l-54.811-54.803-282.655 282.655-282.655-282.655-54.803 54.803 337.458 337.46 337.463-337.46zM512.561 761.102l-282.655-282.656-54.803 54.803 337.458 337.46 337.463-337.46-54.811-54.803-282.655 282.656zM512.561 761.102z"
              p-id="4524"></path>
          </svg>
          <svg v-else t="1494524042349" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275">
            <path d="M492.058 220.21l-294.518 299.827c-12.401 12.678-12.401 33.182 0 45.864 12.451 12.687 32.687 12.687 45.142 0l273.968-279.009 274.072 279.014c12.455 12.683 32.587 12.683 45.040 0 12.456-12.687 12.456-33.191 0-45.869l-294.415-299.831c-6.8-6.979-15.821-9.775-24.699-9.198-8.816-0.582-17.796 2.218-24.59 9.198v0l-0.001 0.005zM516.648 445.953c-8.82-0.641-17.796 2.214-24.59 9.087l-294.518 299.834c-12.397 12.678-12.397 33.182 0 45.973 12.451 12.677 32.691 12.572 45.146 0l273.963-279.122 274.072 279.122c12.455 12.572 32.586 12.677 45.040 0 12.456-12.79 12.456-33.294 0-45.973l-294.413-299.834c-6.795-6.871-15.82-9.723-24.7-9.087v0 0 0z"
              p-id="4276"></path>
          </svg>-->
        </div>
        <div class="more-lyric">

        </div>
        <div class="progress">
          <mu-slider :value="playProgress" @change="changeTime" />
        </div>
        <div class="control">
          <svg t="1494551573737" class="icon" style="font-size:25px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2920">
            <path d="M511.548722 923.112242c-7.806803 0-15.613606-2.963495-21.590737-8.896624-12.012591-11.92561-12.082176-31.330566-0.157589-43.344181 2.564405-2.581802 256.975722-258.84428 306.748313-308.614823 58.745962-58.745962 93.121887-123.401518 99.412151-186.973392 5.987365-60.495816-14.224979-115.847471-58.44818-160.070672-42.089607-42.088584-90.715071-59.105143-144.533814-50.562583-52.2889 8.296967-107.533109 40.287565-159.758564 92.511997-5.747911 5.748934-13.543458 8.976442-21.670555 8.976442-8.129144 0-15.923668-3.228531-21.671579-8.976442-52.225455-52.225455-107.467617-84.216054-159.75754-92.511997-53.81465-8.547677-102.443184 8.473999-144.532791 50.562583-44.224224 44.224224-64.435545 99.57588-58.449203 160.070672 6.291287 63.571874 40.667212 128.228453 99.413174 186.973392 22.810518 22.808472 181.696202 182.502567 183.298699 184.114275 11.93789 11.997242 11.887748 31.404244-0.110517 43.342134-11.997242 11.933797-31.404244 11.887748-43.342134-0.109494-1.602498-1.609661-160.431899-161.248498-183.187159-184.004781C114.324792 536.714891 73.842799 459.159538 66.140373 381.318682c-7.742335-78.246085 19.285229-152.630213 76.104305-209.448266 55.948243-55.95029 124.235512-79.378885 197.479677-67.75822 57.564044 9.131985 116.504434 39.813774 171.824367 89.209788 55.320956-49.396014 114.261347-80.077803 171.82539-89.209788 73.241095-11.628852 141.531434 11.80793 197.479677 67.75822 56.819077 56.818053 83.847663 131.203204 76.104305 209.448266-7.702426 77.840856-48.184419 155.396209-117.068276 224.280066C790.197046 655.29152 535.862477 911.476227 533.300119 914.058029 527.309684 920.091442 519.429203 923.112242 511.548722 923.112242z"
              p-id="2921"></path>
          </svg>
          <svg t="1494522462128" class="icon" style="font-size:25px;width: 3em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4418">
            <path d="M883.2 44.8c-12.8 0-32 6.4-38.4 12.8L211.2 448c-12.8 12.8-25.6 25.6-25.6 44.8V25.6c0-12.8-12.8-25.6-32-25.6-12.8 0-25.6 12.8-25.6 25.6v966.4c0 19.2 12.8 32 25.6 32s25.6-12.8 25.6-25.6V531.2c0 19.2 12.8 32 25.6 38.4l633.6 396.8c12.8 6.4 25.6 12.8 44.8 12.8 38.4 0 76.8-32 76.8-70.4V115.2c0-38.4-38.4-70.4-76.8-70.4z m19.2 864c0 12.8-19.2 19.2-25.6 12.8l-640-396.8c-6.4-6.4-6.4-12.8-6.4-12.8s0-6.4 6.4-12.8l633.6-396.8h12.8c6.4 0 19.2 6.4 19.2 12.8v793.6z"
              p-id="4419"></path>
          </svg>
          <svg v-if="onPlay" @click.stop="$store.commit('setOnPlay', false);music.pause()" t="1494489579501" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4257">
            <path d="M513.408 13.312c-275.584 0-498.944 223.36-498.944 498.944 0 77.312 17.536 150.272 48.96 215.616 0 0.192 0 0.192 0 0.192 0 0.128 0 0.128 0 0.128 0.128 0.192 0.256 0.448 0.32 0.768C63.936 728.832 63.936 728.832 64 728.832c3.392 4.864 13.248 3.968 22.336-0.64 9.408-4.864 13.76-13.696 11.008-19.456-28.16-59.648-43.968-126.144-43.968-196.48 0-254.08 205.952-460.032 460.032-460.032 254.08 0 460.032 206.016 460.032 460.032 0 254.016-205.952 460.096-460.032 460.096-81.152 0-157.248-21.12-223.424-57.984-0.128-0.128-0.192-0.32-0.384-0.32-5.184-4.032-14.592-0.32-21.12 8.192-6.4 8.256-6.144 19.328-1.344 23.552 0 0.128-0.128 0.128-0.128 0.32 72.704 41.344 156.8 65.152 246.464 65.152 275.52 0 498.88-223.36 498.88-498.944C1012.288 236.736 788.928 13.312 513.408 13.312z"
              p-id="4258"></path>
            <path d="M156.544 833.472m-26.496 0a0.414 0.414 0 1 0 52.992 0 0.414 0.414 0 1 0-52.992 0Z" p-id="4259"></path>
            <path d="M591.104 713.344 591.104 306.816c0-12.032-9.6-21.632-21.568-21.632s-21.568 9.6-21.568 21.632l0 406.528c0 11.904 9.6 21.568 21.568 21.568S591.104 725.184 591.104 713.344z"
              p-id="4260"></path>
            <path d="M465.152 713.344 465.152 306.816c0-12.032-9.664-21.632-21.568-21.632s-21.568 9.6-21.568 21.632l0 406.528c0 11.904 9.664 21.568 21.568 21.568S465.152 725.184 465.152 713.344z"
              p-id="4261"></path>
          </svg>
          <svg v-else @click.stop="$store.commit('setOnPlay', true);music.play()" t="1494489248487" class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2373">
            <path d="M513.856 13.312c-276.736 0-500.992 224.256-500.992 500.992 0 77.568 17.6 151.04 49.152 216.704 0 0 0 0.128 0 0.128 0.064 0 0.064 0 0.064 0 0.064 0.32 0.192 0.576 0.32 0.704 0 0 0.064 0 0.128 0 3.456 4.864 13.248 4.032 22.464-0.704 9.472-4.736 13.824-13.632 11.072-19.52-28.288-59.968-44.16-126.72-44.16-197.312 0-255.104 206.784-461.952 461.952-461.952 255.04 0 461.888 206.784 461.888 461.952 0 255.232-206.784 462.08-461.888 462.08-81.408 0-157.888-21.184-224.32-58.176-0.128-0.192-0.256-0.32-0.384-0.448-5.184-3.968-14.656-0.32-21.248 8.256-6.336 8.32-6.08 19.456-1.344 23.744-0.064 0-0.064 0.192-0.192 0.192 73.024 41.536 157.376 65.472 247.488 65.472 276.608 0 500.992-224.384 500.992-501.12C1014.848 237.632 790.528 13.312 513.856 13.312z"
              p-id="2374"></path>
            <path d="M155.456 836.928m-26.496 0a0.414 0.414 0 1 0 52.992 0 0.414 0.414 0 1 0-52.992 0Z" p-id="2375"></path>
            <path d="M372.992 725.248c0 8 6.848 14.4 15.232 14.4 3.264 0 6.336-1.024 8.832-2.688l358.592-206.976c6.272-2.112 10.944-8.192 10.944-15.488 0-7.36-4.736-13.504-11.264-15.488L398.4 292.8C395.648 290.56 392.128 289.152 388.224 289.152c-8.384 0-15.232 6.464-15.232 14.4 0 1.152 0.192 2.24 0.384 3.264l0 415.104C373.184 723.008 372.992 724.032 372.992 725.248zM412.16 372.16c0-5.376 4.544-9.728 10.304-9.728 2.624 0 5.056 0.96 6.784 2.496l240.832 139.072c4.288 1.344 7.552 5.44 7.552 10.432 0 4.992-3.2 9.024-7.488 10.432l-241.792 139.84c-1.664 1.088-3.712 1.6-5.888 1.6-5.696 0-10.304-4.288-10.304-9.728 0-0.704 0.064-1.344 0.256-2.176L412.416 374.336C412.224 373.632 412.16 372.928 412.16 372.16z"
              p-id="2376"></path>
          </svg>
          <svg t="1494522150855" class="icon" style="font-size:25px;width: 3em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2204">
            <path d="M934.4 0c-12.8 0-25.6 12.8-25.6 25.6v460.8c0-19.2-12.8-32-25.6-38.4L249.6 51.2C236.8 44.8 217.6 44.8 204.8 44.8 166.4 44.8 128 76.8 128 115.2v793.6c0 38.4 38.4 70.4 76.8 70.4 12.8 0 32-6.4 44.8-12.8L876.8 576c12.8-6.4 25.6-25.6 25.6-38.4v460.8c0 12.8 12.8 25.6 25.6 25.6s25.6-12.8 25.6-25.6V25.6c6.4-12.8-6.4-25.6-19.2-25.6z m-83.2 524.8l-633.6 396.8c-6.4 6.4-25.6 0-25.6-12.8V115.2c0-6.4 12.8-12.8 19.2-12.8h12.8l633.6 396.8V512s0 6.4-6.4 12.8z"
              p-id="2205"></path>
          </svg>
          <svg @click="commentShow=true;getCommont()" t="1494553020263" class="icon" style="font-size:25px;width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4558">
            <path d="M512 928c-8.192 0-16.384-3.136-22.624-9.376l-96-96c-12.512-12.512-12.512-32.736 0-45.248s32.736-12.512 45.248 0L512 850.752l73.376-73.376C591.36 771.36 599.488 768 608 768l224 0c17.664 0 32-14.336 32-32L864 224c0-17.632-14.336-32-32-32L192 192C174.368 192 160 206.368 160 224l0 512c0 17.664 14.368 32 32 32l96 0c17.664 0 32 14.304 32 32s-14.336 32-32 32L192 832c-52.928 0-96-43.072-96-96L96 224c0-52.928 43.072-96 96-96l640 0c52.928 0 96 43.072 96 96l0 512c0 52.928-43.072 96-96 96l-210.752 0-86.624 86.624C528.384 924.864 520.192 928 512 928zM336 512C309.536 512 288 490.464 288 464S309.536 416 336 416s48 21.536 48 48S362.464 512 336 512zM528 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S554.464 512 528 512zM720 512c-26.464 0-48-21.536-48-48s21.536-48 48-48 48 21.536 48 48S746.464 512 720 512z"
              p-id="4559"></path>
          </svg>

        </div>
      </div>
    </div>

    <div v-if="commentShow" class="comment">
      <div style="font-size:25px;width:20px;float:left;margin:10px 10px">
        评论详情
      </div>
      <div style="margin-top:10px;float:left;padding:0 20px;width:calc(100% - 40px)">
        <div style="line-height:50px;height:50px;font-weight:400">
          <div style="line-height:25px;height:25px">
            {{musicData.name}}
            <div style="float:right">
              <svg @click="commentShow=false" t="1494498763016" class="icon" style="width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10186">
                <path d="M917.333333 490.666667l-759.146667 0 368.896-368.917333c8.341333-8.341333 8.341333-21.824 0-30.165333-8.341333-8.362667-21.824-8.341333-30.165333 0l-405.312 405.312c-1.984 1.984-3.541333 4.330667-4.629333 6.954667-1.002667 2.432-1.472 5.013333-1.536 7.594667 0 0.192-0.106667 0.362667-0.106667 0.533333s0.106667 0.341333 0.106667 0.512c0.064 2.602667 0.533333 5.184 1.536 7.616 2.176 5.226667 6.314667 9.365333 11.541333 11.541333 2.538667 1.045333 5.205333 1.557333 7.893333 1.6 0.085333 0 0.170667 0.042667 0.256 0.042667l810.666667 0c11.776 0 21.333333-9.536 21.333333-21.333333S929.109333 490.666667 917.333333 490.666667z"
                  p-id="10187"></path>
                <path d="M346.069333 721.237333 346.069333 721.237333l-96.32-96.32c-8.341333-8.341333-21.824-8.341333-30.186667 0s-8.341333 21.824 0 30.165333l181.013333 181.013333 0 0 96.32 96.32c8.341333 8.341333 21.824 8.341333 30.186667 0s8.341333-21.824 0-30.165333L346.069333 721.237333z"
                  p-id="10188"></path>
              </svg>
            </div>
          </div>
          <div style="line-height:25px;height:25px;margin:.1rem 0;font-size:12px;">
            {{musicData.artist}}
            <div style="float:right">
              共 {{commentCount}} 条评论
            </div>
          </div>
        </div>
        <div class="wdir" style="margin-bottom:1rem">

        </div>
        <div style="height:calc(100vh - 100px);overflow-x:hidden;overflow-y:auto">
          <div style="font-size:16px">
            热门评论({{hotComment.length}})
          </div>
          <div class="dir"></div>
          <div style="font-size:12px;min-height:50px;margin:.7rem 0" v-for="(item,index) in hotComment">
            <div style="height:50px;width:50px;float:left;padding:3px">
              <img :src="item.user.avatarUrl" style="width:100%;height:100%;border-radius:50%">
            </div>
            <span style="font-weight:500">{{item.user.nickname}}:</span>{{item.content}}
          </div>
          <div style="font-size:16px">
            最新评论({{newComment.length}})
          </div>
          <div class="dir"></div>
          <div style="font-size:12px;min-height:50px;margin:.7rem 0" v-for="(item,index) in newComment">
            <div style="height:50px;width:50px;float:left;padding:3px">
              <img :src="item.user.avatarUrl" style="width:100%;height:100%;border-radius:50%">
            </div>
            <span style="font-weight:500">{{item.user.nickname}}:</span>{{item.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import wyApi from '../wyApi.js'
  export default {
    data() {
      return {
        lyric: [],
        lyricText: ['暂无歌词'],
        lyricTime: [0],
        activeLrcIndex: 0,
        activeLyricTop: 0,
        // onPlay: true,
        moreLyric: false,
        commentShow: false,
        commentCount: 0,
        hotComment: [],
        newComment: []
      }
    },
    computed: {
      onPlay() {
        return this.$store.state.musicBox.onPlay
      },
      currTime() {
        let _this = this
        let currentTime = this.$store.state.musicBox.currTime
        for (let index = 0; index < _this.lyricTime.length; index++) {
          if (index !== _this.lyricTime.length - 1) {
            let leftTimeTemp = _this.lyricTime[index].split(':')
            let rightTimeTemp = _this.lyricTime[index + 1].split(':')
            let leftTime = Number(leftTimeTemp[0]) * 60 + Number(leftTimeTemp[1])
            let rightTime = Number(rightTimeTemp[0]) * 60 + Number(rightTimeTemp[1])
            if (currentTime > leftTime && currentTime < rightTime) {
              _this.activeLrcIndex = index
            }
          }
        }
        return this.$store.state.musicBox.currTime
      },
      playProgress() {
        // console.log(this.$store.state.musicBox.playProgress)
        return this.$store.state.musicBox.playProgress
      },
      musicData() {
        // console.log(this.$store.state.musicBox.musicData)
        wyApi.getLyric(this.$store.state.musicBox.musicData.wyID).then((data) => {
          if (data.code === 200) {
            this.activeLrcIndex = 0
            this.lyric = data.lrc.lyric
            let left = [],
              right = []
            for (let index = 0; index < this.lyric.length; index++) {
              if (this.lyric.charAt(index) == "[") {
                left.push(index)
              }
              if (this.lyric.charAt(index) == "]") {
                right.push(index)
              }
            }
            let base = [],
              text = [],
              time = []
            for (let index = 0; index < left.length; index++) {
              if (index !== left.length - 1) {
                base.push(this.lyric.substring(left[index], left[index + 1]))
                text.push(this.lyric.substring(right[index] + 1, left[index + 1]))
              }
              time.push(this.lyric.substring(left[index] + 1, right[index]))
            }
            this.lyricText = text
            this.lyricTime = time
          }
        })
        return this.$store.state.musicBox.musicData
      },
      music() {
        return this.$store.state.musicBox.el
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
      changeTime(val) {
        this.music.currentTime = val / 100 * this.music.duration
        if (this.music.paused) {
          setTimeout(() => {
            this.music.play()
          }, 1000)
        }
      },
      getCommont(page) {
        wyApi.getComment(this.musicData.wyID, 0, 100).then((data) => {
          // console.log(data)
          this.commentCount = data.total
          this.hotComment = data.hotComments
          this.newComment = data.comments
          // this.commentData = data
          // if (page == 0) {
          //   this.hotComment = data.hotComments
          // }
        })
      }
    },
    directives: {
      getActiveLyricTop(el, binding, vnode) {
        if (binding.value) {
          vnode.context.activeLyricTop = el.offsetTop
        }
      },
      lyricScroll(el, binding, vnode) {
        el.scrollTop = vnode.context.activeLyricTop
      }
    },
    mounted() {}
  }

</script>
