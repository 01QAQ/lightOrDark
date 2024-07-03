import apiRequest from '../common/request.js'

//登录
export const Login = (prams) => {
	return apiRequest({
		url: 'login',
		method: "post",
		data:prams,
	})	
}

// 忘记密码  输入新密码
export const forget = (prams) => {
	return apiRequest({
		url: 'forget',
		method: "get",
		data:prams,
	})	
}
