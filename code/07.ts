class Person {
  name:string;
  constructor(name:string){
    this.name = name
  }
}

class Man extends Person{
  gender:boolean;
  constructor(name:string,gender:boolean){
    super(name)
    this.gender = gender
  }
  sayInfo():void{
    console.log(`${this.name}是个${this.gender? '男':'女'}人`);
    
  }
}

let chen = new Man('关羽',true)
chen.sayInfo()