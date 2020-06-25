import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Categories from './Categories'
import CategoryPage from './CategoryPage'
import data from './data'
import './App.css';

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 100%;
  height: 60px;
  padding: 0 25px 5px 25px;
  margin-top: 45px;
  background: rgb(232, 76, 61);
  h1 {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    color: rgb(243, 243, 243);
    font-size: 2.5rem;
  }
  button {
    margin-right: 20px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;
    padding: 0 10px;
    background-color: #F3F3F3;
    outline: none;    
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      box-shadow: 5px -5px 15px rgba(26, 30, 35, .4);
    }
  }
  div {
    align-self: center;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(243, 243, 243);
  .headerText {
    padding: 45px 0;
    font-family: 'Ubuntu', sans-serif;
    font-style: italic;
    letter-spacing: 1.2px;
    color: rgb(243, 243, 243);
    font-size: 2rem;
    width: 100%;
    background: rgba(26, 30, 35, .4);
  }
  div {
    display: flex;
    flex-flow: row-wrap;
    justify-content: space-between;
  }
`;

const categories = [
  {
    name: 'Clothing & Apparel',
    url: 'https://dupsies.com/Dstore/product_thumb.php?img=images/Blue-Orange-African-Print-Skirt-DP3900.jpg&w=190&h=286'
  },
  {
    name: 'Authentic Artwork',
    url: 'https://dupsies.com/Dstore/product_thumb.php?img=images/African-Kente-Print-Fan-Dupsies-DPPF304.jpg&w=190&h=240'
  },
  {
    name: 'Accessories',
    url: 'https://dupsies.com/Dstore/product_thumb.php?img=images/Ivory-African-Beads-necklace-bracelet-dupsies-DPIL502.jpg&w=146&h=290'
  },
  {
    name: 'Food Items',
    url: 'https://www.demandafrica.com/wp-content/uploads/2018/10/African-food-facts-starfruit.jpg.webp'
  }
]

function NavBar() {
  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   const response = []
  //   axios.get(`https://afr-marketplace.herokuapp.com/api/products/cat`)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     console.log('error ', err)
  //   })
  // }, [])
    
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

function CatRender() {
  return (
    <div>
      <NavBar />
      <AppWrapper className='appWrapper'>
        <h1 className='headerText headerToggle'>Welcome! Please Choose Your Category</h1>

        <Switch>
          <Route path='/itemlist/:catName' render={() => {
            return <CategoryPage category={data} />
          }} />
          <Route exact path='/itemlist' render={() => {
            return <Categories cards={data} />
          }} />
        </Switch>

      </AppWrapper>
    </div>
  );
}

export default CatRender;