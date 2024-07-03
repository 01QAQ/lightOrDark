import {
	baseURL
} from './config.js'
export const apiRequest = (prams) => {
	
	if(prams.jsontype){
		console.log(prams.jsontype)
	}
	var token = uni.getStorageSync('token')
		// if (userId == '') {
		// 	uni.reLaunch({
		// 		url: '../login/login'
		// 	});
			
		// } else {
			
		// }
	let headerDate = {
		'Accept': 'application/json',
		'clientType': '0',
		'Content-Type': 'application/json;charset=UTF-8',
		'token': token,
	}
	return new Promise((reslove, reject) => {
		let url = baseURL + prams.url
		
		return uni.request({
			url: url,
			method: prams.method,
			data: prams.data,
			header: headerDate,
			success: (res) => {
				// console.log(res)
				if(res.data.code==401){
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
				// uni.hideLoading()
				reslove(res)
	
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
	
	
}
export default apiRequest
