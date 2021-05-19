import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

const ENDPOINT = 'http://localhost:5000/'
let socket

const Home = () => {

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var room = ''
  for ( var i = 0; i < 6; i++) {
    room += chars[Math.floor(Math.random() * chars.length)]
  }

  

//   useEffect(() => {
    
//     socket = io.connect(ENDPOINT, connectionOptions)
//   }, [])

  

    

  return (
    <div>
      <h1>Casino the Card Game</h1>
      <p>Instructions...</p>
      <Link to={`/wait?room=${room}`}>
          {/*  */}
        <button onClick={ () => socket.emit('createRoom', { room } ) }>Start New Game</button>
      </Link>
    </div>
  )
}

export default Home