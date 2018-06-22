var bus  = require("../../bus.js");
module.exports = {
	xgallery(Vue) {
		Vue.component("xgallery", {
			template: require('./xgallery.html'),
			data(){
				return {
					src:""
				}
			},
			computed:{
				getImgSrcFn(){
					var self = this;
					bus.$on('to-xgallery-img-src',(data)=>{
						console.log(data)
						self.src = data.src
					})
				}
			},
			methods:{
				hideGallery(){
					bus.$emit("close-xgallery",{
						isShowGallery:false
					})
				}
			}
		})
	}
}