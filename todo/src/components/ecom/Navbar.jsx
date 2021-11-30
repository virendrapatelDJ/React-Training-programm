import React, { useContext } from 'react'
import { EcomContext } from './DataProvider'

export default function Navbar() {
    const {cart} =  useContext(EcomContext)

    console.log({cart})
   
    return (
        <div>
            <h1>Number Of Products is Cart : {Object.values(cart).length}</h1>
        </div>
    )
}
