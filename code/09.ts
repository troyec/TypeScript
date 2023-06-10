function createArr<T>(length: number, value: T): Array<T>{
  // 或：function createArr<T>(length: number, value: T): T[]{
      let arr: T[] = [];
      for(var i=0;i<length;i++){
          arr[i] = value;
      }
      return arr;
  }
  
  console.log( createArr<string>(3, "猴子的救兵") );  // [ '猴子的救兵', '猴子的救兵', '猴子的救兵' ]
  

  // 情况一：多个参数传入
  function fn5<U, T>(flag: U, value: T): Array<U | T>{
      let arr: Array<U | T> = [flag, value];
      return arr;
  }
  
  console.log(fn5(true, "我是孙悟空"))		// [ true, '我是孙悟空' ]
  
  // 情况二：单个参数传入，且为数组
  function fn6<U, T>(arr: [U, T]): Array<U | T>{
      let newArr: Array<U | T> = [...arr];
      return newArr;
  }
  
  console.log(fn6([true, "我是孙悟空"]))  // [ true, '我是孙悟空' ]
  
export {}