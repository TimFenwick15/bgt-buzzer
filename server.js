const express = require('express')
const app = express()
const exec = require('child_process').exec;
app.use(express.static('.'))
app.listen(1337)
console.log('Listening on 1337')

let buzzCount = 0
const requiredBuzzes = 2

app.get('/buzz', (req, res) => {
  console.log('Got /buzz request!')
 
  let send = 'echo Recieved'
  buzzCount++

  if (buzzCount >= requiredBuzzes) {
    send = 'python keys.py'
    buzzCount = 0
  }
  exec(send, (err, stdout, stderr) => {
    res.send(`${stdout}Buzzcount = ${buzzCount}/${requiredBuzzes}`)
  })
})



