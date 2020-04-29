// 接口 ajax
/*
  interface Config {
    type: string;
    url: string;
    data?:string;
    dataType: string;
  }

  // 原生 js 封装的 ajax
  function ajax(config: Config){
    var xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, true);

    xhr.send(config.data);

    xhr.onreadystatechange = function(){

      if(xhr.readyState == 4 && xhr.status == 200){

        console.log('成功');

        if(config.dataType == 'json'){
          
          console.log(JSON.parse(xhr.responseText));

        }else{

          console.log(xhr.responseText);
          
        }
        
      }
    }
  }
  ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist', // api
    data: 'name=张三',
    dataType: 'json'
  })
*/

// 函数类型接口：对方法传入的参数 以及返回值进行约束 批量约束
// 加密的函数类型接口
/*
  interface encrypt {
    (key: string, value: string): string;
  }

  var md5: encrypt = function (key: string, value: string): string {

    // 模拟操作
    return key + value;

  }
  console.log(md5('name', 'zhangsan'));

  var sha1: encrypt = function (key: string, value: string): string {

    // 模拟操作
    return key + '-----' + value;

  }
  console.log(md5('name', 'lisi'));
*/


// 可索引接口：数组、对象的约束（不常用）
// ts 定义数组的方式
/* 
  var arr:number[] = [9527, 1314]

  var arr1:Array<string> = ['111', '222']
*/


// 可索引接口 对数组的约束
/*
  interface UserArr {
    [index: number]: string
  }

  // var arr: UserArr = ['aaa', 'bbb'];
  // console.log(arr[0]);


  var arr: UserArr = [123, 'bbb']; // 错误
  console.log(arr[0]);


  可索引接口 对对象的约束
  interface UserObj {
    [index: string]: string
  }

  var arr: UserObj = {name: '张三'}
  console.log(arr);
*/


// 类 类型接口：对类的约束 和 抽象类有点相似
/*
  interface Animal {
    name: string;

    eat(str: string): void;
  }
  class Dog implements Animal {
    name: string;
    constructor(name: string){
      this.name = name;
    }
    eat(){
      console.log(this.name + '吃狗粮');
    }
  }
  var d = new Dog('小黑');
  d.eat();

  class Cat implements Animal {
    name: string;
    constructor(name: string){
      this.name = name;
    }
    eat(food: string){
      console.log(this.name + '吃' + food);
    }
  }
  var c = new Cat('小花');
  c.eat('老鼠');
*/


// 接口扩展：接口可以继承接口
/*
  interface Animal {
    eat(): void;
  }

  interface Person extends Animal {
    work(): void;
  }

  class Web implements Person {
    public name: string;
    constructor(name: string) {
      this.name = name
    }

    eat() {
      console.log(this.name + '喜欢吃馒头');
    }
    work() {
      console.log(this.name + '写代码');
    }

  }
  var w = new Web('小李');
  // w.work();
  w.eat();
*/


interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Programmer {

  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  coding(code: string) {

    console.log(this.name + code);

  }
}

class Web extends Programmer implements Person {

  constructor(name: string) {
    super(name)
  }

  eat() {
    console.log(this.name + '喜欢吃馒头');
  }
  work() {
    console.log(this.name + '写代码');
  }

}
var w = new Web('小李');
// w.eat();
w.coding('写ts代码')
