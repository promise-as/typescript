/*

功能：定义一个操作数据库的库 支持 MySql MsSql MongoDb

要求1：MySql MsSql MongoDb功能一样 都有 add update delete get方法

注意：约束同一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口，需要代码重用所有用到泛型

  1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

  2. 泛型 通俗理解：泛型就是解决 类 接口 方法的复用性

*/

interface DBI<T> {

  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];

}

// 定义一个操作 mysql 数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
class MySqlDb<T> implements DBI<T> {

  constructor(){

    console.log('数据库建立连接');
    
  }

  add(info: T): boolean {

    console.log(info);
    return true;

  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}


// 定义一个操作 mssql 数据库的类
class MsSqlDb<T> implements DBI<T>{

  constructor(){
    
    console.log('数据库建立连接');
    
  }

  add(info: T): boolean {
    
    console.log(info);
    return true;

  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    
    var list = [

      {
        title: 'xxx',
        desc: 'xxxxx'
      },
      {
        title: 'xxx',
        desc: 'xxxxx'
      }
    ]

    return list;
  }

}

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


class User {
  username: string | undefined;
  password: string | undefined;
}

var u = new User();
u.username = '李四';
u.password = '123456';

var oMssql = new MsSqlDb<User>(); // 类作为参数来约束数据传入的类型

oMssql.add(u);

// 获取 User 表 ID = 4 的数据
var data = oMssql.get(4);

console.log(data);
