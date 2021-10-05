
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
        <>
        <div className="grid grid-cols-3 bg-gray-500 gap-2 w-2/12" >
            {boardOutput}
        </div>
        <button onClick={undoClickHandler}>
            Undo
        </button>
        </>
    )
}


export default BoardView