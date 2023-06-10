// 剩余参数
function fn2(num1:number, ...arg:number[]):number {
  
  return arg.reduce((prev,next)=>prev+next,num1)
}

console.log(fn2(1,2,3,4,5));
