import React from 'react'
import Cart from './Cart'
import DataProvider from './DataProvider'
import Listing from './Listing'
import Navbar from './Navbar'

export default function EcomHome() {
    return (
        <DataProvider>
            <Navbar/>
            <Cart/>
            <Listing/>
            
            <h1>Home Page</h1>
        </DataProvider>
    )
}


