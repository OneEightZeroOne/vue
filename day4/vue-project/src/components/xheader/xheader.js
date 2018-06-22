export default {
	xheader(Vue) {
		Vue.component('xheader', {
			template: `
				<header :style="{
					backgroundColor:'red',
					color: 'white',
					textAlign: 'center',
					width:'100%',
					height:'50px',
					lineHeight:'50px',
				}">微信</header>
			`
		})
	}
}