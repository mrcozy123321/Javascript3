import React, { Component } from 'react'

export default class AddProductForm extends Component {
  render() {
    return (
      <form>
        <input className='form-control' type="text" placeholder='name' />
        <input className='form-control' type="text" placeholder='description' />
        <button className='btn'>Lägg till produkt</button>
      </form>
    )
  }
}
