"use strict";
/*

功能：定义一个操作数据库的库 支持 MySql MsSql MongoDb

要求1：MySql MsSql MongoDb功能一样 都有 add update delete get方法

注意：约束同一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口，需要代码重用所有用到泛型

  1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

  2. 泛型 通俗理解：泛型就是解决 类 接口 方法的复用性

*/
// 定义一个操作 mysql 数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log('数据库建立连接');
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MySqlDb;
}());
// 定义一个操作 mssql 数据库的类
var MsSqlDb = /** @class */ (function () {
    function MsSqlDb() {
        console.log('数据库建立连接');
    }
    MsSqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSqlDb.prototype.get = function (id) {
        var list = [
            {
                title: 'xxx',
                desc: 'xxxxx'
            },
            {
                title: 'xxx',
                desc: 'xxxxx'
            }
        ];
        return list;
    };
    return MsSqlDb;
}());
// 操作用户表 定义一个 User 类和数据表做映射
/*
class User {
  username: string | undefined;
  password: string | undefined;
}

var u = new User();
u.username = '张三';
u.password = '123456';

var oMysql = new MySqlDb<User>(); // 类作为参数来约束数据传入的类型

oMysql.add(u);
*/
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '李四';
u.password = '123456';
var oMssql = new MsSqlDb(); // 类作为参数来约束数据传入的类型
oMssql.add(u);
// 获取 User 表 ID = 4 的数据
var data = oMssql.get(4);
console.log(data);
