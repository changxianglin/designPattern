import { readonly } from 'core-decorators'

class Person {
  @readonly
  name() {
    return 'zhang san'
  }
}

const p = new Person()
alert(p.name())

p.name = function() {
  console.log('li si')
}