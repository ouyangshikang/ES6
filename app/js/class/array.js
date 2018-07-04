{  // Array.from()把一些伪数组或集合转化为真正的数组
    let obj = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    let arrObj = Array.from(obj)
    console.log(arrObj)

    console.log(Array.from([1, 2, 3], (item) => {
        return item * 2   // [2, 4, 6]
    }))
}

{    // Array.of()把一组数据变量转化为数组类型
    let arr = Array.of(3, 4, 7, 9, 11)
    console.log(arr) // [3, 4, 7, 9, 11]

    let empty = Array.of()
    console.log('empty', empty) // []
}

{
    // fill(value, [start, end)) 用指定值替换数组元素 
    console.log([1, 'a', undefined].fill(7))  // [7, 7, 7]
    console.log([1, 'a', undefined].fill(7, 1, 2)) // [1, 7, undefined]
}

{
    for (let value of [1, 'a', 'b']) {
        console.log('遍历数组元素值', value) // 1, 'a', 'b'
    }
    for (let index of [1, 'a', 'b'].keys()) {
        console.log('这样遍历就变成数组索引了', index) // 0, 1, 2
    }
    for (let value of [1, 'a', 'b'].values()) {
        console.log('遍历数组元素值', value) // 1, 'a', 'b'
    }
    for (let [index, value] of [1, 'a', 'b'].entries()) {
        console.log('遍历数组索引及元素值', index, value) // 0  1, 1 a, 2 b
    }
}

{   // copyWithin(target, [start, end))   将指定位置的元素复制(覆盖)到从target位置开始的数据，返回当前数组
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)) // [4, 2, 3, 4, 5]
}

{   
    // find() 找到符合条件的第一个数组元素
    console.log([1, 2, 3, 4, 5, 6].find((item) => {
        return item > 3 // 4
    }))
    // findIndex() 找到符合条件的第一个数组元素的索引
    console.log([1, 2, 3, 4, 5, 6].findIndex((item) => {
        return item > 3 // 3
    }))
}

{
    // includes(value, [fromIndex]) 数组中是否包含某个元素
    console.log([1, 2, NaN].includes(1))  // true
    console.log([1, 2, NaN].includes(NaN))  // true
}