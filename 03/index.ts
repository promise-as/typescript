// 1. ts 中的类的定义
/*

es5:
  function Person(name){
    this.name = name;
    this.run = function(){
      console.log(this.name);
    }
  }
  var p = new Person('张三');
  p.run();

*/

/*
ts 中定义类
  class Person{

    name: string; // 属性 前面省略了 public 关键词

    constructor(n: string){ // 构造函数  实例化类的时候触发的方法

      this.name = n;
    }

    run(): void{

      console.log(this.name);
      
    }
  }
  var p = new Person('张三');

  p.run();
*/

/*
  class Person{
    name: string;

    constructor(name: string){ // 构造函数 实例化的时候触发的方法
      this.name = name;
    }

    getName(): string{
      return this.name;
    }
    setName(name: string):void{
      this.name = name;
    }

  }
  var p = new Person('张三');

  console.log(p.getName());

  p.setName('李四');

  console.log(p.getName());
*/


// 2. ts 中实现继承 extends、super

class Person{
  name: string;
  
  constructor(name: string){
    this.name = name;
  }

  run():string{
    return `${this.name}在运动`
  }
}
// var p = new Person('王五');
// console.log(p.run());

class Web extends Person{
  
  constructor(name: string){

    super(name);
  }
}

var w = new Web('李四');
w.run();