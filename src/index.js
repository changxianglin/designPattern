class People {
  name
  age
  protected weight
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 120
  }

  eat() {
    alert(`${this.name} Eat Something!!!`)
  }
  
  speak() {
    alert(`My Name Is ${this.name}, age ${this.age}`)
  }
}

class Student extends People {
  number
  private girlfriend
  constructor(name, age, number){
    super(name, age)
    this.number = number
    this.girlfriend = 'xiaoli'
  }
  study() {
    alert(`${this.name} study`)
  }
  getWeight() {
    alert('weight ${this.weight}')
  }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.getWeight()

let xiaohong = new Student('xiaohong', 8, 'A2')
xiaohong.study()
alert(xiaohong.number)
xiaohong.speak()