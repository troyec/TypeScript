// 接口
interface Iobj {
  name:string,
  age:number
}
function fn3(obj:Iobj){
  console.log(`${obj.name}今年${obj.age}岁`);
  
}
// 对象明确所有属性的类型
fn3({name:"张三",age:12})

interface Iobj2 {
  name:string,
  age?:number, //可缺省属性
  [propName:string]:any
}
function fn4(obj:Iobj2){
  console.log(`${obj.name}今年${obj.age || 0}岁`);
}
// 对象明确所有属性的类型
fn4({name:"张三"})
