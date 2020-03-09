function loadImg(src) {
  let promise = new Promise(function(resolve, reject) {
    let img = document.createElement('img')
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let src = 'http://i2.hdslb.com/bfs/face/1babc0f9dbd0034d40cbe12d2f3a34f18a947773.png'
let result = loadImg(src)
result.then(function(img) {
  alert(`width: ${img.width}`)
  return img
}).then(function(img) {
  alert(`height: ${img.height}`)
  return img
}).then(function(img) {
  alert(img.src)
}).catch(function(er) {
  alert(er)
})