<template>
    <view class="content">
        <view>
            <!-- #ifdef MP-WEIXIN -->
            <view v-if="isCanUse">
                <view>
                    <view class="header">
                        <view class="img"></view>
                    </view>
                    <view class="content-con">
                        <view>申请获取以下权限</view>
                        <text>获得你的公开信息(昵称，头像、地区等)</text>
                    </view>

                    <button
                        class="bottom"
                        type="primary"
                        open-type="getUserInfo"
                        withCredentials="true"
                        @getuserinfo="wxGetUserInfo"
                    >
                        授权登录
                    </button>
                    <!-- <button
            class="bottom"
            type="primary"
            open-type="getPhoneNumber"
            @getphonenumber="getPhoneNumber"
          >授权手机号</button>-->
                </view>
            </view>
            <!-- #endif -->
        </view>
    </view>
</template>
<script>
// import WXBizDataCrypt from "../../lin/WXBizDataCrypt";
export default {
    data() {
        return {
            SessionKey: "",
            OpenId: "",
            userInfoObj: null,
            nickName: null,
            avatarUrl: null,
            isCanUse: uni.getStorageSync("isCanUse") || true, //默认为true
            code: "",
            choiceObj: {
                actIndex: 0,
                tung: "",
                floor: "",
            },
            newsId: 0,
        };
    },
    onLoad(options) {
        if (options.actIndex) {
            this.choiceObj.actIndex = options.actIndex;
            this.choiceObj.tung = options.tung;
            this.choiceObj.floor = options.floor;
        } else if (options.newsId) {
            this.newsId = options.newsId;
        }
    },
    onShow() {},
    methods: {
        //第一授权获取用户信息===》按钮触发
        wxGetUserInfo() {
            let that = this;
            uni.login({
                success: (res) => {
                    console.log(res);
                    // this.code = res.code;
                    uni.getUserInfo({
                        provider: "weixin",
                        success: function (infoRes) {
                            console.log(infoRes);
                            that.userInfoObj = JSON.parse(infoRes.rawData);
                            console.log(that.userInfoObj);
                            uni.setStorageSync("userInfo", that.userInfoObj);

                            let newIv = encodeURIComponent(infoRes.iv);
                            let newEncryptedData = encodeURIComponent(
                                infoRes.encryptedData
                            );

                            uni.switchTab({
                                url: "/pages/index/index",
                            });
                        },
                        fail(err) {
                            console.log(err);
                        },
                    });
                },
            });
        },
    },
    onLoad() {},
};
</script>
<style lang="less">
@bgimg: "~@/static/";
.header {
    margin: 90rpx auto;
    border-bottom: 1px solid #ccc;
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
}

.header .img {
    display: block;
    margin: 0 auto;
    width: 200rpx;
    height: 200rpx;
    background: url("@{bgimg}wx-login.png") no-repeat center/100%;
}

.content {
    /* margin-left: 50rpx; */
    /* margin-bottom: 90rpx; */
    /* padding: 0 0 90rpx 50rpx; */
    box-sizing: border-box;
}
.content-con {
    padding: 0 0 90rpx 50rpx;
    box-sizing: border-box;
}

.content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
}

.bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
}
</style>
