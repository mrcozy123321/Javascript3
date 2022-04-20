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

  componentDidMount() {
    console.log('did mount')

    const storedProducts = JSON.parse(localStorage.getItem('products'))
    if(storedProducts) {
      this.setState({ products: storedProducts })
    }
  }

  componentDidUpdate() {
    console.log('did update')
    localStorage.setItem('products', JSON.stringify(this.state.products))
  }

  addProduct = product => {
    this.setState({ products: [...this.state.products, product ]})
  }

  editProduct = product => {
    this.setState(prev => {
      let newProducts = prev.products.map(p => {
        if(p.id === product.id) {
          return p = product
        }
        return p
      })
      return { products: newProducts }
    })
  }
  
  render() {
    return (
      <div className='container'>
        <AddProductForm addProduct={this.addProduct} />
        <br/>
        <br/>
        {
          this.state.products.map(product => {
            return <Product key={product.id} product={product} editProduct={this.editProduct} />
          })
        }
      </div>
    )
  }
}