//公用方法
export default class PublicFun {
    static testFun (num) {
        console.log(num)
    }

    //深拷贝
    static deepCopy (obj) {
        var o = obj instanceof Array ? [] : {};
        for (var k in obj) {
            var val = obj[k];
            if (typeof val === "object") {
                o[k] = this.deepCopy(val);
            } else {
                o[k] = val;
            }
        }
        return o;
    }



}