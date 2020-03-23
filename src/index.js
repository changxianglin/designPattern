import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

// init 
let fsm = new StateMachine({
  init: 'collection',
  transitions: [
    {
      name: 'doStore',
      from: 'collection',
      to: 'cancelCollection'
    },
    {
      name: 'deleteStore',
      from: 'cancelCollection',
      to: 'collection'
    }
  ],
  methods: {
    //  linsten run collection
    onDostore: function() {
      alert('collection success') // send post
      updateText()
    },

    // listen run cacel collection
    onDeleteStore: function() {
      alert('aleay cancel collection')
      updateText()
    }
  }
})

const $btn = $('#btn1')

// click event
$btn.click(function() {
  if(fsm.is('collection')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})

// update button text
function updateText() {
  $btn.text(fsm.state)
}

// init text
updateText()