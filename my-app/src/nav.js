import { Link } from "react-router-dom";
import "./nav.css";
import logo from './logo.svg';

function Nav(props) { //Beispiel für functional based Component
    return (
        <div className="Nav">
            <Link to="/"><h1>Amazon 2</h1></Link>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart ({props.CartCounter})</Link>
        </div>


    );
}

export default Nav;