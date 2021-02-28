import "./item.css"

function Item(props) {
    return (
        <div class="itemcontainer">
            <img src="https://img.pr0gramm.com/2021/02/15/e24ee675d656ffc8.jpg" height="150px" width="auto" />

            <div class="textcontainer">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <button class = "button">Add to Cart</button>
            </div>
        </div>
    )
}

export default Item