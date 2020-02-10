import React from 'react';
import Header from './Header.js';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="headerDiv">
            <Header/>
        </div>
        <div className="mainDiv">
            <Main/>
        </div>
    </div>
  );
}

export default App;
