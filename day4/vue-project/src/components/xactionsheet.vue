<template>
	<transition name="bounce">
		<div v-show="isShowActionsheet" :style="{display: 'block'}" class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet">
			<div class="weui-actionsheet__title">
				<p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
			</div>
			<div class="weui-actionsheet__menu">
				<div class="weui-actionsheet__cell">示例菜单</div>
				<div class="weui-actionsheet__cell">示例菜单</div>
				<div class="weui-actionsheet__cell">示例菜单</div>
				<div class="weui-actionsheet__cell">示例菜单</div>
			</div>
			<div @click="hideActionsheet" class="weui-actionsheet__action">
				<div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import "../../static/animate.css"
	export default {
		computed: {
			isShowActionsheet() {
				return this.$store.state.isShowActionsheet
			}
		},
		methods: {
			hideActionsheet() {
				this.$store.state.isShowActionsheet = false;
			}
		}
	}
</script>

<style scoped>
	.bounce-enter-active {
		animation: slideInUp 3s;
	}
	
	.bounce-leave-active {
		animation: slideInUp 3s reverse;
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