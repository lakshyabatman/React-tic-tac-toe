import { CellState, Coordinate, Player } from "../interfaces";


export class Game {
    
    static getWinner = (board: CellState[][]) : CellState => {

        for(let i =0;i<3;i++) {
            if(board[i][0]!=CellState.EMPTY && board[i][1] == board[i][0] && board[i][1] == board[i][2]) return board[i][0]
        }

        for(let j = 0;j<3;j++) {
            if(board[0][j]!=CellState.EMPTY && board[1][j] == board[0][j] && board[1][j] == board[2][j]) return board[0][j]
        }

        if(board[0][0]!= CellState.EMPTY && board[1][1] == board[0][0] && board[1][1] == board[2][2]) return board[0][0];

        if(board[2][0] != CellState.EMPTY &&  board[1][1] == board[2][0] && board[1][1] == board[0][2]) return board[0][2];

        return CellState.EMPTY
    }

    static isGameLeft = (board: CellState[][]) : boolean => {
        for(let i =0;i<3;i++) {
            for(let j = 0;j<3;j++) {
                if(board[i][j] == CellState.EMPTY) return true
            }
        }
        return false
    }


    static makeMove =(board: CellState[][], i : number, j : number, turn : CellState) : CellState[][] => {
        if(i >=0 && j>=0 &&  i< 3 && j<3) {
            const newBoard = [...board];
            newBoard[i][j] = turn
            return newBoard
        }else {
            throw new Error("Invalid coordinates")
        }

    }

    static undoPrevStep = (board: CellState[][], prevStep: Coordinate[]) : {board: CellState[][], prevStep: Coordinate[]} => {
        if(!prevStep.length) return {board, prevStep}
        let lastStep = prevStep.pop()
        if(!lastStep) return {board, prevStep};
        const {i,j} = lastStep
        if(i>=0 && j>=0  && i <3 && j <3) {
            board[i][j] = CellState.EMPTY;
            return {board, prevStep}
        }else {
            throw new Error("Invalid coordinates")
        }

    }


    

}