import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { GlobalState, rootReducer } from '../Reducers';



export const renderWithProvider = (ui: JSX.Element, store: GlobalState) => {
    return render(<Provider store={createStore(rootReducer,store)}>{ui}</Provider>)
}