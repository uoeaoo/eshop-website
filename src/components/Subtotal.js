import React from 'react'
import "./Subtotal.css"
import { NumberFormatBase } from 'react-number-format'
/* if there are problem with react-currency-format, you should write down a next comand in your terminal: npm install react-currency-format --save --force
currently the react-currency-format does not work with the 18.0.0 and above to get the react-currency format to work you will need to downgrade your react to react ^17.0.0 in your package.json file after deleting your package-lock.json

another option is to add --force to the end of the install command like so

npm install react-currency-format --save --force*/
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
        <NumberFormatBase
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>${value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>

                </>
            )}
            
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />

            <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal