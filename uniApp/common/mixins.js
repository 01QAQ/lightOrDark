//切换白天黑夜主题
import {
	mapState
} from 'vuex';
export default {
	computed: {
		...mapState(['curThemeType']),
	}
}