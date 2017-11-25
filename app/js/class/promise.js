function hello (ready) {
    return new Promise ((resolve, reject) => {
        if (ready) {
            resolve('hello promise')
        } else {
            reject('good bye')
        }
    })
}
// resolve 方法可以使 Promise 对象的状态改变成成功，
// 同时传递一个参数用于后续成功后的操作，在这个例子当中就是 Hello World! 字符串。
// reject 方法则是将 Promise 对象的状态改变为失败，同时将错误的信息传递到后续错误处理的操作。


// hello(true).then((message) => {
//     alert(message)
// }, (error) => {
//     alert(message)
// })
hello(true).then((msg) => {
    return msg + ', i'
}).then( msg => {
    return msg + 'love you'
}).then(msg => {
    alert(msg)   //hello promise, ilove you
})