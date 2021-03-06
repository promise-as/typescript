"use strict";
// 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 静态属性 静态方法
/*
  function Person(){

    this.run1 = function(){

    }
  }
  Person.name = '哈哈哈';

  Person.run2 = function(){  // 静态方法

  }
  var p = new Person();
  Person.run2(); // 静态方法的调用
*/
/*
  class Person {
    public name: string;
    public age: number = 20;
    // 静态属性
    static sex = '男';

    constructor(name: string) {
      this.name = name;
    }

    run(){ // 实例方法
      console.log(`${this.name}在运动`);
    }
    work(){
      console.log(`${this.name}在工作`);
    }
    static print(){ // 静态方法 里面没法直接调用类里面的属性
      console.log('print方法' + Person.sex);
    }
  }
  // var p = new Person('张三');
  // p.run();
  Person.print();
  console.log(Person.sex);
*/
// 多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
// 多态属于继承
/*
  class Animal {

    name: string;
    constructor(name: string) {
      this.name = name;
    }

    eat(){  // 具体吃什么 不知道，具体吃什么？继承他的子类去实现，每一个子类的表现不一样
      console.log('吃的方法');
    }
  }

  class Dog extends Animal{

    constructor(name: string){
      super(name)
    }

    eat(){

      return this.name + '吃狗粮'
    }
  }

  class Cat extends Animal{

    constructor(name: string){
      super(name)
    }

    eat(){

      return this.name + '吃老鼠'
    }
  }
*/
// typescript 中的抽象类：它是提供其他继承的基类，不能直接被实例化
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract 抽象方法只能放在抽象里面
// 抽象类和抽象方法用来定义标准，标准：Animal 这个类要求它的子类必须包含 eat 方法
// 标准：
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('其他地方可以不实现');
    };
    return Animal;
}());
// var a = new Animal()  // 错误的写法
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dog;
}(Animal));
var d = new Dog('小花花');
d.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.run = function () {
    };
    Cat.prototype.eat = function () {
        console.log(this.name + '吃老鼠');
    };
    return Cat;
}(Animal));
var c = new Cat('小花猫');
c.eat();
