"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.MySqlDb = MySqlDb;
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
exports.MsSqlDb = MsSqlDb;
