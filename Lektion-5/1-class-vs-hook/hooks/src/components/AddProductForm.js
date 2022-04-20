import { useState } from 'react'

const AddProductForm = ({ addProduct }) => {

  const [formData, setFormData] = useState({
    name: '',
    desc: ''
  })

  const onChange = e => {
    setFormData(prev =>  ({...prev, [e.target.name]: e.target.value}))
  }

  const onSub = e => {
    e.preventDefault()
    addProduct({
      id: Date.now().toString(),
      name: formData.name,
      desc: formData.desc
    })
  }

  return (
    <form onSubmit={onSub}>
      <input className='form-control' type="text" placeholder='name' name='name' value={formData.name} onChange={onChange} />
      <input className='form-control' type="text" placeholder='desc' name='desc' value={formData.desc} onChange={onChange} />
      <button className='btn'>Lägg till produkt</button>
    </form>
  )
}

export default AddProductForm