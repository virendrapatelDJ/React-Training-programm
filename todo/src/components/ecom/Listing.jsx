import React, { useContext } from 'react'
import { EcomContext } from './DataProvider'


export default function Listing() {

   const {products , addToCart} =  useContext(EcomContext)

   const addToCartHandler = (product)=>{
        addToCart(product)
   }

    return (
        <div>
            <h1>Listing</h1>
            <ol>
            {
                products.map((product)=>
                <li>
                    {product.product} 
                    <button onClick={()=>addToCartHandler(product)}>Add To Cart</button>
                </li>)
            }
            </ol>
        </div>
    )
}
