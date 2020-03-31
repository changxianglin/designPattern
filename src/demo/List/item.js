import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'

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
    let $btn = $('<button>')
    let _this = this
    let fsm = new StateMachine({
      init: '加入购物车',
      transitions: [
        {
         name: 'addToCart',
         from: '加入购物车',
         to: '从购物车删除'
        },
        {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        }
      ],
      methods: {
        onAddtoCart: function() {
          _this.addToCartHandle()
          updateText()
        },
        onDeleteFromCart: function() {
          _this.deleteFromCartHandle()
          updateText()
        }
      }
    })

    function updateText() {
      $btn.text(fsm.state)
    }

    $btn.click(() => {
      if(fsm.is('加入购物车')) {
        fsm.addToCartHandle()
      } else {
        fsm.deleteFromCart()
      }
    })
    updateText()
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