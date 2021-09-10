//公用方法
export default class CommonFun {
    static testFun (num) {
        console.log(num)
    }
    //增强arr indexOf方法
    static increaseArrIndexOf (arr, variable, value) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][variable] == value) {
                return i;
            }
        }
        return -1;
    }
    //深拷贝
    static deepCopy (source) {
        if (!source) return
        let target;
        if (typeof source === 'object') {
            // 根据source类型判断是新建一个数组还是对象
            target = Array.isArray(source) ? [] : {}
            // 遍历source，并且判断是source的属性才拷贝
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    if (typeof source[key] !== 'object') {
                        target[key] = source[key]
                    } else {
                        // 如果内部属性存在复杂数据类型，使用递归实现深拷贝
                        target[key] = deepCopy(source[key])
                    }
                }
            }
        } else {
            target = source
        }
        return target
    }
    //navigateBack返回带参数
    static back (data, isRefresh = false, page = 1) {
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
    static isJSON (str) {
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