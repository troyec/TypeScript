// 联合类型
// 表示多种类型中的一种
let state:string|number
state = 'to be or not to be'
state = 1

// 类型别名, 它只是起了一个新名字，并没有创建新类型。类型别名常用于联合类型。
type count = number | number[]
let nums:count = 1

// 交叉类型
// 交叉类型就是跟联合类型相反，用&操作符表示，交叉类型就是两个类型必须存在
// 交叉类型取的多个类型的并集，但是如果key相同但是类型不同，则该key为never类型
interface IpersonA{
  name:string,
  age:number
}
interface IpersonB{
  name:string,
  gender:string
}
let person:IpersonA & IpersonB = {
  name:'叶修',
  age:18,
  gender:'男'
}

// 类型守卫
// 类型守卫是运行时检查，确保一个值在所要类型的范围内
// 1.in关键词
interface InObj1 {
  a: number,
  x: string
}
interface InObj2 {
  a: number,
  y: string
}
function isIn(arg: InObj1 | InObj2) {
  // x 在 arg 打印 x
  if ('x' in arg) console.log('x')
  // y 在 arg 打印 y
  if ('y' in arg) console.log('y')
}
isIn({a:1, x:'xxx'});
isIn({a:1, y:'yyy'});
// 2.typeof 关键字
function isTypeof( val: string | number) {
  if (typeof val === "number") return 'number'
  if (typeof val === "string") return 'string'
  return '啥也不是'
}
// instanceof
function creatDate(date: Date | string){
  console.log(date)
  if(date instanceof Date){
      date.getDate()
  }else {
      return new Date(date)
  }
}
// 自定义类型保护的类型谓词
function isNumber(num: any): num is number {
  return typeof num === 'number';
}
function isString(str: any): str is string{
  return typeof str=== 'string';
}
