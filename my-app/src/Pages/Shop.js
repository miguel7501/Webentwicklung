import Item from "../Components/Item.js"
import "./shop.css"

function Shop() {
    const allItems = [
        { name: "Shitposts", price:"11,30€"},
        { name: "Hochlads" },
        { name: "Getriebesand" },
        { name: "Sehr langer Name mit unnötig vielen Worten" },
    ]

    return (
        <div>
            <h1>Shop</h1>
            <div class="itemList">
                {allItems.map((item) =>(
                    <Item name={item.name} price={item.price}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;