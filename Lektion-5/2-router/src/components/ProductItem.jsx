import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <div className='product-item'>
      <div className='image-container'>
        <img src={product.image} alt="" />
      </div>
      <h3>{product.title}</h3>
    </div>
  )
}

export default ProductItem