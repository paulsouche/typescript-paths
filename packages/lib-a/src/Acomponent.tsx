import Bcomponent from '@typescript-paths/lib-b';
import React from 'react';

const Acomponent: React.FC<{ logo: string }> = ({ logo }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Bcomponent />
    </header>
  );
}

export default Acomponent;