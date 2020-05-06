"use strict";
/*
定义一个 User 的类，这个类的作用就是映射数据库字段，
然后定义一个 MysqlDb 的类，这个类用于操作数据库，
然后把 User 类作为参数传入到 MysqlDb 中
*/
/*
var user = new User({
  username: '张三',
  password: '123456'
})

var Db = new MysqlDb();
Db.add(user);
*/
// 把类作为参数来约束数据传入的类型
// class User {
//   username: string | undefined;
//   password: string | undefined;
// }
// class MysqlDb {
//   add(user: User): boolean {
//     console.log(user);
//     return true;
//   }
// }
// var u = new User();
// u.username = '张三';
// u.password = '123456';
// var Db = new MysqlDb();
// Db.add(u);
// class ArticleCate {
//   title: string | undefined;
//   desc: string | undefined;
//   status: number | undefined;
// }
// class MysqlDb {
//   add(info: ArticleCate): boolean {
//     console.log(info);
//     return true;
//   }
// }
// var a = new ArticleCate();
// a.title = '国内';
// a.desc = '国内新闻';
// a.status = 1;
// var Db = new MysqlDb();
// Db.add(a);
// 操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDb;
}());
// 想给 User 表增加数据
// 1. 定一个 User 类和数据库进行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
var Db = new MysqlDb();
Db.add(u);
// 2. 定一个 ArticleCate 类和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
