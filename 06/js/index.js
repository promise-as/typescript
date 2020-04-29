"use strict";
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
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Web.prototype.work = function () {
        console.log(this.name + '写代码');
    };
    return Web;
}(Programmer));
var w = new Web('小李');
// w.eat();
w.coding('写ts代码');
