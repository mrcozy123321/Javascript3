import { useEffect, useState } from 'react'
import './App.css';
import AddProductForm from './components/AddProductForm';
import Product from './components/Product';

function App() {

  // STATE
const [products, setProducts] = useState([
  { id: Date.now().toString(), name: 'Product 1', desc: 'produktbeskrivning'}
])

// LIFECYCLES
useEffect(() => {
  const storedProducts = JSON.parse(localStorage.getItem('products'))

  if(storedProducts)
    setProducts(storedProducts)

}, [])

useEffect(() => {
  localStorage.setItem('products', JSON.stringify(products))
}, [products])

// FUNCTIONS
const addProduct = product => {
  setProducts([...products, product])
}

const editProduct = product => {
  setProducts(prev => {
    let newProducts = prev.map(p => {
      if(p.id === product.id) {
        return p = product
      }
      return p
    })
    return newProducts
  })
}

  return (
    <div className="App container">
      <AddProductForm addProduct={addProduct} />
      <br />
      <br />
      {
        products.map(product => (
          <Product key={product.id} product={product} editProduct={editProduct} />
        ))
      }
    </div>
  );
}

export default App;
