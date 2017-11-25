{//数组解构赋值
    let a,b,reset;
    [a,b] = [1,2]; //等价于let a=1,b=2;
    console.log(a,b) //1, 2
}

{//数组解构赋值
    let a,b,reset;
    [a,b,...reset] = [1,2,3,4,5];
    console.log(a,b,reset)  //1,2,[3,4,5]
}

{//对象解构类型
    let a,b;
    ({a,b} = {a:1, b:2})
    console.log(a,b); //1 2    
}

{  //如果左右配对不成功，为undefined
    let a,b,c,reset;
    [a,b,c] = [1,2];
    console.log(a,b,c) //1 2 undefined
    //使用默认值配对
    // [a,b,c=3] = [1,2];
    // console.log(a,b,c) //1 2 3

}
/**
 * 数组解构赋值的应用场景
 */

{   // e1: 两个变量交换
    let a =1;
    let b =2;
    [a,b] = [b,a];
    console.log(a,b); // 2,1
}

{
    // e2: 直接获取函数返回的内容
    function f(){
        return [1,2,3,4,5]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b) //1,2
    //如果不用解构赋值，获取函数返回的数组前两个元素，要先设置变量接收函数返回的值，再用索引返回0，1对应的值
}

{  //e3  
    function f(){
        return [1,2,3,4,5]
    }
    let [a,,,b] = f();
    console.log(a,b) //1,4 ,表示忽略掉23
}

{
    //e4  当不确定函数所返回数组的长度，我只关心数组的第一个元素
    function f(){
        return [1,2,3,4,5]
    }
    let [a,...b] = f();
    console.log(a,b) //1,[2,3,4,5] 
}

/**
 * 对象解构赋值
 */
{
    let o = {p: 42, q: true};
    let {p,q} = o;
    console.log(p,q) //42, true
}

{  //默认值处理
    let {a = 10, b = 5} = {a: 3};
    console.log(a,b);
}

//对象解构赋值场景json
{
    let metaData = {
        title: 'abc',
        test:[{
            title: 'json',
            desc: 'json desc'
        }]
    }

    let {title: dtTitle, test: [{title: jsTitle}]} = metaData;
    console.log(dtTitle,jsTitle); // abc json    
    console.log(test[0].title)
}

