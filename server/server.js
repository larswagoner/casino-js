const app = require('express')()
const server = require('http').createServer(app)
const socket = require('socket.io')
const io = socket(server)
const PORT = 5000

const utils = require('./utils')


var rooms = []





io.on('connection', socket => {
  
  console.log(socket.id)
  socket.on('createRoom', ({ room }) => {
    if (rooms.indexOf(room) === -1) {
      rooms.push(room)
    } else {
      console.log("Error, room already exists")
    }
    // if (rooms.indexOf(room) > -1) {
    //   console.log("ya")
    // } else {
    //   console.log("na")
    // }
    // console.log("created room: " + room)
  })

})




server.listen(PORT, () => console.log("WS server on 5000"))




