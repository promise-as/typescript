/*
装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）

装饰器是过去几年中 js 最大的成就之一，已是 ES7 的标准特性之一
*/

// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。


// 类装饰器
function logClass(params: any) {

  console.log(params);
  
  // params 就是当前类
  params.prototype.apiUrl = '动态扩展的属性';

  params.prototype.run = function(){

    console.log('我是一个run方法');
    
  }

}

@logClass
class HttpClient {

  constructor() {

  }

  getData() {

  }
}

var http:any = new HttpClient();
console.log(http.apiUrl);
http.run();
