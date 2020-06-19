import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 100%;
  height: 50px;
  padding: 0 25px 5px 25px;
  background: rgb(232, 76, 61);
  h1 {
    font-family: 'Ubuntu', sans-serif;
    color: rgb(243, 243, 243);
    font-size: 4rem;
  }
`;

function NavBar() {
  return (
    <HeaderDiv>
      <h1>African Marketplace</h1>
      <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/about'><button>About</button></Link>
      </div>
    </HeaderDiv>
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
