import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Check from './components/check';
import Welcome from './components/welcome';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Check/> } />
        <Route path="welcome" element={ <Welcome/> } />
      </Routes>
    </div>
  );
}

export default App;
