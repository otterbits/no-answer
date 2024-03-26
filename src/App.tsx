import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0);
  const sumAll = () => {
    setState(state + 1);
    setState(state + 2);
    setState(state + 3);
    setState(state + 4);
  };
  const sumAllWithPrevState = () => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 2);
    setState((prev) => prev + 3);
    setState((prev) => prev + 4);
  };
  const initializeState = () => {
    setState(0);
  };
  return (
    <div className="wrapper">
      <div>결과는 : {state}</div>
      <button type="button" onClick={sumAll}>
        sumAll
      </button>
      <button type="button" onClick={sumAllWithPrevState}>
        sumAllWithPrevState
      </button>
      <button type="button" onClick={initializeState}>
        initializeState
      </button>
    </div>
  );
}

export default App;
