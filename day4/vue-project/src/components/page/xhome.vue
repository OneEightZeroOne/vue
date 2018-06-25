<template>
	<div>
		<xheader />
		<xsearch />
		<xpanel />
		<xfooter />
	</div>
</template>

<script>
	import Vue from 'vue'
	// 头部组件
	import xheader from '../xheader/xheader.js'
	xheader.xheader(Vue)
	// 搜索组件
	import xsearch from '../xsearch/xsearch.js'
	xsearch.xsearch(Vue)
	// 内容组件
	import xpanel from '../xpanel'
	// 底部组件
	import xfooter from '../xfooter'
	export default {
		//你如果时用.vue写组件，必须是components注册
		components: {
			xpanel,
			xfooter
		}
	}
</script>

<style>

</style>