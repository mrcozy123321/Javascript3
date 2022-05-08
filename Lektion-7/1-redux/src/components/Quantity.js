import React from 'react'
import { useSelector } from 'react-redux'

const Quantity = () => {

  // const counter = useSelector(state => state)

  return (
    <div>
      <h3>Quantity</h3>
      <p>Quantity is = 0</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default Quantity