const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('../release/bundle.js')
})

let lineNum = 0
rl.on('line', function(line) {
  console.log(lineNum)
  lineNum++
})

rl.on('close', function() {
  console.log('lineNum', lineNum)
})