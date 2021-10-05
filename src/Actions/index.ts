import {Action, Dispatch} from 'redux'
import { CellState, Coordinate, Player } from '../Models/interfaces'

export enum ActionTypes  {
    START_GAME ='START_GAME',
    END_GAME = 'END_GAME',
    TOGGLE_PLAYER_TURN = 'TOGGLE_PLAYER_TURN',
    START_LOADING = 'START_LOADING',
    STOP_LOADING = 'STOP_LOADING',
    MAKE_MOVE = 'MAKE_MOVE',
    SET_WINNER = 'SET_WINNER',
    UNDO_LAST_STEP = 'UNDO_LAST_STEP',
    ADD_PREV_MOVES = 'ADD_PREV_MOVES',
    RESET_GAME = 'RESET_GAME'
}

export type StartGameAction = Action<ActionTypes.START_GAME>
export type EndGameAction = Action<ActionTypes.END_GAME>
export type TooglePlayerTurnAction = Action<ActionTypes.TOGGLE_PLAYER_TURN> & {
    player: Player
}

export type MakeMoveAction = Action<ActionTypes.MAKE_MOVE> & {
    board: CellState[][]
}

export type UndoLastStepAction = Action<ActionTypes.UNDO_LAST_STEP> & {
    board: CellState[][],
}

export type AddPrevStepAction = Action<ActionTypes.ADD_PREV_MOVES> & {
    prevSteps: Coordinate[]
}

export type StartLoaderAction = Action<ActionTypes.START_LOADING>
export type StopLoaderAction = Action<ActionTypes.STOP_LOADING>

export type SetWinnerAction = Action<ActionTypes.SET_WINNER> & {
    winner : Player
}

export type ResetGameAction = Action<ActionTypes.RESET_GAME>


export type Actions = StartGameAction | EndGameAction | TooglePlayerTurnAction | StartLoaderAction | StopLoaderAction | MakeMoveAction | SetWinnerAction | UndoLastStepAction | AddPrevStepAction | ResetGameAction


export const ActionCreators = {
    stopLoading: () => {
        const stopLoaderAction : StopLoaderAction = {
            type: ActionTypes.STOP_LOADING
        }
        return stopLoaderAction
    },
    startLoading : () => {
        const startLoaderAction : StartLoaderAction = {
            type: ActionTypes.START_LOADING
        }
        return startLoaderAction
    },
    startGame: () => {
            const startGameAction : StartGameAction = {
                type: ActionTypes.START_GAME
            }
            return startGameAction
        
    },
    endGame : () =>  {
            const endGameAction : EndGameAction = {
                type: ActionTypes.END_GAME
            }
            return endGameAction
        
    },
    togglePlayerTurn: (player: Player) => {
            const togglePlayerTurnAction: TooglePlayerTurnAction = {
                type: ActionTypes.TOGGLE_PLAYER_TURN,
                player
            }
            return togglePlayerTurnAction
        
    },
    makeMove : (board: CellState[][]) => {
        const makeMoveAction : MakeMoveAction = {
            type : ActionTypes.MAKE_MOVE,
            board
        } 
        return makeMoveAction
    },
    setWinner : (winner: Player) => {
        const setWinnerAction : SetWinnerAction = {
            type: ActionTypes.SET_WINNER,
            winner
        }
        return setWinnerAction
    },
    undoLastMove: (board: CellState[][]) => {

        const undoLastMoveAction : UndoLastStepAction = {
            type: ActionTypes.UNDO_LAST_STEP,
            board
        }
        return undoLastMoveAction
    },
    pushPrevSteps: (prevSteps:Coordinate[]) => {
        const addPrevStepAction : AddPrevStepAction = {
            type: ActionTypes.ADD_PREV_MOVES,
            prevSteps
            
        }
        return addPrevStepAction
    },
    resetGame : () => {
        const resetGameAction: ResetGameAction  = {
            type: ActionTypes.RESET_GAME
        }
        return resetGameAction
    }
}