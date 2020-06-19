import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

function NavBar() {
  return (
    <>
      <h1>African Marketplace</h1>
      <Link to='/'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
    </>
  )
}

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
