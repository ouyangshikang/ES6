{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    let result = regex.test('xyz123');
    let result2 = regex.test('xyz123');
    console.log(result, result2);

    let regex3 = new RegExp(/xyz/ig, 'i');   //后面的修饰符会覆盖前面的修饰符，flags用来获取修饰符
    console.log(regex3.flags);
}

{ //y 修饰符
    let s = 'bbb_bb_b';
    let a = /b+/g;
    let b = /b+/y;
    console.log('第一次匹配:', a.exec(s), b.exec(s));  // 结果一样
    console.log('第二次匹配:', a.exec(s), b.exec(s));  // y修饰符的没有匹配到结果，null
    console.log('第三次匹配:', a.exec(s), b.exec(s));  // y修饰符的没有匹配到结果，null
    console.log('第四次匹配:', a.exec(s), b.exec(s));  // y修饰符的没有匹配到结果，null
    console.log('第五次匹配:', a.exec(s), b.exec(s));  // y修饰符的没有匹配到结果，null
    // y和g都是全局匹配，不同的是g从上一次匹配的位置继续匹配，y匹配的必须是紧跟着下一个的字符(_)开始匹配
    console.log(a.sticky, b.sticky); //es6新增sticky属性判断是否开启y修饰符
}


{
    // U修饰符,处理Unicode字符
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));   //'\uD83D\uDC2A'当成两个字节
    console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));  // '\uD83D\uDC2A'当成一个字符，所以为false

    console.log(`\u{20BB7}`);
    let str = '𠮷';
    console.log(/^.$/.test(str)); // false   .只能匹配小于2个字节长度的任意字符
    console.log(/^.$/u.test(str)); // true
}


















