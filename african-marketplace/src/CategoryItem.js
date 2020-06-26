import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'
import styled from 'styled-components'

const DivStyle = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    padding-top: 45px;
    margin: 0 auto;
    background-color: rgb(243, 243, 243);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    div {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        background: rgba(26, 30, 35, .4);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    div h3 {
        color: rgb(231, 231, 232);
        font-size: 2rem;
        padding-left: 20px;
    }
    div p {
        font-size: 1rem;
        padding-left: 40px;
        color: rgb(231, 231, 232);
    }
`;

function CategoryItem(props){
    const [category, setCategory] = useState([])

    const params = useParams()
    const history = useHistory() 
    console.log(params.catID)   

    useEffect(() => {      
      axiosWithAuth()
      .get(`/products/cat/${params.catID}`)
      .then(res => {
          console.log(res)
          setCategory(res.data)          
      })
      .catch(err => {
          console.log('error', err)
      })
    }, [])

    console.log(category[0])

    return (
        <DivStyle className='appWrapper'>
            <button style={{height: '25px', alignSelf: 'center'}} onClick={() => { history.goBack() }}>Go Back</button>
            {category.map(item => {
                return (<div>
                        <h3>Product Name: {item.product_name}</h3>
                        <br />
                        <p>Description: {item.description}</p>
                        <br />
                        <p>Origin: {item.location}</p>
                        <br />
                        <p>Seller: {item.seller}</p>
                        <br />
                        <p>Price: {item.price}</p>
                    </div>)
            })}
        </DivStyle>
    )
}

export default CategoryItem