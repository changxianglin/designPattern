class People {
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

class Student extends People {
  constructor(name, age, number){
    super(name, age)
    this.number = number
  }
  study() {
    alert(`${this.name} study`)
  }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
alert(xiaoming.number)
xiaoming.eat()

let xiaohong = new Student('xiaohong', 8, 'A2')
xiaohong.study()
alert(xiaohong.number)
xiaohong.speak()