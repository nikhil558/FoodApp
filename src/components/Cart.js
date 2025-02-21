import { useDispatch, useSelector } from "react-redux"
import ItemList from "./itemList"
import { clearItem } from "../../utils/CartSlice"


const Cart = () =>{
    const cartItems= useSelector((store)=>store.cart.items)

    const dispatch= useDispatch()

    const clearCart = () => {
        dispatch(clearItem())
    }
    return (
        <div className="text-center">
            <h1 className="font-bold text-xl">Cart</h1>
            <button className="rounded-lg bg-blue-700 m-4 px-4" onClick={clearCart}>Clear Cart</button>
            <div className="shadow bg-gray-100 w-6/12 m-auto p-4 mt-4">
                {cartItems.map(each=> <ItemList resCard={each} key={each.card.info.id}/>)}
            </div>
            {cartItems.length===0 && <p> Cart is empty</p>}
        </div>
    )
}

export default Cart