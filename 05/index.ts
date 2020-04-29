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
// 就是传入对象的约束 属性接口
/*
  interface FunllName {
    firstName: string; // 注意以分号结束
    secondName: string;
  }
  function printName(name: FunllName){
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '--' + name.secondName);
  }

  // printName('1314'); // 错误

  var obj = { // 传入的参数必须包含 firstName secondName
    age: 20,
    firstName: '张',
    secondName: '三'
  }
  printName(obj);
*/

// 批量
/*
  interface FunllName {
    firstName: string; // 注意以分号结束
    secondName: string;
  }
  function printName(name: FunllName){
    // 必须传入对象 firstName secondName
    console.log(name.firstName + '--' + name.secondName);
  }

  function printInfo(info: FunllName){
    // 必须传入对象 firstName secondName
    console.log(info.firstName + info.secondName);
  }

  var obj = { // 传入的参数必须包含 firstName secondName
    age: 20,
    firstName: '张',
    secondName: '三'
  }
  printName(obj);

  var info = { // 传入的参数必须包含 firstName secondName
    firstName: '李',
    secondName: '四'
  }
  printName(info);
*/


// 接口：可选属性
/*
  interface FunllName{
    firstName: string;
    secondName: string;
  }

  function getName(name: FunllName){

    console.log(name);
    
  }
  // 参数的顺序可以不一样
  getName({
    secondName: 'secondName',
    firstName: 'firstName'
  })
*/

interface FunllName{
  firstName: string;
  secondName?: string;
}

function getName(name: FunllName){

  console.log(name);
  
}
// 参数的顺序可以不一样
getName({
  firstName: 'firstName'
})