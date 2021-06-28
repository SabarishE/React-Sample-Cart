import logo from './logo.svg';
import './App.css';

import { products } from "./productscollection";

import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";

import { Cart } from "./components/cart";
import { Cards } from "./components/cards";

import React, { useState } from 'react'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";

function App() {

  var item = products;
  const [cart, setcart] = useState([]);
  const [dis, setdis] = useState(0);
  return (
    <div className="App">
      
      <Router>
        <div id="tab">
        <div id="tab1">
          <img src="https://vitorials.net/wp-content/uploads/2019/09/Letter-B-Logo-Design-Tutorial.jpg" id="clogo"></img>
       <Link><button className="tab1 btn btn-outline-dark mt-auto">Home</button></Link> 
       <Link><button className="tab1 btn btn-outline-dark mt-auto">About</button></Link> 

        <div class="dropdown">
  <button  className="tab1 btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Shop
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">All Products</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Popular Items</a></li>
    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
  </ul>
</div>
          <Link to="/products">
            
            <button className="tab1 btn btn-outline-dark mt-auto">Products</button>
          </Link>
          </div>
          <Link to="/cart">
          <button class="btn btn-outline-dark cartbtn">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                        </button>
            
          </Link>
          
          
        </div>

        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Bend the Trend</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Be your Beautiful Best</p>
                </div>
            </div>
        </header>

        

        <Switch>
          <Route path="/products">
            <Cards item={item} setcart={setcart} setdis={setdis} cart={cart} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/cart">
            <Cart cart={cart} setcart={setcart} setdis={setdis} dis={dis} />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
        </Switch>

        
      </Router>
      <footer class="py-5 bg-dark" id="foot">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; 2021 , All Rights Reserved</p></div>
        </footer>
    </div>
  );
}

export default App;
