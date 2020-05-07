"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = 'xxxxx';
// 第一种暴露
/*
export function getData(): any[] {
  
  console.log('获取数据库的数据');

  return [

    {
      title: '1314'
    },
    {
      title: '9527'
    }
  ]
  
}
export function save(){

  console.log('保存数据成功');
  
}
*/
function getData() {
    console.log('获取数据库的数据');
    return [
        {
            title: '1314'
        },
        {
            title: '9527'
        }
    ];
}
function save() {
    console.log('保存数据成功');
}
// export {
//   dbUrl, getData, save
// }
exports.default = getData();
