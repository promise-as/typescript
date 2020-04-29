// 只能返回 string 类型的数据
// function getData(value: string): string {
//   return value;
// }

// 同时返回 string 类型 和 number 类型（代码冗余）
// function getData1(value: string): string{
//   return value;
// }
// function getData2(value: string): string{
//   return value;
// }

// 同时返回 string 类型 和 number 类型  any 可以解决这个问题
// function getData(value:any):any{
//   return '哈哈哈';
// }

// getData(123);
// getData('str');


// any 放弃了类型检查，传入什么，返回什么。
// 比如：传入 number 类型必须返回 number 类型，传入 string 类型必须返回 string 类型

// 传入的参数类型和返回的类型类型可以不一致
// function getData(value: any):any{
//   return '哈哈哈';
// }

// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// function getData<T>(value: T):T{
//   return value;
// }
// console.log(getData<number>(123));
// console.log(getData<string>('str'));
// console.log(getData<number>('1314')); // 错误写法

// function getData<T>(value: T):any{
//   return '9527';
// }
// console.log(getData<number>(123)); // 参数必须是 number
// console.log(getData<string>('str'));


// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。
// 通过类的泛型来实现
/*
  class MinClass {
    public list: number[] = [];
    add(num: number) {
      this.list.push(num)
    }
    min(): number {
      var minNum = this.list[0];
      for (var i = 0; i < this.list.length; i++) {
        if (minNum > this.list[i]) {
          minNum = this.list[i];
        }
      }
      return minNum;
    }
  }

  var m = new MinClass();

  m.add(10);
  m.add(5);
  m.add(6);
  m.add(8);
  console.log(m.min());
*/

// 类的泛型
/*
  class MinClass<T>{
    public list:T[] = [];

    add(value: T):void{
      this.list.push(value);
    }

    min():T{
      var minNum = this.list[0];
      for(var i = 0; i < this.list.length; i++){
        if(minNum > this.list[i]){
          minNum = this.list[i];
        }
      }
      return minNum;
    }
  }
  var m1 = new MinClass<number>(); // 实例化类 并且制定了类的T代表的类型是 number
  m1.add(1)
  m1.add(2)
  m1.add(3)
  console.log(m1.min());

  var m2 = new MinClass<string>(); // 实例化类 并且制定了类的T代表的类型是 string
  m2.add('a')
  m2.add('b')
  m2.add('c')
  console.log(m2.min());
*/


// 函数类型接口
/*
  interface ConfigFn {
    (value1: string, value2: string): string;
  }
  var setData: ConfigFn = function (value1: string, value2: string): string {
    return value1 + value2;
  }
  console.log(setData('name', '张三'));
*/


// 泛型接口（第一种）
/*
  interface ConfigFn {
    <T>(value: T): T;
  }
  var setData: ConfigFn = function <T>(value: T): T {
    return value;
  }
  console.log(<string>('张三'));
  // console.log(<string>(111)); // 错误写法
*/


// 泛型接口（第一种）
interface ConfigFn {
  <T>(value: T): T;
}
var setData: ConfigFn = function <T>(value: T): T {
  return value;
}
console.log(<string>('张三'));
console.log(<string>(111)); // 错误写法