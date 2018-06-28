<template>
	<div class="page__bd">
		<article class="weui-article">
			<h1>大标题</h1>
			<section>
				<h2 class="title">章标题</h2>
				<section>
					<h3>1.1 节标题</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p>
						<img @click="showGallery(src)" :src="src" alt="">
						<img @click="showGallery('https://avatars1.githubusercontent.com/u/17243165?s=460&v=4')" src="https://avatars1.githubusercontent.com/u/17243165?s=460&v=4" alt="">
					</p>
				</section>
				<section>
					<h3>1.2 节标题</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</section>
			</section>
		</article>
		<a @click="showActionsheet" href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
		<xgallery />
		<xactionsheet />
	</div>
</template>

<script>
	import xgallery from '../xgallery'
	import xactionsheet from '../xactionsheet'
	export default {
		data(){
			return {
				src:require("../../../static/test.jpg")
			}
		},
		methods:{
			showGallery(src){
				this.$store.state.isShowGallery = true;
				this.$store.state.gallerySrc = src;
			},
			showActionsheet(){
				this.$store.state.isShowActionsheet = true
			}
		},
		components:{
			xgallery,
			xactionsheet
		}
	}
</script>

<style>

</style>