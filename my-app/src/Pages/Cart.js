import { Link } from "react-router-dom";
import "./Cart.css";
import Item from "../Components/Item"

function Cart(props) {
    return (
        <div>
            <h1>Cart</h1>
            <div class="cartList">
               ajfkjaflkj
            </div>


            <Link to="/checkout">
                <button class="CheckoutButton">Checkout</button>
            </Link>
        </div>
    )
}

export default Cart;