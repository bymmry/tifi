<style scoped>
	.header {
		height: 60px;
		line-height: 60px;
		font-size: 20px;
		text-align: center;
		background-color: #fff;
		/*color: #fff;*/
		/*padding: 0 5px;*/
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1
	}
	
	.list {
		float: left
	}
	
	.main {
		/*transition: all .1s*/
	}
	
	.mu-flat-button-label {
		font-size: 20px !important;
	}
	
	.main-text {
		font-size: 20px !important;
	}
	
	.search {
		float: right;
		color: #000
	}
	
	.line {
		background: #fff;
		color: #fff;
		border-bottom: 2px solid #ccc
	}
</style>
<template>
	<div class="header">
		<div class="main">
			<mu-appbar title="Title" style="background: #fff;color: #41464b;">
				<svg slot="left" t="1494444038907" class="icon" style="width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8425">
					<path d="M96 192l832 0c17.673 0 32-14.327 32-32s-14.327-32-32-32L96 128c-17.673 0-32 14.327-32 32S78.327 192 96 192z" p-id="8426"></path>
					<path d="M928 448 96 448c-17.673 0-32 14.327-32 32s14.327 32 32 32l832 0c17.673 0 32-14.327 32-32S945.673 448 928 448z" p-id="8427"></path>
					<path d="M928 768 96 768c-17.673 0-32 14.327-32 32s14.327 32 32 32l832 0c17.673 0 32-14.327 32-32S945.673 768 928 768z" p-id="8428"></path>
				</svg>
				<div slot="default" style="text-align: center;">
					<span style="margin:0 1rem" @click="active=index" :style="{'font-size':active==index?'20px':'18px'}" v-for="(item,index) in msg">
						{{item}}
					</span>
				</div>
				<svg slot="right" t="1494444282954" class="icon" style="font-size:24px;font-weight: 500;width: 2em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10302">
					<path d="M864.370836 884.784308c-5.227267 0-10.423834-2.216481-14.064911-6.52153L644.666984 635.206066c-6.185122-7.308453-5.735872-18.137079 1.033583-24.90625 22.970095-22.980387 41.300325-49.607838 54.484132-79.145571 15.116914-33.882692 22.785892-70.032006 22.785892-107.447151 0-145.538701-118.40866-263.942391-263.95347-263.942391S195.063652 278.168394 195.063652 423.707095c0 145.536654 118.40866 263.940344 263.95347 263.940344 36.87741 0 72.541128-7.450692 106.006692-22.146393 9.322711-4.080945 20.173282 0.146333 24.259515 9.455349 4.090327 9.311063-0.144292 20.172435-9.452676 24.260543-38.158643 16.756639-78.807095 25.252127-120.813531 25.252127-165.84908 0-300.776642-134.921899-300.776642-300.761971 0-165.842119 134.927562-300.764018 300.776642-300.764018s300.776642 134.921899 300.776642 300.764018c0 42.617633-8.742472 83.817987-25.985905 122.452913-12.716137 28.497031-29.631075 54.609759-50.393806 77.830623l195.004297 230.489488c6.566831 7.762801 5.60079 19.377326-2.162337 25.948999C872.795046 883.350656 868.573731 884.784308 864.370836 884.784308z" p-id="10303"></path>
				</svg>
			</mu-appbar>
		</div>
		<mu-tabs style="background:#fff" v-if="active==1" :value="activeTab" @change="changeTag">
			<mu-tab style="color:#41464b" :key="index" @click.native="activeTab=index" :value="index" v-for="(item,index) in selecte">
				{{item}}
			</mu-tab>
		</mu-tabs>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 1,
				msg: ['我的', '发现', '朋友'],
				selecte: ['推荐', '歌单', '歌手', '排行榜'],
				selected: 0,
				activeTab: 0
			}
		},
		methods:{
			changeTag(val){
				this.$emit('changeTag',val)
			}
		}
	}
</script>