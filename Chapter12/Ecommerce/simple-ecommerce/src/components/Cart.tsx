import useCart from "../hooks/useCart"
import { useState } from "react"
import CartLineItem from "./CartLineItem"
const Cart = () => {
    const [confirm, setConfirm]=useState<boolean>(false)
    const {dispach,REDUCER_ACTIONS,totalItems,totalPrice,cart  }=useCart()

    const onSubmitOrder=()=>{
        dispach({ type: REDUCER_ACTIONS.SUBMIT})
        setConfirm(true)
    }
    const pageContent = confirm 
                        ? <h2>Thank you for your Order.</h2>
                        : <div>
                            <h2 className="offscreen">Cart</h2>
                            <ul className="cart">
                                {cart.map(item =>{
                                    return (<CartLineItem
                                                key={item.sku}
                                                item={item}
                                                dispach={dispach}
                                                REDUCER_ACTIONS={REDUCER_ACTIONS}
                                    />)

                                })}
                            </ul>
                            <div className="cart__total">
                                <p>Total Items: {totalItems}</p>
                                <p>Total Price: {totalPrice}</p>
                                <button className="cart__submit" disabled={!totalItems} onClick={onSubmitOrder}>Place Order</button>
                            </div>
                        </div>
    const content = (
        <main className="main main--cart">
            {pageContent}

        </main>
    )

  return  content
}

export default Cart