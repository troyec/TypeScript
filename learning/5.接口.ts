// 我们使用接口来定义对象的类型。接口是对象的状态(属性)和行为(方法)的抽象(描述)
interface Per1 {
  name: string;
  age: number;
}
let tom: Per1 = {
  name: 'Tom',
  age: 25
};

// 只读与可选
interface Per2 {
  readonly name: string;
  age?: number;
}

// 索引签名
// 有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 索引签名 的形式来满足上述要求
interface Per3 {
  name: string;
  age?: number;
  [prop: string]: any; //  prop字段必须是 string类型 or number类型。 值是any类型，也就是任意的
}

const p1:Per3 = { name: "张麻子" };
const p2:Per3 = { name: "树哥", age: 28 };
const p3:Per3 = { name: "汤师爷", sex: 1 }

// interface(接口)与type(类型别名)的区别
// 实际上，在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。
// chatGPT

interface MyInterface {
  name: string;
  say(): void;
  sayHi:()=>void;
}

interface MyInterface2 extends MyInterface {
  sex: string;
}

let pers:MyInterface2 = {
  name:'树哥',
  sex:'男',
  say(): void {
    console.log("hello 啊，树哥！");
  },
  sayHi:():void => {
    console.log('hello');
  }
}

