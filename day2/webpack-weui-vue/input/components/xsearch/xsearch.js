module.exports = {
	xsearch(Vue) {
		//M
		Vue.component("xsearch", {
			template: require("./xsearch.html"),
			data(){
				return {
					isShowSearch:false
				}
			},
			methods:{
				search(){
					this.isShowSearch = !this.isShowSearch
				}
			}
		})
	}
}