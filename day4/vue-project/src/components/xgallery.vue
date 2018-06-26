<template>
	<div class="page gallery js_show">
		<div class="page__hd">
			<h1 class="page__title">Gallery</h1>
			<p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
		</div>
		<div class="weui-gallery" :style="{display: isShowGallery?'block':'none'}">
			<span class="weui-gallery__img" :style="{backgroundImage: `url(${gallerySrc})`}"></span>
			<div class="weui-gallery__opr">
				<a href="javascript:" class="weui-gallery__del" @click="hideGallery">
					<i class="weui-icon-delete weui-icon_gallery-delete"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			isShowGallery(){
				console.log(this)
				return this.$store.state.isShowGallery
			},
			gallerySrc(){
				return this.$store.state.gallerySrc
			}
		},
		methods:{
			hideGallery(){
				this.$store.state.isShowGallery = false;
				this.$store.state.gallerySrc = "";
			}
		}
	}
</script>

<style>

</style>