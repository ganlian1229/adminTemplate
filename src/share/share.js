
export default {
    data() {
        return {
            shareObj: {
                title: '分享标题',//分享标题
                path: '/pages/index/index',//页面 path ，必须是以 / 开头的完整路径。
                imageUrl: '',//分享图标，路径可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图片长宽比是 5:4
            }
        }
    },
    onShareAppMessage(res) {
        console.log(res)
        return {
            title: this.shareObj.title,
            path: this.shareObj.path,
            imageUrl: this.shareObj.imageUrl,
            success(resolve) {
                uni.showToast({
                    title: '分享成功'
                })
            },
            fail(resolve) {
                uni.showToast({
                    title: '分享失败',
                    icon: 'none'
                })
            }

        }
    }

}