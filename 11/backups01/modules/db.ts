interface DBI<T> {

  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];

}

// 定义一个操作 mysql 数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
export class MySqlDb<T> implements DBI<T> {

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
export class MsSqlDb<T> implements DBI<T>{

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
