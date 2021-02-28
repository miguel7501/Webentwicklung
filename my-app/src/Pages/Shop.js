import Item from "../Components/Item.js"
import "./shop.css"

function Shop(props) {
    console.log(props)
    return (
        <div>
            <h1>Shop</h1>
            <div class="itemList">
            {props.itemList.map( (item) => (
                <Item name={item.name} price={item.price} image={item.image}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;    