import StateMachine from 'javascript-state-machine'

const fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve', // event name
      from: 'pengding',
      to: 'fullfiled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // listen resolve
    onResolve: function(state, data) {
      // state
      data.succesList.forEach(fn => fn())
    },
    // listen reject
    onReject: function(state, data) {
      data.succesList.forEach(fn => fn())
    }
  }
})

// definition promise
class myPromise {
  constructor(fn) {
    this.succesList = []
    this.failList = []

    fn(function() {
      // resolve
      fsm.resolve(this)
    }, function() {
      // reject
      fsm.reject(this)
    })
  }
  then(succesFn, failFn) {
    this.succesList.push(succesFn)
    this.failList.push(failFn)
  }
}

// test
function loadImg(src) {
  const promise = new Promise(function(resolve, reject) {
    let img = document.createElement('img')
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject()
    }
    img.src = src
  })
  return promise
}

let src = 'https://img4.mukewang.com/570cfbfa0001ec3b06400640-100-100.jpg'
let result = loadImg(src)

result.then(function() {
  console.log('ok1')
}, function() {
  console.log('fail1')
})

result.then(function() {
  console.log('ok2')
}, function() {
  console.log('fail2')
})