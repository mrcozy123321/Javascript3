import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from '../components/ProductItem'

const Shop = () => {

  const [products, setProducts] = useState([])

  console.log(products)

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      
      setProducts(res.data)
    }

    getProducts()
  }, [])

  return (
    <div className='shop'>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop