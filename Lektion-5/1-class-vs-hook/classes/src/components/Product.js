import React, { Component } from 'react'

export default class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      desc: this.props.product.desc
    }
    this.onChangeName = this.onChangeName.bind(this)
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeDesc = (e) => {
    this.setState({ desc: e.target.value })
  }

  onSub = e => {
    e.preventDefault()
    this.props.editProduct({
      id: this.state.id,
      name: this.state.name,
      desc: this.state.desc
    })
  }

  render() {
    const { id, name, desc } = this.state
    return (
      <form className='product' onSubmit={this.onSub}>
        <input className='form-control' value={id} type="text" disabled name='id' />
        <input className='form-control' value={name} type="text" name='name' onChange={this.onChangeName} />
        <input className='form-control' value={desc} type="text" name='desc' onChange={this.onChangeDesc} />
        <button className='btn'>Spara</button>
      </form>
    )
  }
}
