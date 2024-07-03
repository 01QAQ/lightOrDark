<template>
	<view class="content">
		<view class="gross" :class="curThemeType === 'dark' ? 'gross-dark' : ''">
			<view class="functionalZone h_center_x_right">
				<view class="functionalZone_box h_center_x_center"
					v-for="(item,id) in functionalChild"
					:key="item.id" @click="selectList(item.id)">
					<image :src="item.icon" mode="heightFix"></image>
				</view>
			</view>
			<view class="aaa" style="100rpx">
				
			</view>
		</view>
		<tabar></tabar>
	</view>
</template>

<script>
	import tabar from "@/components/tabbar.vue"
	export default {
		data() {
			return {
				functionalChild_light: [
					{
						id: 1,
						name: '白天/黑夜模式',
						icon: require('@/static/myIcon/sun.png'),
					}
				],
				functionalChild_dark: [
					{
						id: 1,
						type: '',
						name: '黑夜模式',
						icon: require('@/static/myIcon/moon.png'),
					}
				]
			}
		},
		components: {
			tabar
		},
		computed: {
			// 返回数组的函数
			functionalChild() {
				if (this.curThemeType === 'dark') {
					return this.functionalChild_dark;
				}else{
					return this.functionalChild_light;
				}
				
			},
		},
		methods: {
			selectList(e) {
				console.log(e);
				if (e == 1) {

					this.$store.commit('setCurThemeType');

				}
			},
			handleChangeSkin() {
				// this.$store.commit('setCurThemeType');
				// if (this.curThemeType === 'dark') {
				// 	uni.setTabBarStyle({
				// 		color: '#9299A7',
				// 		selectedColor: '#3C79FF',
				// 		backgroundColor: '#2B3757'
				// 	});

				// } else {
				// 	uni.setTabBarStyle({
				// 		color: '#9299A7',
				// 		selectedColor: '#3C79FF',
				// 		backgroundColor: '#fff'
				// 	});
				// }

			}
		}
	}
</script>

<style lang="scss">
	.functionalZone {
		width: 100%;
		padding: 45rpx 25rpx;
	}

	.functionalZone_box {
		width: 70rpx;
		height: 70rpx;
		margin-right: 40rpx;
	}

	.functionalZone_box image {
		width: 100%;
		height: 100%;
	}
	.aaa{
		width: 100%;
		height:1600rpx
	}
</style>