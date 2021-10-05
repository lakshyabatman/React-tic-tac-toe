import { render } from "@testing-library/react"
import GameView from "."
import { GameStatus } from "../../Models/interfaces"
import { initialState } from "../../Reducers"
import { renderWithProvider } from "../../Test/renderWithProvider"


describe('<GameView/>', () => {
    it('should render GameView', () => {
        const {container} = renderWithProvider(<GameView/>, initialState)
        expect(container.innerHTML.length).toBeGreaterThan(0)
    })

    it('should show start game ', () => {
        const {getByText} = renderWithProvider(<GameView/>, initialState)
        expect(getByText('Start game').innerHTML.length).toBeGreaterThan(0)
    })

    it('should show boardm if game state is in progress', () => {
        const {getByTestId} = renderWithProvider(<GameView/> ,{...initialState, gameStatus: GameStatus.IN_PROGRESS})
        expect(getByTestId('board').innerHTML.length).toBeGreaterThan(0)

    })
})