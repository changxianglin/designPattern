const EventEmitter = require('events').EventEmitter

// extends
class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', function () {
  console.log(this.name, 'barked1')
})

simon.on('bark', function () {
  console.log(this.name, 'barked2')
})

setInterval(function () {
  simon.emit('bark')
}, 1000)