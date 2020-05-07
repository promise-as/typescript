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
class MysqlDb<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  updated(info: T, id: number): boolean {
    console.log(info);
    
    console.log(id);
    
    return true
  }
}

// 想给 User 表增加数据
// 1. 定一个 User 类和数据库进行映射
// class User {
//   username: string | undefined;
//   password: string | undefined;
// }

// var u = new User();
// u.username = '张三';
// u.password = '123456';
// var Db = new MysqlDb<User>();
// Db.add(u);


// 2. 定一个 ArticleCate 类和数据库进行映射
class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
  constructor(params: {
    title: string | undefined,
    desc: string | undefined,
    status?: number | undefined
  }){
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}
// 增加操作
// var a = new ArticleCate({
//   title: '分类',
//   desc: '1111',
//   status: 1
// })
// // 类当做参数的泛型类
// var Db = new MysqlDb<ArticleCate>();
// Db.add(a);

// 修改操作
var a = new ArticleCate({
  title: '分类111',
  desc: '222'
});
a.status = 0;
var Db = new MysqlDb<ArticleCate>();
Db.updated(a, 12);