import { CellState, Player } from "../../Models/interfaces";

export interface IBoardView {
    board: CellState[][],
    onCellClick: (i : number, j : number) => void,
    onUndoButtonClick: () => void
}