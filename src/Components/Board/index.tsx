
import React from 'react'
import CellView from '../Cell'
import { IBoardView } from './interface'


const BoardView:React.FC<IBoardView> = (props) => {

   
    const cellClickHandler = (key : number) => {
        return () => {
            const i = Math.floor(key/3);
            const j = key%3;
            props.onCellClick(i,j)
        }
    }

    const undoClickHandler = () => {
            props.onUndoButtonClick()
        
    }
    

    let boardOutput = props.board.flat().map((cell, index) => (<CellView key={index} cell={cell}
         onClick={cellClickHandler(index)}/>))

    
    return (
        <div className="text-center	">
        <div className="grid grid-cols-3 bg-gray-500 gap-2 " >
            {boardOutput}
        </div>
        <button onClick={undoClickHandler} className="mt-6 bg-gray-300	px-4 py-2">
            Undo
        </button>
        </div>
    )
}


export default BoardView