"use strict";
// 3.1 函数的定义
function getInfo(str) {
    if (typeof str === 'string') {
        return '我叫：' + str;
    }
    else {
        return '我的年龄是：' + str;
    }
}
// console.log(getInfo('张三')); // 正确
// console.log(getInfo(20)); // 正确
// console.log(getInfo(true)); // 错误写法
// 3.6、箭头函数 es6
// this 指向的问题 箭头函数里面的 this 指向上下文
// setTimeout(function(){
//   console.log('run');
// }, 1000)
setTimeout(function () {
    console.log('run');
}, 1000);
