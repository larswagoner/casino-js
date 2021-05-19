import io from 'socket.io-client'

const URL = 'http://localhost:5000'

const connectionOptions =  {
  "forceNew" : true,
  "reconnectionAttempts": "Infinity", 
  "timeout" : 10000,                  
  "transports" : ["websocket"]
}

const socket = io.connect(URL, connectionOptions)

socket.on("newUserJoined", statusUpdate => {
  console.log("A new game has been created! ")
})