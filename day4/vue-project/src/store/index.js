import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//建立了仓库 也就是组件跟组件交流的平台
export default new Vuex.Store({
	// 状态 组件需要表达态度
	// 公共的数据层
	state: {
		isShowGallery: false,
		gallerySrc: "",
		isShowActionsheet:false
	},
	mutations: {
		increment(state) {
			state.count++
		}
	}
})