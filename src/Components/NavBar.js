import React, {useState} from "react";

function Item({ name, category }) 
  const [addToCart, setAddToCart]= useState(true)
  const cartState = addToCart? "": "in-cart"
  const cartName = addToCart? "Add to Cart": "Remove From Cart"

  

export default Item;
