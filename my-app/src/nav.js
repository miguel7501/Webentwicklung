import { Link } from "react-router-dom";
import "./nav.css";
import logo from './logo.svg';

function Nav() { //Beispiel für functional based Component
    return (
        <div className="Nav">
            <Link to="/"><img src="./logo.svg" /></Link>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>


    );
}

export default Nav;