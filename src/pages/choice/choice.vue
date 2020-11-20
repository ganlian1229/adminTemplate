<template>
    <view class="container choice">
        在线选楼
        <select-box
            class="layer-select"
            :isDefault="true"
            :isFillet="true"
            :actIndex="actIndex"
            :propArray="layerList"
            @change="switchFun"
        ></select-box>
    </view>
</template>
<script>
import selectBox from "@/components/select-box.vue";
export default {
    components: {
        selectBox,
    },
    data() {
        return {
            layerList: [
                {
                    id: "0",
                    text: "3F",
                },
                {
                    id: "1",
                    text: "4F",
                },
                {
                    id: "2",
                    text: "5F",
                },
                {
                    id: "3",
                    text: "6F",
                },
                {
                    id: "4",
                    text: "7F",
                },
                {
                    id: "5",
                    text: "8F",
                },
                {
                    id: "6",
                    text: "9F",
                },
                {
                    id: "7",
                    text: "10F",
                },
                {
                    id: "8",
                    text: "11F",
                },
                {
                    id: "9",
                    text: "12F",
                },
                {
                    id: "10",
                    text: "13F",
                },
                {
                    id: "11",
                    text: "14F",
                },
                {
                    id: "12",
                    text: "15F",
                },
                {
                    id: "13",
                    text: "16F",
                },
                {
                    id: "14",
                    text: "17F",
                },
            ],
            actIndex: 0, //默认选中第几个
        };
    },
    onLoad(options) {},
    methods: {
        switchFun(data) {
            //data就是子组件传过来的数据
            console.log(data);
        },
    },
};
</script>
<style lang="less">
@bgimg: "~@/static/";
.choice {
}
</style>
