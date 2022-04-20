import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <form className='product'>
        <input className='form-control' type="text" disabled name='id' />
        <input className='form-control' type="text" name='name' />
        <input className='form-control' type="text" name='desc' />
        <button className='btn'>Spara</button>
      </form>
    )
  }
}
