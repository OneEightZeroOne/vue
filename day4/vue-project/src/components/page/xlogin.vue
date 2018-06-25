<template>
	<div>
		<xheader />
		<input placeholder="用户名" />
		<input placeholder="密码" />
		<button>登录</button>
		<xfooter />
	</div>
</template>

<script>
	import xheader from '../xheader.vue'
	import xfooter from '../xfooter.vue'
	export default {
		components:{
			xheader,
			xfooter
		}
	}
</script>

<style>
</style>