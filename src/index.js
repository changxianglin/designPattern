class Person {
  constructor(name) {
    this.name = name 
  }

  getName() {
    return this.name
  }
}

let p = new Person('老师好美')
alert(p.getName())