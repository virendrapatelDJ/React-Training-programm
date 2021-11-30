import React, { useState } from 'react';
const initialData = {
  products: [
    {
      id: 1,
      product: 'Squeeze Bottle',
    },
    {
      id: 2,
      product: 'Spice - Pepper Portions',
    },
    {
      id: 3,
      product: 'Pork - Back, Long Cut, Boneless',
    },
    {
      id: 4,
      product: 'Soup - Campbells - Chicken Noodle',
    },
    {
      id: 5,
      product: 'Pineapple - Regular',
    },
    {
      id: 6,
      product: 'Chocolate - Compound Coating',
    },
    {
      id: 7,
      product: 'Potatoes - Purple, Organic',
    },
    {
      id: 8,
      product: 'Squid - U 5',
    },
    {
      id: 9,
      product: 'Coffee - Hazelnut Cream',
    },
    {
      id: 10,
      product: 'Marjoram - Dried, Rubbed',
    },
  ],
  cart: {},
};

const EcomContext = React.createContext({
  initialData,
});

export default function DataProvider(props) {

    const [cart , setCart] = useState(initialData.cart)

    function addToCart(product){
        // check product is already added or not
        debugger;
        const existing = cart[product.id]

        const cartObject = {product , quantity : 1}
        if(existing){
            cartObject.quantity = existing.quantity + 1
        }
        setCart({
           ...cart , 
           [product.id] :cartObject
        })
    }

  return (
    <EcomContext.Provider value={{ ...initialData , cart , addToCart }}>
      {props.children}
    </EcomContext.Provider>
  );
}

export {EcomContext}
