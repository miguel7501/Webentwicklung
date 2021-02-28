import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav.js";
import Cart from "./Pages/Cart.js";
import Shop from "./Pages/Shop.js";
import Checkout from "./Pages/Checkout.js";

function App() {
  return (
    
    <div className="App">
      <Router>
      <Nav />
        <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Shop} />
        <Route path="/checkout" component={Checkout} />
      </Router>  
    </div>
  );
}

export default App;
