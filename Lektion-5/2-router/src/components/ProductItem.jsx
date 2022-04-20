import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`} className='product-item'>
      <div className='image-container'>
        <img src={product.image} alt="" />
      </div>
      <h3>{product.title}</h3>
    </Link>
  )
}

export default ProductItem