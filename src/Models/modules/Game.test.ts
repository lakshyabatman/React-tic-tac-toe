import { CellState, Coordinate } from "../interfaces"
import { Game } from "./Game"

export const mockBoard = [
    [CellState.EMPTY,CellState.EMPTY,CellState.O ],
    [CellState.EMPTY,CellState.O,CellState.X ],
    [CellState.EMPTY,CellState.X,CellState.O ],
]

export const mockPrevSteps:Coordinate[] = [{i:1,j:1}]


describe('Game', ()=> {
    it('should make a move', () => {
        const response = Game.makeMove(mockBoard,2,0, CellState.O);
        expect(response[2][0] == CellState.O);
    })

    it('should throw an error', () => {
        expect(() => Game.makeMove(mockBoard,4,0, CellState.O)).toThrow('Invalid coordinates')
    })


    it('should undo step', () => {
        const response = Game.undoPrevStep(mockBoard,mockPrevSteps);
        expect(response.board[1][1] == CellState.EMPTY);
        expect(response.prevStep.length == 0)
    })

    it('should tell if game is left', () => {
        expect(Game.isGameLeft(mockBoard) == true)
    })


    it('should return empty if there is winner' ,() => {
        expect(Game.getWinner(mockBoard) == CellState.EMPTY)
    })



})