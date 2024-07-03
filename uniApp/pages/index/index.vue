<template>
	<view class="content">
		<navbar :pageTitle="pageTitle"></navbar>
		<view class="gross" :class="curThemeType === 'dark' ? 'gross-dark' : ''">
			<view class="aaa">
				
			</view>
		</view>
		<tabbar ></tabbar>
	</view>
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import navbar from "@/components/navbar.vue"
	export default {
		data() {
			return {
				pageTitle:'首页'
			}
		},
		components: {
			tabbar,
			navbar
		}
	}
</script>

<style >
.aaa{
		width: 100%;
		height:1600rpx
	}
</style>