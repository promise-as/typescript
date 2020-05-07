"use strict";
/*
命名空间：
  在代码量较大的情况下，为了避免各种变量命名想冲突，可将相似功能的函数、类、接口等放置到命名空间内
  同 Java 的包、.Net 的命名空间一样，TypeScript 的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
  命名空间内的对象通过 export

命名空间和模块的区别：
  命名空间：内部模块，主要用于组织代码，避免命名冲突。
  模    块：ts 的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
*/
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./modules/animal");
var d = new animal_1.A.Dog('小黑');
d.eat();
var dog = new animal_1.B.Dog('小花');
dog.eat();
