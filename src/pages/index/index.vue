<template>
    <!-- 首页 -->
    <view class="container container-index">
        <view>userNumber：{{ userNumber }}</view>
        <button @click="addUserIdFun()">userNumber+1</button>
        <view>全局变量：{{ urlHeader }}</view>
        <button type="primary" @click="upload">
            选择文件
        </button>
    </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["userNumber"]),
    },
    data() {
        return {
            changeUserId: 0,
            urlHeader: "",
        };
    },
    onLoad() {},
    onShow() {
        this.changeUserNumber = this.userNumber;
        this.$public.testFun(789654);
        this.urlHeader = this.$global.urlHeader;
        this.getSwiperData();
    },
    methods: {
        ...mapMutations(["getUserNumber"]),
        addUserIdFun() {
            this.changeUserNumber++;
            this.getUserNumber(this.changeUserNumber);
        },
        getSwiperData() {
            this.$http.post("portalPost/findBanner", {}).then((res) => {
                console.log(res);
            });
        },
        upload() {
            uni.showActionSheet({
                title: "选择上传类型",
                itemList: ["图片", "视频"],
                success: (res) => {
                    console.log(res);
                    if (res.tapIndex == 0) {
                        this.chooseImages();
                    } else {
                        this.chooseVideo();
                    }
                },
            });
        },
        //图片上传
        chooseImages() {
            uni.chooseImage({
                count: 4, //最多可以选择的图片张数，默认9
                sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
                sourceType: ["album", "camera"], //从相册选择
                success: (res) => {
                    console.log(res);
                    if (res.tempFilePaths.length > 1) {
                        //多图上传
                        res.tempFilePaths.forEach((item) => {
                            this.$http
                                .multiPost(
                                    "proof/uploadFile",
                                    item,
                                    "proofFile",
                                    {
                                        userId: 1,
                                    }
                                )
                                .then((resolve) => {
                                    console.log(resolve);
                                });
                        });
                    } else {
                        //一张图片上传
                        this.$http
                            .multiPost(
                                "proof/uploadFile",
                                res.tempFilePaths[0],
                                "proofFile",
                                {
                                    userId: 1,
                                }
                            )
                            .then((resolve) => {
                                console.log(resolve);
                            });
                    }
                },
            });
        },
        //视频上传
        chooseVideo() {
            uni.chooseVideo({
                success: (res) => {
                    console.log(res);
                    this.$http
                        .multiPost(
                            "proof/uploadFile",
                            res.tempFilePath,
                            "proofFile",
                            {
                                userId: 1,
                            }
                        )
                        .then((resolve) => {
                            console.log(resolve);
                        });
                },
            });
        },
    },
};
</script>

<style lang="less">
@bgimg: "~@/static/";
.container-index {
}
</style>
