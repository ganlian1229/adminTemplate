//公用方法
export default class CommonFun {
    static testFun(num) {
        console.log(num)
    }
    //增强arr indexOf方法
    static increaseArrIndexOf(arr, variable, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][variable] == value) {
                return i;
            }
        }
        return -1;
    }
    //深拷贝
    static deepCopy(obj) {
        var newobj = {}
        //判断是否为null
        if (obj === null) return null;
        for (var key in obj) {
            //判断数组
            if ({}.toString.call(obj) === "[object Array]") {
                var newarr = [];
                newarr = obj.slice()
                return newarr
            }
            if (typeof obj[key] !== "object") {
                newobj[key] = obj[key]
            } else {
                newobj[key] = this.deepCopy(obj[key])
            }
        }
        return newobj
    }
    //navigateBack返回带参数
    static back(data, isRefresh = false, page = 1) {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - (page + 1)];
        if (this.isJSON(data)) {
            if (data != undefined) {
                prevPage.$vm.setData(data);
            }
        } else {
            setTimeout(() => {
                toast(data);
            }, 500);
        }
        if (isRefresh) {
            prevPage.$vm.refreshData();
        }
        uni.navigateBack({
            delta: page,
        });
    }
    //是否是JSON
    static isJSON(str) {
        if (typeof str == "string") {
            try {
                var obj = JSON.parse(str);
                if (typeof obj == "object" && obj) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
        return true;
    }

}