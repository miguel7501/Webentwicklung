import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
    return (
        <div>
        <h1>Cart</h1>
            <Link to="/checkout">
                <button class="buttonc">Checkout</button>
            </Link>
        </div>
    )
}

export default Cart;