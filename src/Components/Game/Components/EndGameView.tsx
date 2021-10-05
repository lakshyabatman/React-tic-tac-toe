import React from 'react'
import { Player } from '../../../Models/interfaces'

export interface IEndGameView {
    winner: Player | null,
    resetGame: () => void
}

const EndGameView:React.FC<IEndGameView> = (props) => {

    return (
        <div>
            <h1>{!!props.winner ? `Winner is ${props.winner}` : `Draw`}</h1>
            <button onClick={props.resetGame} className="mt-6 bg-gray-300	px-4 py-2">Reset</button>
        </div>
    )
}

export default EndGameView