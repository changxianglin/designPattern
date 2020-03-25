// remember
class Memento {
  constructor(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
}

// list 
class CreateTaker {
  constructor() {
    this.list = []
  }
  add(memento) {
    this.list.push(memento)
  }
  get(index) {
    return this.list[index]
  }
}

// editor
class Editor {
  constructor() {
    this.content = null
  }
  setContent(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
  saveContentToMemento(memento) {
    return new Memento(memento)
  }
  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

// test
let editor = new Editor()
let createTaker = new CreateTaker()

editor.setContent('111')
editor.setContent('222')
createTaker.add(editor.saveContentToMemento()) // cache 
editor.setContent('333')
createTaker.add(editor.saveContentToMemento()) // cache
editor.setContent('444')

console.log(editor.getContent())
editor.getContentFromMemento(createTaker.get(1))
console.log(editor.getContent())
editor.getContentFromMemento(createTaker.get(0))
console.log(editor.getContent())