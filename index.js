// Your code here
<<<<<<< HEAD
class Cat{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return (`${this.name} says meow!`)
    }
}


class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return (`${this.name} says woof!`)
    }
}
  
class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
      if(this.name === "Pablo") {
        return (`It's me! ${this.name}, the parrot!`)
      } else {
        return (`${this.name} says squawk!`)
      }
    }
}
=======
class Cat {
    constructor (name, sex){
      this.name = name;
      this.sex = sex;
    }
  }
  
  let newCat = new Cat("mikky", "mouse");
  speak() {
    return `${this.name} says meow!`;
  }
Cat.speak()

class Dog {
    constructor (name, sex){
      this.name = name;
      this.sex = sex;
    }
  }
  
class Bird {
    constructor (name, sex){
      this.name = name;
      this.sex = sex;
    }
  }
>>>>>>> 8a8ee0a333dfa42fa16406a0a1d8fe2eb0ad2b68
