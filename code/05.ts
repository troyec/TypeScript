// 类型断言

let arr:number[] = [1,2,4,5,6]

let result:number[] = arr.filter(num=>num>1) as number[]

console.log(result);
