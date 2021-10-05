import React from 'react'


export interface IStartGameView {
    onClick: () =>void
}




const StartGameView:React.FC<IStartGameView> = (props) => {
    return (
        <div>
        <button onClick={props.onClick} className="mt-6 bg-gray-300	px-4 py-2">Start game</button>
        </div>
    )
}


export default StartGameView