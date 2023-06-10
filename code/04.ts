function add(num1:number,num2:number):void{
  console.log(num1+num2)
}

add(1,2)

const fn1 = (num1:number,num2:number):number => {
  return num1+num2
}
console.log(fn1(1,4));
