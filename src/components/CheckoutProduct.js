import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, rating, price, image}) {
    
    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

  return (
    <div className="checkoutProduct">
        <img src={image} className="checkoutProduct_image" />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>
           
            <button onClick={removeFromBasket}>Remove from Backpack</button>
        </div>
    </div>
  )
}

export default CheckoutProduct 