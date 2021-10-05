import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProvider } from './Test/renderWithProvider';
import { initialState } from './Reducers';

test('renders learn react link', () => {
  renderWithProvider(<App />,initialState);
  
});
