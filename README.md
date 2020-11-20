# uni-app微信小程序


想要运行项目
npm install

说明：
1、使用uni-app框架 官网：https://uniapp.dcloud.io/ （用法95%以上和微信小程序原生开发一样）
只是使用uni-app使用vue语法。

1、运行：npm run dev:mp-weixin

2、运行完， 会在src的同级目录生成一个dist目录，用微信开发者工具导入项目，
选择到这个dist里面的dev里面的mp-weixin 打开。

3、打包  npm run build:mp-weixin 打包完 会在dist目录生成一个build目录，
下面的mp-weixin文件夹就是你打包好的代码用微信开发者工具打开可以上传至微信小程序后台。

4、本例中添加了vuex以及使用方法（在首页）。

5、本例添加了公用方法public.js，用法在首页。

6、本例添加了全局变量global.js，用法在首页。

注：全局变量不是响应式的所以你直接改变它，页面上的值是不会立即变化的，
如果需要改变的页面上的值也跟着改变请使用vuex。

7、添加全局分享功能、在share目录下的share.js中修改全局分享内容（标题、页面路径、分享图片），
需要单独的分享（比如详情页）在data 中定义一个shareObj:{ title:"",path:"",imageUrl:"" }修改对应内容

8、加入uView UI组件 官网：https://www.uviewui.com/components/intro.html
