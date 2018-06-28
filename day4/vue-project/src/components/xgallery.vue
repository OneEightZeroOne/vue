<template>
	<div class="page gallery js_show">
		<div class="page__hd">
			<h1 class="page__title">Gallery</h1>
			<p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
		</div>
		<transition name="bounce">
			<!--<div class="weui-gallery" :style="{display: isShowGallery?'block':'none'}">-->
			<div class="weui-gallery" v-show="isShowGallery" style="display: block;">
				<span class="weui-gallery__img" :style="{backgroundImage: `url(${gallerySrc})`}"></span>
				<div class="weui-gallery__opr">
					<a href="javascript:" class="weui-gallery__del" @click="hideGallery">
						<i class="weui-icon-delete weui-icon_gallery-delete"></i>
					</a>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import "../../static/animate.css"
	export default {
		computed: {
			isShowGallery() {
				console.log(this)
				return this.$store.state.isShowGallery
			},
			gallerySrc() {
				return this.$store.state.gallerySrc
			}
		},
		methods: {
			hideGallery() {
				this.$store.state.isShowGallery = false;
				this.$store.state.gallerySrc = "";
			}
		}
	}
</script>

<style scoped>
	.animate-enter-active,
	.animate-leave-active {
		transform: rotate(360deg);
		transition: all 1.5s;
	}
	
	.animate-enter,
	.animate-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		opacity: 0;
	}
	
	.animate-enter-to,
	.animate-leave {
		opacity: 1;
	}
	/*enter->enter-to->leave->leave-to*/
	/*enter-active     leave-active*/
	
	.bounce-enter-active {
		animation: jackInTheBox 3s;
	}
	
	.bounce-leave-active {
		animation: rollOut 3s reverse;
	}
	
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>