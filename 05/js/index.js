"use strict";
// 1. 属性接口  对 json 的约束
// ts 中定义方法
/*
  function printLabel():void {
    console.log('printLabel');
  }
  printLabel();
*/
// ts 中定义方法传入参数
/*
  function printLabel(label: string):void {
    console.log('printLabel');
  }
  printLabel('hahaha');
*/
// ts 中自定义方法传入参数对 json进行约束
/*
  function printLabel(labelInfo: {label: string}):void{
    console.log('printLabel');
  }

  // printLabel('hahaha'); // 错误写法
  // printLabel({name: '张三'}) // 错误写法
  printLabel({label: '张三'}) // 正确的写法
*/
// 对批量方法传入参数进行约束
// 接口：行为和动作的规范，对批量方法进行约束
