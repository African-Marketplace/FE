import React from 'react';
import { useParams } from 'react-router-dom'

function CategoryItem(props){
    const params = useParams()

    console.log('here I am')
    return (
        <div style={{marginTop: '100px', color: 'white'}}>
            <p>JChan</p>
        </div>
    )
}

export default CategoryItem