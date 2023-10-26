import React from 'react'

const ProductDetails = ({productDetails}) => {
 
      return (
        <div className="product-details">
          <div className="product-image">
            <img src={productDetails.imageUrl} />
          </div>
          <div className="product-info">
            <h1>{productDetails.name}</h1>
            <p>{productDetails.description}</p>
            <h2>Price : ${productDetails.price}</h2>
            <button>Add to Cart</button>
          </div>
        </div>
      );
}

export default ProductDetails