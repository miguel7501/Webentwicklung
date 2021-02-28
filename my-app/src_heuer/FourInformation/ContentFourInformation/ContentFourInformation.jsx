import React from 'react'
import './ContentFourInformation.css';
const ContentFourInformation = (props) => {
    return (
        <div className="item">
            <h3>{props.headline} </h3>
            <p>{props.content}</p>
            <button onClick={props.buttonClicked}>Agree</button>
        </div>
    )
}

export default ContentFourInformation