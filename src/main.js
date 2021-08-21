import Vue from 'vue';
import App from './App';
//全局分享
import share from "./share/share";
//vue混入share文件
Vue.mixin(share);
//公用方法
import common from "./common/common";
//封装请求
import { post, multiPost } from './api/request';
//全局变量
import global from "./global/global";
//引入vuex
import store from './store';

import uView from "uview-ui";
Vue.use(uView);

//全局过滤器
import filters from "./filters/filters";
for (let key in filters) {
  Vue.filter(key, filters[key])
}

//把请求添加到全局
Vue.prototype.$http = { post, multiPost };
//把vuex定义成全局组件
Vue.prototype.$store = store;
//把公用方法添加到全局
Vue.prototype.$common = common;
//把全局变量添加到全局
Vue.prototype.$global = global;

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
  ...App,
  //挂载
  store
})
app.$mount()