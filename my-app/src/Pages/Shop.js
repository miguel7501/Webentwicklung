import Item from "../Components/Item.js"
import "./shop.css"

function Shop(props) {
    const Cart = props.Cart;
    console.log(Cart);
    const AddToCart = (ItemToAdd) => {
        let ShopCartUpdate = [...Cart]; 
        let ProductToAddID = ShopCartUpdate.findIndex(
            (Item) => Item.name === ItemToAdd.name
        );  //find the item by its name
        if (ProductToAddID < 0) {
            ShopCartUpdate.push({ ...ItemToAdd, count: 1 });
        }
        else {
            const ItemToAddMore = { ...ShopCartUpdate[ProductToAddID], }; //increase count if item is in cart already
            ItemToAddMore.count += 1;
            ShopCartUpdate[ProductToAddID] = ItemToAddMore;
        };
        props.SetCart([...ShopCartUpdate]);
    };


    return (
        <div>
            <h1>Shop</h1>
            <div class="itemList">
                {props.itemList.map((item) => (
                    <Item name={item.name} price={item.price} image={item.image} AddItem={AddToCart} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Shop;    