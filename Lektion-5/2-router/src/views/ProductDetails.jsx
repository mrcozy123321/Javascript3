import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const res = await axios.get('https://fakestoreapi.com/products/' + id)
      setProduct(res.data)
      setLoading(false)
    }
    getProduct()
  }, [id])

  return (
    <div>
      { loading && <p>loading...</p> }
      { product && (
        <div className='product-details'>
          <h2>{product.title}</h2>
          <div className="product-img">
            <img src={product.image} alt="" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails