define(['Vue','text!xheader.html'], function(Vue,html) {
	return function() {
		Vue.component("xheader", {
			template: html
		});
	}
})