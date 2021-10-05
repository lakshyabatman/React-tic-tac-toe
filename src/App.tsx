import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { ActionTypes } from './Actions';
import Game from './Components/Game';

function App() {  
  return (
    <Game/>
  );
}

export default App;
