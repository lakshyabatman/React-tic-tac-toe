import React from 'react'
import { CellState } from '../../Models/interfaces'
import { ICellView } from './interface'

const CellView:React.FC<ICellView> = (props) => {

    const cellClickHandler = () => {
        props.cell === CellState.EMPTY && props.onClick()
    }
    return (
        <div className="bg-white h-12 cursor-pointer" onClick={cellClickHandler}>{props.cell}</div>
    )
}


export default CellView