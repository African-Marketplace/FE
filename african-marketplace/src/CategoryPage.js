import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage(props) {
    const params = useParams();
    console.log(params)

    const category = props.category.find(item => item.name === params.catName)
    return (
        <>
          <p style={{color: 'white', fontSize: '2rem'}}>{category.name}</p>  
        </>
    )
}

export default CategoryPage