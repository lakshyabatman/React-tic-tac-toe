import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from '../../Actions'
import { CellState, GameStatus, Player } from '../../Models/interfaces'
import { Game } from '../../Models/modules/Game'
import { GlobalState } from '../../Reducers'
import BoardView from '../Board'
import EndGameView from './Components/EndGameView'
import StartGameView from './Components/StartGameView'

const GameView = () => {

    const dispatch = useDispatch()

    const playerMap = {
        [Player.Player_1]: CellState.O,
        [Player.Player_2]: CellState.X,
    }


    const {board, gameStatus,turn,winner,loading,prevStep} = useSelector((state: GlobalState) => {
         return {
            ...state
         }
    })

    const startGame = () => {
        dispatch(ActionCreators.startLoading())
        setTimeout(() => {
            // For demo purpose
            dispatch(ActionCreators.stopLoading())
            dispatch(ActionCreators.startGame())
        }, 2000)
        
    }

    const getNextTurn = (player: Player) => player == Player.Player_1 ? Player.Player_2 : Player.Player_1

    const onCellClick = (i: number, j: number) => {
        try {
            const newBoard = Game.makeMove(board,i,j,playerMap[turn])
            const winnerStatus = Game.getWinner(newBoard);
            if(winnerStatus !=CellState.EMPTY) {
                const winner = winnerStatus === CellState.O ? Player.Player_1 : Player.Player_2
                dispatch(ActionCreators.setWinner(winner))
                dispatch(ActionCreators.endGame())

            }

            if(!Game.isGameLeft(board)) {
                // no winnder
                dispatch(ActionCreators.endGame())
            }
            dispatch(ActionCreators.makeMove(newBoard))
            const steps = [...prevStep]
            steps.push({i,j})
            dispatch(ActionCreators.pushPrevSteps(steps))
            dispatch(ActionCreators.togglePlayerTurn(getNextTurn(turn)))
        }catch(err) {
            console.error(err)
        }
    }

    const onUndoButtonClick = () => {
        try {

            const res = Game.undoPrevStep(board,prevStep)
            dispatch(ActionCreators.makeMove(res.board))
            dispatch(ActionCreators.pushPrevSteps(res.prevStep))
            dispatch(ActionCreators.togglePlayerTurn(getNextTurn(turn)))
        }catch(err) {
            console.error(err)
        }
    }

    const onResetButtonClick = () => {
        dispatch(ActionCreators.resetGame())
    }

    const getGameView = (gameStatus : GameStatus) => {
        switch(gameStatus) {
            case GameStatus.IN_PROGRESS:
                return <BoardView board={board} onCellClick={onCellClick} onUndoButtonClick={onUndoButtonClick} />
            case GameStatus.COMPLETED:
                return <EndGameView winner={winner} resetGame={onResetButtonClick}/>
            case GameStatus.NOT_STARTED:
                return <StartGameView onClick={startGame}/>
        }
    }

    

    return (
            <>
            {!loading ? (
                <>
                    {getGameView(gameStatus)}
                </>
            ) : (
                <h1>Loading</h1>
            )}
            </>
    )
}

export default GameView