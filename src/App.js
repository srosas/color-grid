import React from 'react';
import Header from './components/Header'
import CellContainer from './components/CellContainer'
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <CellContainer />
    </div>
  );
}

export default App;
