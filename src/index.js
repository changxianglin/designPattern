class People {
  constructor(name, house) {
    this.name = name
    this.house = house
  }

  saySomething() {
    
  }
}

class A extends People {
  constructor(name, house) {
    super(name, house)
  }
  saySomething() {
    alert('I am A')
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house)
  }
  saySomething() {
    alert('I am B')
  }
}

// UML 图
// https://www.processon.com
// MS office visio
let aHouse = new House('北京')
let a = new A('a', aHouse)
a.saySomething()
let b = new B('b')
b.saySomething()