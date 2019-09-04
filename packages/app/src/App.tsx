import Acomponent from '@typescript-paths/lib-a';
import React from 'react';
import './App.css';
import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <Acomponent {...{ logo }} />
    </div>
  );
}

export default App;
