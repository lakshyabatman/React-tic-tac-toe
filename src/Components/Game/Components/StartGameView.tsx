import React from 'react'


export interface IStartGameView {
    onClick: () =>void
}




const StartGameView:React.FC<IStartGameView> = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Start game</button>
        </div>
    )
}


export default StartGameView