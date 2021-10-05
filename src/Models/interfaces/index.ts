

export enum Player {
    Player_1 = 'PLAYER_1',
    Player_2 = 'PLAYER_2'
}

export enum GameStatus {
    COMPLETED ='COMPLETED',
    IN_PROGRESS = 'IN_PROGRESS',
    NOT_STARTED = 'NOT_STARTED'
}

export enum CellState {
    X = 'X',
    O = 'O',
    EMPTY = ''
}

export interface Coordinate {
    i : number,
    j : number
}