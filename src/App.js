import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div
      style={{
        padding: 30,
        height: '100vh',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Counter />
    </div>
  );
}

export default App;
