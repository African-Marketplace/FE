import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;
    margin: 0 50px;
    background-color: rgba(26, 30, 35, .2);
    h3 {
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 2.5rem;
        text-align: center;
        text-decoration: none;
        color: rgb(26, 30, 35);
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    img {
        position: absolute;
        display: block;
        width: 100%;
        max-width: 200px;
        max-height: 100%;
        opacity: .5; 
        overflow: auto;
    }
`;

function Categories(props) {
    const card = props.cards;
    console.log(card)
    
    return (
        <div>
            {card.map(item => {
                return (                    
                    <Link to={`/product/${item.name}`} style={{cursor: 'auto'}}>
                        <Card style={{cursor: 'pointer'}} key={item.name}>
                            <h3>{item.name}</h3>
                            <img src={item.url} alt='marketplace category' />                       
                        </Card>
                    </Link>                                        
                )
            })}
        </div>
    )
}

export default Categories