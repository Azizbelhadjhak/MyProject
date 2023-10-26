import React from 'react'
import axios from "axios"
const ProductCard = ({product ,switchView}) => {
  const handleSubmit = ()=> {
    axios.post("http://localhost:5000/api/cart",{
      name: product.name,
      price:product.price,
      productId : product._id
    })
    .then(({data})=>{
      console.log("added", data)
    })
    .catch(error =>console.log(error))
  }
  return (
    <div className="product-card">
    <img src={product.imageUrl} alt="image" onClick={()=>switchView("details",product)}/>  
    <h2>{product.name}</h2>
    <p>{product.description.slice(0,32)} ...</p>
    <p className='card-item-price'>Price: ${product.price}</p>
    <p className='card-item-cat'>Categories: {product.categories}</p>
    <div className="product-card-buttons">
        <button>Update Product</button>
        <button >Delete Product</button>
        <button onClick={handleSubmit}>Add to Cart</button>
    </div>
</div>
  )
}

export default ProductCard
