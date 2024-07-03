<script>
	export default {
		onLaunch() {
			this.handleSetTabBar();
		},
		methods: {
			handleSetTabBar() {
				const theme = uni.getStorageSync('theme');
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

/* App.vue */
<style lang="scss">
	@import "uview-ui/index.scss";

	page {
		width: 100%;
		height: 100%;
		background-color: #fff;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	view {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	swiper-item {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	swiper {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	.empty {
		text-align: center;
		font-size: 24rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #999999;
		padding-top: 200rpx;
	}

	.empty image {
		width: 142rpx;
		height: 160rpx;
		margin-bottom: 20rpx;
	}
</style>