import React from 'react'
import { CellState } from '../../Models/interfaces'
import { ICellView } from './interface'

const CellView:React.FC<ICellView> = (props) => {

    const cellClickHandler = () => {
        props.cell === CellState.EMPTY && props.onClick()
    }
    return (
        <div data-testid="cell" className="bg-white h-12 cursor-pointer flex justify-center items-center" onClick={cellClickHandler}>{props.cell}</div>
    )
}


export default CellView