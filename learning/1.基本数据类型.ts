const s:string = '你好'
console.log(s);
const count:number = 123
console.log(count);
const flag:boolean = true
console.log(flag);

// 枚举类型
enum Color {
  RED = '红色',
  PINK = '粉色',
  BLUE = '蓝色'
}
const red:Color = Color.RED
console.log(red); 
const colorName:string = Color['BLUE']
console.log(colorName);

// 数组:内部全为同种类型
const arr1:number[] = [1,2,3]
const arr2:Array<number> = [1,2,3]

// 元组:内部可以为同种类型
const tuple:[number,string] = [1,'2']
// 一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]
const Anything:any[] = [true,1,'string']
console.log(Anything);

// any类型
// any会跳过类型检查器对值的检查，任何值都可以赋值给any类型
let value: any = 1;
value = "zhangmazi"; // 编译正确
value = []; // 编译正确
value = {};// 编译正确

// void 类型
// void 意思就是无效的, 一般只用在函数上，告诉别人这个函数没有返回值。
(function sayHello():void {
  console.log("hello");
})()

// never类型
// never 类型表示的是那些永不存在的值的类型。 例如never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 1.抛出异常，后面无法执行；2.死循环，后面无法执行
function error(msg:string):never{
  throw new Error(msg)
}
function loop():never {
  while(true){
    
  }
}

// unknown类型
// unknown与any一样，所有类型都可以分配给unknown
// 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
let key: unknown = 1;
key = "zhangmazi"; // 编译正确
key = false; // 编译正确