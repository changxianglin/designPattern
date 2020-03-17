class Circle {
  draw() {
    console.log('Draw a circle')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('setting red border')
  }
}


// test 
let circle = new Circle()
circle.draw()

console.log('-------split line-----------')

let dec = new Decorator(circle)
dec.draw()