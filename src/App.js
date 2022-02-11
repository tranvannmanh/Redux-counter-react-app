// import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <p>
          Redux Counter
        </p>
      </header>
    </div>
  );
}

export default App;
