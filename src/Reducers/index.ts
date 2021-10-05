import { Actions, ActionTypes } from "../Actions"
import { CellState, Coordinate, GameStatus, Player } from "../Models/interfaces"



export interface GlobalState {
    loading:boolean,
    turn: Player,
    gameStatus: GameStatus,
    winner: Player | null,
    board: CellState[][],
    prevStep : Coordinate[]
}

export const initialState : GlobalState = {
    loading : false,
    turn : Player.Player_1,
    gameStatus: GameStatus.NOT_STARTED,
    winner: null,
    board: new Array(3).fill([]).map((_) => new Array(3).fill(CellState.EMPTY)),
    prevStep: []
}


export const rootReducer = (state: GlobalState = initialState, action: Actions) : GlobalState => {
    switch(action.type) {
        case ActionTypes.END_GAME:
            return {...state, gameStatus: GameStatus.COMPLETED}
        case ActionTypes.START_GAME:
            return {...state, gameStatus: GameStatus.IN_PROGRESS}
        case ActionTypes.TOGGLE_PLAYER_TURN:
            return {...state, turn: action.player}
        case ActionTypes.START_LOADING:
            return {...state, loading: true}
        case ActionTypes.STOP_LOADING:
            return {...state, loading: false}
        case ActionTypes.MAKE_MOVE:
            return {...state, board: action.board}
        case ActionTypes.UNDO_LAST_STEP:
            return {...state, board: action.board}
        case ActionTypes.SET_WINNER:
            return {...state,winner: action.winner}
        case ActionTypes.ADD_PREV_MOVES:
            return {...state, prevStep: action.prevSteps}
        case ActionTypes.RESET_GAME:
            return {...initialState,board: new Array(3).fill([]).map((_) => new Array(3).fill(CellState.EMPTY))}
        default:
            return {...state}


    }
}