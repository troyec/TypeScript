// object与Object
// {} 空对象类型和大 Object 一样 也是表示原始类型和非原始类型的集合
let obj:object = {}
let Obj:Object = {}

// class 类
class Person {
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  sayHello():void{
    // 模板字符串
    console.log(`hello,${this.name}`);
  }
}

// 数组
const flag1:number[] = [1,2,3]
const flag2:Array<number> = [1,2,3]

// 函数
function add(x:number,y:number):number{
  return x+y
}
// 可选参数
function add1(x:number,y?:number):number{
  return y ? y+x : x
}
// 默认参数
function add2(x:number,y:number = 0):number{
  return x+y
}
// 剩余参数
function add3(...numbers:number[]):number{
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}


