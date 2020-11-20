<template>
    <view class="com-selectBox">
        <view
            class="com-sContent"
            :class="isSelectFillet ? 'com-ysContent' : ''"
            @click="selectToggle"
        >
            <view class="com-sTxt">{{ nowText }}</view>
            <view class="com-sImg" :animation="animationData"></view>
            <!-- <image src='../static/down.png' class='com-sImg' ></image> -->
        </view>
        <view class="com-sList" v-if="selectShow">
            <view
                v-for="(item, index) in propArray"
                :key="index"
                class="com-sItem"
                @click="setText(index)"
                >{{ item.text }}</view
            >
        </view>
    </view>
</template>
<script>
export default {
    props: {
        propArray: {
            type: Array,
        },
        isFillet: {
            //是否是圆角（uni-app开发  可忽略 自己去引入的页面定义样式）
            type: Boolean,
            default: false,
        },
        propNowText: {
            //没有默认选着时显示的文字
            type: String,
            default: "请选择",
        },
        isDefault: {
            //是否有默认选着项
            type: Boolean,
            default: false,
        },
        actIndex: {
            //默认选着第几项
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            selectShow: false, //初始option不显示
            nowText: "请选择",
            animationData: {}, //右边箭头的动画
            isSelectFillet: false, //是否是圆角
        };
    },
    mounted() {
        this.isSelectFillet = this.isFillet;
        // console.log(22222)
        // console.log(this.actIndex);
        if (this.isDefault) {
            // //默认选着第一个
            this.nowText = this.propArray[this.actIndex].text;
        } else {
            this.nowText = this.propNowText;
        }
    },
    methods: {
        selectToggle: function () {
            var nowShow = this.selectShow; //获取当前option显示的状态
            //创建动画
            var animation = uni.createAnimation({
                timingFunction: "ease",
            });
            this.animation = animation;
            if (nowShow) {
                animation.rotate(0).step();
                this.animationData = animation.export();
            } else {
                animation.rotate(180).step();
                this.animationData = animation.export();
            }
            this.selectShow = !nowShow;
        },
        //设置内容
        setText: function (index) {
            var nowData = this.propArray; //当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
            var nowIdx = index; //当前点击的索引
            var nowText = nowData[nowIdx].text; //当前点击的内容
            //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
            this.animation.rotate(0).step();
            this.selectShow = false;
            this.nowText = nowText;
            this.animationData = this.animation.export();
            // console.log(111)
            // let nowDataObj = JSON.stringify(nowData[nowIdx]);
            // console.log(nowData[nowIdx]);
            this.$emit("change", nowData[nowIdx]);
            // this.$parent.switchFun(nowDataObj);
        },
    },
};
</script>

<style lang="less">
@bgimg: "~@/static/";
.com-selectBox {
    width: 100%;
}

.com-sContent {
    border: 1px solid #e2e2e2;
    background: white;
    font-size: 16px;
    position: relative;
    height: 30px;
    line-height: 30px;
}

.com-sImg {
    position: absolute;
    right: 10px;
    top: 11px;
    width: 16px;
    height: 9px;
    background: url("@{bgimg}icon-down.png") no-repeat;
    background-size: 100% 100%;
    transition: all 0.3s ease;
}

.com-sTxt {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 20px 0 6px;
    font-size: 14px;
}
.com-sContent.com-ysContent {
    border-radius: 40rpx;
}
.com-sContent.com-ysContent .com-sTxt {
    padding: 0 55rpx 0 35rpx;
}

.com-sList {
    background: white;
    width: inherit;
    position: absolute;
    border: 1px solid #e2e2e2;
    border-top: none;
    box-sizing: border-box;
    z-index: 3;
    max-height: 120px;
    overflow: auto;
}

.com-sItem {
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #e2e2e2;
    padding: 0 6px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

.com-sItem:first-child {
    border-top: none;
}
</style>
