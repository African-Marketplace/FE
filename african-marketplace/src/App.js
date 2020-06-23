import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Categories from './Categories'
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
  button {
    margin-right: 20px;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: rgb(243, 243, 243);
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

function App() {
  return (
    <div>
      <NavBar />
      <AppWrapper>
        <Switch>
          <Route path='/' render={() => {
            return <Categories cards={categories} />
          }} />
        </Switch>
      </AppWrapper>
    </div>
  );
}

export default App;