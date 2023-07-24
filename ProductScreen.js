// ProductScreen.js

import React from 'react'
import products from '../data'

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductScreen
