import { Link } from "react-router-dom";
import "./Cart.css";
import Item from "../Components/Item"
import React from "react"

function DisplayCart(props) {
    const RemoveFromCart = (RemovedItem) => {
        props.SetCart(props.Cart.filter((Item) => Item !== RemovedItem));
    };

    const IncrementCount = (IncrementItem) => {
        const CartUpdate = [...props.Cart];
        let ItemToIncrement = CartUpdate.findIndex((ItemInCart) => ItemInCart.name === IncrementItem.name); //find the item to increment the amount of
        CartUpdate[ItemToIncrement].count += 1;
        props.SetCart(CartUpdate); 
    };
    
    const DecrementCount = (DecrementItem) => {
        const CartUpdate = [...props.Cart]; 
        let ItemToDecrement = CartUpdate.findIndex((ItemInCart) => ItemInCart.name === DecrementItem.name); //find the item to increment the amount of
        if (CartUpdate[ItemToDecrement].count > 1) { 
            CartUpdate[ItemToDecrement].count -= 1;
            props.SetCart(CartUpdate);
        }
        else {
            props.SetCart(props.Cart.filter((Item) => Item !== DecrementItem)); //remove instead of setting count to zero
        }

    };
    return (
        <div>
            <h1>Cart</h1>
            <div class="cartList">
            {props.Cart.map((item) => (
                <Item isCart name={item.name} price={item.price} image={item.image} item={item} count={item.count} increment={IncrementCount} decrement={DecrementCount} delete={RemoveFromCart}/>
                ))}
            </div>

            <Link to="/checkout">
                <button class="CheckoutButton">Checkout</button>
            </Link>
        </div>
    )
}

export default DisplayCart;