import React from 'react'
import io from 'socket.io-client'

const WaitingRoom = (props) => {

  

  return (
    <div>
      <p>Waiting room choose a name and click ready</p>
      <p>Share this link with your friends!</p>
      <p>Players: </p>
      <ul>

      </ul>
      <p>{window.location.href}</p>
      <input placeholder="Nickname"></input>
      <button>ready</button>
    </div>
  )
}
  
export default WaitingRoom