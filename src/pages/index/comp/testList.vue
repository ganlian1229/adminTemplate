<template>
  <view class="testList">
    <view
      class="list-item"
      @click="itemClick(item)"
      v-for="(item, index) in testList"
      :key="index"
    >
      {{ item.isAct }}
      {{ item.text }}
    </view>
    <view @click="addTestList">add</view>
  </view>
</template>
<script>
export default {
  props: {
    testList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    addTestList() {
      this.testList.push({
        isAct: false,
        text: "add",
      });
      this.$emit("update:testList", this.testList);
    },
    itemClick(item) {
      this.testList.forEach((ite) => {
        ite.isAct = false;
      });
      item.isAct = true;
      this.$emit("update:testList", this.testList);
    },
  },
};
</script>
