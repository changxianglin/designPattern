const EventEmitter = require('events').EventEmitter

const emitter1 = new EventEmitter
// oberver some
emitter1.on('some', info => {
  console.log('fn1', info)
})

// oberver some
emitter1.on('some', info => {
  console.log('fn2', info)
})

// emitter some 
emitter1.emit('some', 'xxxxxx')