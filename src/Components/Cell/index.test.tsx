import { fireEvent, waitFor } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import CellView from ".";
import { CellState } from "../../Models/interfaces";
import { initialState } from "../../Reducers";
import { renderWithProvider } from "../../Test/renderWithProvider";


describe('<CellView/>', () => {
    
    it('should be clickable only once', () => {
        let mockMethod = jest.fn();
        const {getByTestId} = renderWithProvider(<CellView cell={CellState.EMPTY} onClick={mockMethod} />, initialState)
        const cell = getByTestId('cell')
        fireEvent.click(cell)
        expect(mockMethod).toBeCalledTimes(1)
        
    })

    it('should not be clicakble if cell is not empty', () => {
        let mockMethod = jest.fn();
        const {getByTestId} = renderWithProvider(<CellView cell={CellState.X} onClick={mockMethod} />, initialState)
        const cell = getByTestId('cell')
        fireEvent.click(cell)
        expect(mockMethod).toBeCalledTimes(0)
      
        
    })
})