let arr1:number[] = [1,2,3,4]
let arr2:(string | number)[] = [1,"1"]
/* 
  先写js再通过ts提示补全ts
  ts实时检测,js runtime运行时
*/

arr1.push(5)
console.log(arr1);

let arr4:{name:string,age:number}[] = [
  {name: "刘备", age: 51},
  {name: "关羽", age: 51},
  {name: "张飞", age: 51}
] 

let str:any = "hello"
str = 123