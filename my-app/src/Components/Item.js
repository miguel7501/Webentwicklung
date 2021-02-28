import "./item.css"

function Item(props) {
    //console.log(props.name);
    //console.log(props.image);
    return (
        <div class="itemcontainer">
            <img src={props.image} height="150px" width="auto" />

            <div class="textcontainer">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                {props.isCart
                    ? <div class="CartButtons">
                        <button onClick={()=>props.increment(props.item)}>+</button>
                        {props.count}
                        <button onClick={()=>props.decrement(props.item)}>-</button>
                        <button onClick={()=>props.delete(props.item)}>X</button>

                    </div>
                    //Placeholder für Anzahl und Remove-Button
                    : <button class="button" onClick={() => props.AddItem(props.item)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default Item