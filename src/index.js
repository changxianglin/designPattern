function log(target, name, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function() {
    console.log(`call ${name} width`, arguments)
    return oldValue.apply(this, arguments)
  }
  return descriptor
}

class Math {
  @log
  add(a, b) {
    return a + b
  }
}

const math = new Math()
const result = math.add(2, 4)
console.log('result', result)