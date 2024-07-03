<template>
	<view class="">
		<u-tabbar :before-switch="beforeSwitch" @change="onchange" active-color="#409EFF"
			:inactive-color="curThemeType === 'dark' ? '#999' : '#707070'"
			:bg-color="curThemeType === 'dark' ? '#2C2C2C' : '#fff'" v-model="current" :list="list" height="60px"
			mid-button-size="40px"></u-tabbar>
	</view>
</template>

<script>
	export default {
		props: ['type'],
		data() {
			return {
				list: [{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						pagePath: '/pages/index/index',
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						pagePath: '/pages/my/my',
					},
				],
				current: 0,
			}
		},
		onShow() {},
		onLoad() {},
		methods: {
			beforeSwitch(e) {
				// 如果页面需要验证登录
				// if (!uni.getStorageSync('token')) {
				// 	uni.showToast({
				// 		title: '请先登录',
				// 		icon: 'none',
				// 		success: function() {
				// 			uni.reLaunch({
				// 				url: '/pages/login/login'
				// 			})
				// 		}
				// 	})
				// 	return
				// }
				uni.switchTab({
					url: this.list[e].pagePath
				})

			},
		},
		onchange(e) {
			// 如果页面需要验证登录
			// console.log(e)
			// if (!uni.getStorageSync('token')) {
			// 	uni.showToast({
			// 		title: '请先登录',
			// 		icon: 'none',
			// 		success: function() {
			// 			uni.reLaunch({
			// 				url: '/pages/login/login'
			// 			})
			// 		}
			// 	})
			// 	return
			// }
			// uni.switchTab({
			// 	url: this.list[e].pagePath
			// })
		}

	}
</script>

<style>
</style>