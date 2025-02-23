// src/App.js
import React from 'react';
import DosEmulator from './components/DosEmulator';

function App() {
  const currentHour = new Date().getHours();
  const isWithinTimeRange = currentHour >= 10 && currentHour < 20;

  return (
    <div className="App">
      {isWithinTimeRange ? <DosEmulator /> : <p>The emulator is available from 10 AM to 8 PM. Go to relax Julio Manuel</p>}
    </div>
  );
}

export default App;
