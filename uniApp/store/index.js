import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 获取信息到本地
		curThemeType: uni.getStorageSync('theme') ?? 'light',
	},
	mutations: {
		setCurThemeType(state) {
			// 获取当前状态取反
			state.curThemeType = state.curThemeType === 'light' ? 'dark' : 'light';
			//存储状态信息到本地
			uni.setStorageSync('theme', state.curThemeType);
		}
	},
})

// 导出
export default store