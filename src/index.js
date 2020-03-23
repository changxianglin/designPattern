// a prototype object
const prototype = {
  getName: function() {
    return this.first + ' ' + this.last
  },
  say: function() {
    alert('hello')
  }
}

// base prototype create x
let x = Object.create(prototype)
x.first = 'A'
x.last = 'B'
alert(x.getName())
x.say()

// base prototype create y
let y = Object.create(prototype)
y.first = 'C'
y.last = 'D'
alert(y.getName())
y.say()