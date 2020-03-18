class ReadImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk() // init load file from hard disk, simulation
  }

  display() {
    console.log('display...' + this.fileName)
  }

  loadFromDisk() {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.readImg = new ReadImg(fileName)
  }
  display() {
    this.readImg.display()
  }
}

// test
const proxyImg = new ProxyImg('1.png')
proxyImg.display()