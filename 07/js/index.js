"use strict";
// 只能返回 string 类型的数据
// function getData(value: string): string {
//   return value;
// }
function getData(value) {
    return value;
}
var myGetData = getData;
console.log(myGetData('20'));
// console.log(myGetData(20)); // 错误写法
