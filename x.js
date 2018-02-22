const os = require('os'), fs = require('fs')

let child_process = require('child_process')
let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

let path_to_image_directory = __dirname + '/img_data'
let timeout_interval = 300
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  setInterval(function(){
    fs.readFile(path_to_image_directory+'/image.jpeg', function(err, data) {
      socket.emit('img_data', data)
    })
  }, timeout_interval)
})

http.listen(8080, function() {
  console.log('listening on 8080')
})

let capture_loop = function(seconds_between_capture) {
  setInterval(function() {
    child_process.exec('streamer -o ' + path_to_image_directory+ '/image.jpeg', function(error, stdout, stderr) {})
  }, seconds_between_capture*timeout_interval)
}
capture_loop(1)
