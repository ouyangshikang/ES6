{
  /** 
   * rest运算符  可变的函数参数, 参数变量为数组
   * 注: rest参数只包含那些没有对应形参的实参(直译: 剩余的参数), rest参数必须为最后一个参数
   */
  function add(...arr) {
    let sum = 0
    for(let val of arr) {
      sum += val
    }
    return sum
  }

  console.log(add(1, 2, 3, 4))  // 10
}

{
  // 解构赋值
}
// -------------------------------------------
{
  /**
   * 拓展运算符: 将一个数组，类数组，字符串转为用逗号分隔的参数序列   rest的逆运算
   */
  console.log(...[1, 2, 3])
  console.log(1, ...[2, 3, 4], 5)
}

{
  // 将字符串转为数组
  let str = 'string'
  let arr = [...str]
  console.log(arr)
}


// rest参数使用场景应该稍少一些，主要是处理不定数量参数，可以避免arguments对象的使用
// 扩展运算符的应用就比较广