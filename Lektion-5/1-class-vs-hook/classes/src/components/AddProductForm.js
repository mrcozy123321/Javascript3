import React, { Component } from 'react'

export default class AddProductForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      desc: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addProduct({
      id: Date.now().toString(),
      name: this.state.name,
      desc: this.state.desc
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className='form-control' value={this.state.name} name="name" type="text" placeholder='name' onChange={this.onChange} />
        <input className='form-control' value={this.state.desc} name="desc" type="text" placeholder='description' onChange={this.onChange} />
        <button className='btn'>Lägg till produkt</button>
      </form>
    )
  }
}
