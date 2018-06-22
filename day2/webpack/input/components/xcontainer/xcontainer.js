module.exports = {
	xcontainer(Vue,$) {
		Vue.component("xcontainer", {
			template: `
				<div :style="{
						border:'1px solid blue',
						padding: '20px'
					}">
					<div class="container" v-text="name"></div>
					<button @click="makeRed">变换颜色</button>
				</div>
			`,
			data() {
				return {
					//50%
					name: "容器组件"
				}
			},
			methods: {
				makeRed() {
					//50%
					$(".container").css({
						color: "yellow"
					})
				}
			}
		});
	}
}