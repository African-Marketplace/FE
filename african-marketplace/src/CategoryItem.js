import React from 'react';
import { useParams } from 'react-router-dom'

function CategoryItem(props){
    const params = useParams()

    console.log('here I am')
    return (
        <p style={{color: 'white', fontSize: '2rem', marginTop: '100px'}}>JChan</p>
    )
}

export default CategoryItem