// class User {
//   constructor(type) {
//     this.type = type
//   }
//   buy() {
//     if(this.type === 'ordinary') {
//       console.log('general user buy')
//     } else if(this.type === 'member') {
//       console.log('member user buy')
//     } else if(this.type === 'vip') {
//       console.log('vip user buy')
//     }
//   }
// }

// // test 
// let u1 = new User('ordinary')
// u1.buy()
// let u2 = new User('member')
// u2.buy()
// let u3 = new User('vip')
// u3.buy()


class OrdinaryUser {
  buy() {
    console.log('genral user buy')
  }
}

class MemberUser {
  buy() {
    console.log('member user buy')
  }
}

class vipUser {
  buy() {
    console.log('vip user buy')
  }
}

// test
let u1 = new OrdinaryUser()
u1.buy()
let u2 = new MemberUser()
u2.buy()
let u3 = new vipUser()
u3.buy()