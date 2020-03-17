class Adaptee {
  specificRequest() {
    return 'Germany State'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - transform - china State`
  }
}

// test 
let target = new Target()
let res = target.request()
console.log(res)