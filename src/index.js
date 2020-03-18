function minxins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    alert('foo')
  }
}

@minxins(Foo)
class Myclass {

}

const obj = new Myclass()
obj.foo()