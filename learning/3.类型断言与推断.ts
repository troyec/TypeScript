// 类型推断
// 声明时给了初始值会进行类型推断，没给初始值会被推断成any
// let x = 1;
// x = true; // 报错


// 类型断言
// 某些情况下，我们可能比typescript更加清楚的知道某个变量的类型，所以我们可能希望手动指定一个值的类型
let str: any = "to be or not to be";
// <>写法：<>写在变量前面
let len1:number = (<string>str).length
// as写法
let len2:number = (str as string).length
console.log(len1,len2);

// 非空断言
// 在上下文中当类型检查器无法断定类型时，可以使用缀表达式操作符 ! 进行断言操作对象是非 null 和非 undefined 的类型
let user: string | null | undefined;
// console.log(user!.toUpperCase()); // 编译正确
// console.log(user.toUpperCase()); // 错误

// 确定赋值断言
let value1!:number
// console.log(value1); // Variable 'value' is used before being assigned.