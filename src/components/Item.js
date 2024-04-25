import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setItemInCart] = useState("")
  const classNameInCart = isInCart?"in-cart":""
  const btnValue = isInCart?"Remove From Cart":"Add to Cart"

  function addItemToCart(){
    setItemInCart(isInCart=>!isInCart)
  }

  return (
    <li className={classNameInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{btnValue}</button>
    </li>
  );
}

export default Item;
