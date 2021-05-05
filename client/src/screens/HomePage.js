import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function randomStringGen() {
  return "lol"
}


const HomePage = () => {
  const [roomCode, setRoomCode] = useState('')

  return (
    <div className="HomePage">
      <div className="createButton">
        {/* <link to={`/?=${randomStringGen()}`}> */}
          <button>Start New Game</button>
        {/* </link> */}
      </div>
    </div>
  )
}

export default HomePage