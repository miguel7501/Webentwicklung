import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav.js";
import Cart from "./Pages/Cart.js";
import Shop from "./Pages/Shop.js";
import Checkout from "./Pages/Checkout.js";
import react, { useState } from 'react';

function App() {
  const allItems = [
    { id: 1, name: "Shitposts", price: "11,30€", image:"https://img.pr0gramm.com/2021/02/15/e24ee675d656ffc8.jpg" },
    { id: 2, name: "Memes", price:"2,99€",image:"https://img.pr0gramm.com/2021/02/27/7fa8a64c972a73df.jpg" },
  
    { id: 3, name: "Getriebesand", price: "29,99€", image:"https://cdn-0.etel-tuning.eu/384-large_default/getriebesand.jpg"},
    {
      id: 4,
      name: "Windows 10 Pro",
      price: "499,99€",
      image: "https://productcodes.de/wp-content/uploads/2020/01/Windows-10-Professional-Retail-600x543.png"
    },
    {
      id: 5,
      name: "Adapter Drehstrom Gardena",
      price: "28,99€",
      image: "https://cdn-0.etel-tuning.eu/486-large_default/adapter-drehstrom-auf-gardena.jpg"
    },
    {
      id: 6,
      name: "Kettensäge",
      price: "49,99€",
      image: "https://cdn-0.etel-tuning.eu/471-large_default/kettensaege-tx900.jpg",
    },
    {
      id: 7,
      name: "710er Deckel",
      price: "19,99€",
      image: "https://etel-tuning.com/45-large_default/the-710.jpg"
    },
    {
      id: 8,
      name: "Nicholas Cage Kissen",
      price: "39,99€",
      image: "https://images-na.ssl-images-amazon.com/images/I/81C158mkiEL._SL1440_.jpg"
    }

  ];

  const [cart, setCart] = useState([]);

  return (

    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={() => <Shop itemList={allItems}/>} />
        <Route path="/cart" component={() => <Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" component={() => <Checkout />} />
      </Router>
    </div>
  );
}

export default App;
