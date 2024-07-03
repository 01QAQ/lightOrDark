<template>
	<view class="tab_logo" >
		<u-navbar :title="pageTitle" :is-back="true" :background="{
			backgroundColor: curThemeType === 'dark' ? '#2C2C2C ' : ' #fff'
		}" :title-color="curThemeType === 'dark' ? '#fff' : '#2C2C2C'" :back-icon-color="
			 curThemeType === 'dark' ? '#dbdbdb ' : '#515151'
		">
		</u-navbar>
	</view>
</template>

<script>
	export default {
		props: ['pageTitle'],
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {


		}
	}
</script>

<style>

</style>