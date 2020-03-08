class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    alert(`${this.name} Eat Something!!!`)
  }
  
  speak() {
    alert(`My Name Is ${this.name}, age ${this.age}`)
  }
}

let zhang = new Person('zhang', 22)
zhang.eat()
zhang.speak()

let li = new Person('li', 25)
li.eat()
li.speak()