"use strict";
/*
装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）

装饰器是过去几年中 js 最大的成就之一，已是 ES7 的标准特性之一
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
// 1.1 类装饰器：普通装饰器（无法传参）
/*
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
*/
// 1.2 类装饰器：装饰器工厂（可传参）
/*
  function logClass(params: string){
    return function(target: any){
      console.log(target);
      
      target.prototype.apiUrl = params;
    }
  }

  @logClass('https://douban.uieee.com/v2/movie/top250')
  class HttpClient {
    constructor() {
    }

    getData() {
    }
  }

  var http:any = new HttpClient();

  console.log(http.apiUrl);
*/
/*
1. 类装饰器
  下面是一个重载构造函数的例子。
  类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
*/
/*
  function logClass(target: any) {
    console.log(target);

    return class extends target {
      apiUrl: any = '我是修改后的数据';

      getData(){
        this.apiUrl = this.apiUrl + '-----';
        console.log(this.apiUrl);
      }
    }
  }

  @logClass
  class HttpClient {
    public apiUrl: string | undefined;
    constructor() {
      this.apiUrl = '我是构造函数里面的 apiUrl '
    }

    getData() {
      console.log(this.apiUrl);
    }
  }

  var http = new HttpClient();
  http.getData();
*/
/*
2. 属性装饰器
  属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2. 成员的名字
*/
// 类装饰器
// function logClass(params: string) {
//   return function (target: any) {
//     // console.log(target);
//     // console.log(params);
//   }
// }
// 属性装饰器
// function logPropety(params: any) {
//   return function (target: any, attr: any) {
//     console.log(target);
//     console.log(attr);
//     target[attr] = params;
//   }
// }
// @logClass('xxx')
// class HttpClient {
//   @logPropety('https://douban.uieee.com/v2/movie/top250')
//   public url: any | undefined;
//   constructor() {
//   }
//   getData() {
//     console.log(this.url);
//   }
// }
// var http = new HttpClient();
// http.getData();
/*
3. 方法装饰器
  它会被应用到方法的 属性描述符上，可以用来监视，修改或者修改方法定义。

  方法装饰会在运行时传入下列3个参数：
    1. 对于静态成员来说是类的构造函数，对于实例成员的原型对象。
    2. 成员的名字。
    3. 成员的属性描述符
*/
// 方法装饰器一
/*
  function get(params: any) {

    return function (target: any, methodName: any, desc: any) {
      console.log(target);
      console.log(methodName);
      console.log(desc);

      target.apiUrl = 'xxx';
      target.run = function(){
        console.log('run');
      }
    }
  }

  class HttpClient {
    public url: any | undefined;
    constructor() {
    }
    @get('https://douban.uieee.com/v2/movie/top250')
    getData() {
      console.log(this.url);
    }
  }

  var http:any = new HttpClient();
  console.log(http.apiUrl);
  http.run();
*/
// 方法装饰器二
/*
  function get(params: any) {

    return function (target: any, methodName: any, desc: any) {
      console.log(target);
      console.log(methodName);
      console.log(desc.value);

      // 修改装饰器的方法 把装饰器方法里面传入的所有参数改为 string 类型

      // 1. 保存当前的方法
      var oMethod = desc.value;
      desc.value = function(...args:any[]){
        args = args.map((value) => {
          return String(value);
        })

        console.log(args);

        oMethod.apply(this, args);
        
      }
    }
  }

  class HttpClient {
    public url: any | undefined;
    constructor() {
    }
    @get('https://douban.uieee.com/v2/movie/top250')
    getData(...args: any[]) {
      console.log(args);
      
      console.log('我是 getData 里面的方法');
    }
  }

  var http = new HttpClient();

  http.getData(123, 'xxx')
*/
/*
4. 方法参数装饰器
  参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，
  传入下列3个参数：
    1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2. 参数的名字。
    3. 参数在函数参数列表中的索引。
*/
/*
  function logParams(params: any){

    return function(target: any, methodName: any, paramsIndex: any){
      console.log(target);
      
      console.log(methodName);

      console.log(paramsIndex);

      target.apiUrl = params;
    }
  }

  class HttpClient {
    public url: any | undefined;
    constructor() {
    }
    getData(@logParams('xxx') uuid: any) {
      console.log('我是 getData 里面的方法');
    }
  }

  var http:any = new HttpClient();

  http.getData(123456)

  console.log(http.apiUrl);
*/
// 装饰器执行顺序
// 属性 》 方法 》 方法参数 》 类
// 如果有多个同样的装饰器，他会先执行后面的
function logClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log('属性装饰器');
    };
}
function logMethod(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器');
    };
}
function logParams1(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器1');
    };
}
function logParams2(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器2');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        return true;
    };
    HttpClient.prototype.setData = function (attr, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClient.prototype, "apiUrl", void 0);
    __decorate([
        logMethod()
    ], HttpClient.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient.prototype, "setData", null);
    HttpClient = __decorate([
        logClass1('https://douban.uieee.com/v2/movie/top250'),
        logClass2('xxx')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
