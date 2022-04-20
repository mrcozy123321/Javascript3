import './App.css';

import React, { Component } from 'react'
import AddProductForm from './components/AddProductForm';
import Product from './components/Product';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      products: [
        { id: Date.now().toString(), name: 'Product 1', desc: 'ProduktBeskrivning' },
        { id: 'awfpohawf124', name: 'Product 2', desc: 'ProduktBeskrivning' },
      ]
    }
  }
  
  render() {
    return (
      <div className='container'>
        <AddProductForm />
        <br/>
        <br/>
        {
          this.state.products.map(product => {
            return <Product key={product.id} product={product} />
          })
        }
      </div>
    )
  }
}