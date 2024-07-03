import {
	baseURL
} from './config.js'
export function CommonUpload() {

	return new Promise((resolve, rej) => {

		uni.chooseImage({
			count: 3, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: [], //从相册选择
			success: function(res) {
			uni.showLoading({
				title: '上传中'
			});
				var urlList = []
				
				
				// res.tempFiles 数组
				for (var i = 0; i < res.tempFilePaths.length; i++) {
					console.log(res.tempFilePaths[i])
					uni.uploadFile({
						url: baseURL + 'headimg',
						// file: res.tempFiles,
						fileType:'image',//图片类型
						filePath: res.tempFilePaths[i],
					name: 'file',
						header: {
							'token': uni.getStorageSync("token"),
						},
						success: (res) => {
							res.data = JSON.parse(res.data)
							if(res.data.code==0){
								
								urlList.push({
									url: res.data.url
								})
								// 抛出
								// console.log(res)
								resolve(res)
							}else{
								uni.showToast({
									title: res.data.msg,
									icon: "none"
								});
								console.log(res)
							}
							
						},
						fail: (res) => {
							uni.showToast({
								title: "失败",
								icon: "none"
							});
							console.log(res)
						},
					});
				}
			}
		});
	})
}
