// star
const star = {
  name: '张xxx',
  age: 25,
  phone: '13800001111'
}

// broker
let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      // broker phone
      return 'broker: 17889989988'
    }
    if(key === 'price') {
      // broker speak price
      return 120000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if(key === 'customPrice') {
      if(val < 100000) {
        // lower 10w
        throw new Error('to lower price')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

// test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 9000
console.log(agent.customPrice)