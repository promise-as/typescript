// 3.1 函数的定义

// es5 定义函数的方法
/*
  // 函数声明方法
    function run() {

      return 'run';

    }

  // 匿名函数
    var nun2 = function() {

      return 'run2';

    }

*/

// ts 中定义函数的方法

// 函数声明方法
// function run(): string {
//   return 'run'
// }

// 错误写法
// function run(): string {
//   return 123;
// }


// 匿名函数
// var fun2 = function (): number {
//   return 123;
// }

// alert(fun2()) //  调用方法


// ts 中定义方法传参

// function getInfo(name: string, age: number): string {

//   return `${name} --- ${age}`;

// }

// alert(getInfo('zhangsan', 20));


// 匿名函数
// var getInfo = function(name: string, age: number): string {

//   return `${name} --- ${age}`;

// }

// alert(getInfo('lisi', 30));

// 没有返回值的方法
// function run():void{

//   console.log('run');

// }
// run();



// 3.2 方法可选参数
// es5 里面方法的实参和形参可以不一样，但是 ts 中必须一样，如果不一样就需要配置可选参数

/*

  function getInfo(name: string, age?: number):string{
    if(age){
      return `${name} -- ${age}`;
    }else{
      return `${name} --- 年龄保密`;
    }
  }

  alert(getInfo('zhangsan'))

  alert(getInfo('zhangsan', 123))

*/

// 注意：可选参数必须配置到参数的最后面
// 错误写法
/*
  function getInfo(name?: string, age: number):string{
    if(age){
      return `${name} -- ${age}`;
    }else{
      return `${name} --- 年龄保密`;
    }
  }

  alert(getInfo('zhangsan'))
*/


// 3.3 默认参数 也可是 可选参数

// es5里面没法设置默认参数，es6 和 ts 中都可以设置默认参数

/*
  function getInfo(name: string, age: number = 20): string {
    if (age) {
      return `${name} -- ${age}`;
    } else {
      return `${name} --- 年龄保密`;
    }
  }

  // alert(getInfo('张三'))

  // alert(getInfo('张三', 30)) // 可选参数

*/


// 3.4 剩余参数

// function sum(a:number, b:number, c:number, d:number):number {

//   return a + b + c + d;

// }

// alert(sum(1, 2, 3, 4));


// 三点运算符 接受形参传过来的值
/*

  function sum(...result: number[]): number {

    var sum = 0;

    for (var i = 0; i < result.length; i++) {

      sum += result[i];
    }

    return sum;

  }

  alert(sum(1, 2, 3, 4, 5));

*/

/*

  function sum(a: number, b: number, ...result: number[]): number {

    var sum = a + b;

    for (var i = 0; i < result.length; i++) {

      sum += result[i];
    }

    return sum;

  }

  alert(sum(1, 2, 3, 4, 5));

*/

// 3.5 函数重载

  // java 中方法的重载：重载指的是两个或者两个以上同名函数，但他们的参数不一样，这时会出现重载的情况

  // typescript 中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。