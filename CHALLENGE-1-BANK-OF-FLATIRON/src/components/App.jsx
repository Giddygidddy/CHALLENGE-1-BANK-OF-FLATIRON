import React from 'react';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Transactions from './components/Transactions';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Transactions />
    </div>
  );
}

export default App;
