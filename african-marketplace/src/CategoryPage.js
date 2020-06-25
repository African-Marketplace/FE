import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryPage(props) {
    const params = useParams();
    console.log(params)

    useEffect(() => {
      const appStyle = document.querySelector('.auth-wrapper')
      
      appStyle.classList.add('authToggle')
    }, [])

    const category = props.category.find(item => item.name === params.catName)

    return (
        <div style={{position: 'relative', marginTop: '100px'}}>
          <p style={{color: 'white', fontSize: '2rem'}}>{category.name}</p>
          <Link to='/itemlist'><button>Back to Categories</button></Link>  
        </div>
    )
}

export default CategoryPage