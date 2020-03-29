import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'

export default class Item {
  constructor(list, data) {
    this.list = list
    this.data = data
    this.$el = $('<div>')
    this.cart = getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data
    $el.append($(`<p>name: ${data.name}</p>`))
    $el.append($(`<p>age: ${data.age}</p>`))
  }

  initBtn() {
    let $el = this.$el
    let $btn = $('<button>test</button>')

    $btn.click(() => {
      // add
      // remove
    })

    $el.append($btn)
  }

  addToCartHandle() {
    this.cart.add(this.data)
  }

  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}