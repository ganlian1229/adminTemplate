<template>
  <view class="container my">
    <u-button @click="getUserProfile">登录</u-button>
  </view>
</template>
<script>
export default {
  data() {
    return {
      userInfo: null,
      phoneNumber: "",
      code: "",
      userOpenId: "",
      recommendedNum: 0,
    };
  },
  onLoad() {},
  onShow() {},
  methods: {
    //获取用户信息
    getUserProfile() {
      let that = this;
      uni.getUserProfile({
        desc: "用于完善用户资料",
        success: function(infoRes) {
          console.log(infoRes);
        },
      });
    },
  },
};
</script>
<style lang="less">
@bgimg: "~@/static/";
.my {
  background: #000;
  .header {
    width: 100%;
    height: 299rpx;
    // background: url("@{bgimg}my-header-bg.png") no-repeat center/100%;
    position: relative;
    padding: 40rpx 52rpx 0;
    box-sizing: border-box;

    .user-box {
      display: flex;
      align-items: center;
      .user-tx {
        width: 122rpx;
        height: 122rpx;
        border-radius: 50%;
      }

      .user-dec {
        margin-left: 25rpx;

        .name {
          font-size: 36rpx;
          color: #fff;
        }
        .identity {
          padding: 5rpx 10rpx 5rpx 30rpx;
          font-size: 18rpx;
          color: #24724b;
          position: relative;
          border-radius: 20rpx;
          background: #fff;
          margin-top: 15rpx;
          &::before {
            content: "";
            position: absolute;
            width: 14rpx;
            height: 14rpx;
            border-radius: 50%;
            background: #24724b;
            top: 50%;
            left: 7rpx;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
