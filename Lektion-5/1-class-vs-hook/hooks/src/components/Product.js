import {useState} from 'react'

const Product = ({ product, editProduct }) => {

  const [productForm, setProductForm] = useState({
    id: product.id,
    name: product.name,
    desc: product.desc
  })

  const onChange = e => {
    setProductForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
 }

  const onSub = e => {
    e.preventDefault()

    editProduct({
      ...productForm
    })
  }

  return (
    <form className='product' onSubmit={onSub}>
      <input className='form-control' value={productForm.id} type="text" disabled name='id' onChange={onChange} />
      <input className='form-control' value={productForm.name} type="text" name='name' onChange={onChange} />
      <input className='form-control' value={productForm.desc} type="text" name='desc' onChange={onChange} />
      <button className='btn'>Spara</button>

    </form>
  )
}

export default Product