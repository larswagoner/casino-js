
import React, { useState } from 'react';


function HomePage() {

    const [player1, setPlayer1Deck] = useState([])

    console.log(this.state.player1)

    return (
        <div>
        <p>Info about how it works</p>
        <p>Instructions</p>
        <button>Start a new game</button>
        </div>
    )
}

export default HomePage