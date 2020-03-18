import { deprecate } from 'core-decorators'

class Person {
  @deprecate('at right now no support', {url: 'www.zhourong.host'})
  name() {
    return 'zhang san'
  }
}

const p = new Person()
p.name()