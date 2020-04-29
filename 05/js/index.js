"use strict";
// 1. 属性接口  对 json 的约束
function getName(name) {
    console.log(name);
}
// 参数的顺序可以不一样
getName({
    firstName: 'firstName'
});
