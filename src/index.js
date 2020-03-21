class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    if(this.hasNext()) {
      return this.list[this.index++]
    } else {
      return null 
    }
  }
  hasNext() {
    if(this.index >= this.list.length) {
      return false
    } else {
      return true
    }
  }
}


class Container {
  constructor(list) {
    this.list = list
  }

  // iterator
  getIterator() {
    return new Iterator(this)
  }
  
}

// test
var arr = [1, 2, 3, 4, 5, 6]
const container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasNext()) {
  console.log(iterator.next())
}