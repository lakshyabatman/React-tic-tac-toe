import { CellState } from "../../Models/interfaces";


export interface ICellView {
    cell: CellState,
    onClick: () =>  void
}