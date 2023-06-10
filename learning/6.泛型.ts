// 基本使用
// 泛型的语法是尖括号 <> 里面写类型参数，一般用 T 来表示第一个类型变量名称，其实它可以用任何有效名称来代替,比如我们用NIUBI也是编译正常的
function getValue<T>(arg:T):T  {
  return arg;
}
// 泛型就像一个占位符一个变量，在使用的时候我们可以将定义好的类型像参数一样传入，原封不动的输出
// 1.定义要使用的类型
getValue<string>('树哥'); // 定义 T 为 string 类型
// 2.利用 typescript 的类型推断
getValue('树哥') // 自动推导类型为 string


// 多个参数
function getValue1<T, U>(arg:[T,U]):[T,U] {
  return arg;
}
// 使用
const str1 = getValue(['树哥', 18]);


// 泛型约束

interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg:T):T  {
  console.log(arg.length); // 这里就不会报错了
  return arg;
}

// 泛型接口
interface KeyValue<T,U> {
  key: T;
  value: U;
}
const person1:KeyValue<string,number> = {
  key: '树哥',
  value: 18
}
const person2:KeyValue<number,string> = {
  key: 20,
  value: '张麻子'
}

// 泛型类
// class Test<T> {
//   value: T;
//   add: (x: T, y: T) => T;
// }

// let myTest = new Test<number>();
// myTest.value = 0;
// myTest.add = function (x, y) {
//   return x + y;
// };

// 泛型类型别名
type Cart<T> = { list: T[] } | T[];
let c1: Cart<string> = { list: ["1"] };
let c2: Cart<number> = [1];

// 泛型参数的默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 泛型工具类型
// 1.typeof

// 内置工具类型

