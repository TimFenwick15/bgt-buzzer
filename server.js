const express = require('express')
const app = express()
const exec = require('child_process').exec;
app.use(express.static('.'))
app.listen(1337)

app.get('/buzz', (req, res) => {
  console.log('Got /buzz request!')
 
  exec('python3 keys.py', function(err, stdout, stderr) {
    res.send(stdout)
  })
})



