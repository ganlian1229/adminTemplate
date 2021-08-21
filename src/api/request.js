


let requestHeader = "http://www.fengyugo.com:8012/dxhrdcw/";
//post请求方法
export function post(url, params) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: requestHeader + url,
            method: "POST",
            data: params,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: res => {
                // console.log(res.data.code)
                if (res.data.code == 1) {
                    resolve(res.data)
                } else {
                    uni.showToast({
                        title: res.data.msg,
                        icon: 'none'
                    });
                }
            },
            fail: (err) => {
                // 调用接口失败
                uni.showToast({
                    title: "请检查网络",
                    icon: 'none'
                });
                reject(err)
            }
        })
    });
}
//文件上传方法
//url:上传的地址   filePath：图片地址   fileKey：后台给的文件名  params 其余参数（对象，不是FromData()对象）
export function multiPost(url, filePath, fileKey, params) {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: requestHeader + url,
            filePath: filePath,
            name: fileKey,
            formData: params,
            success: function (res) {
                resolve(JSON.parse(res.data))
            },
            fail: (err) => {
                uni.showToast({
                    title: "请检查网络",
                    icon: 'none'
                });
                // 调用接口失败
                reject(err)
            }
        })
    })
}
