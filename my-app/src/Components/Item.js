import "./item.css"

function Item(props) {
    return (
        <div class="itemcontainer">
            <img src={props.image} height="150px" width="auto" />

            <div class="textcontainer">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                {props.isCart //Wird nur beim Aufruf aus dem Warenkorb übergeben
                    ? <div class="CartButtons">
                        <button onClick={()=>props.increment(props.item)}>+</button>
                        {props.count}
                        <button onClick={()=>props.decrement(props.item)}>-</button>
                        <button onClick={()=>props.delete(props.item)}>X</button>
                    </div>
                    : <button class="button" onClick={() => props.AddItem(props.item)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Item