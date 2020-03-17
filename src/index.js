class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if(this.state === 'show') {
      alert('already show')
      return
    } else {
    this.state = 'show'
    console.log('loginForm show success')
    }
  }
  hide() {
    if(this.state === 'hide') {
      alert('already hide')
      return 
    } 
      this.state = 'hide'
      console.log('loginForm hide success')
  }
}

LoginForm.getInstance = (function () {
  let instance
  return function() {
    if(!instance) {
      instance = new LoginForm()
    } 
    return instance
  }
})()

// test

let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()

console.log('login1 === login2', login1 === login2)