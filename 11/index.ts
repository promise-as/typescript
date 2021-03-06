/*

功能：定义一个操作数据库的库 支持 MySql MsSql MongoDb

要求1：MySql MsSql MongoDb功能一样 都有 add update delete get方法

注意：约束同一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口，需要代码重用所有用到泛型

  1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

  2. 泛型 通俗理解：泛型就是解决 类 接口 方法的复用性

*/

import { UserClass, UserModel } from './model/user';
import { ArticleClass, ArticleModel } from './model/article';

var u = new UserClass();

// 增加数据
u.username = '张三';
u.password = '12345678';
UserModel.add(u);


// 获取user表数据
var res = UserModel.get(123);
console.log(res);


// 获取文章表的数据
var aRes = ArticleModel.get(1);

console.log(aRes);
