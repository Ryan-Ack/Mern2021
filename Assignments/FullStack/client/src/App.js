import axios from 'axios';
import { Router, Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ShowAllProducts from './components/ShowAllProducts';
import ProductDetails from './components/ProductDetails';

function App() {

  const [productList, setProductList] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:8000/api/products/all')
      .then(res => setProductList(res.data))
      .catch(err => console.log("Error getting all Products", err))
    // How do I rerender after submission?
  }, [])

  return (
    <div className="App">
      <h1>NEW NEW</h1>
      <Link to={"/"}>  Home  </Link> |
      <Link to={"/products/all"}>  All Products  </Link> |
      <Link to={"/products/new"}>  Add a New Product  </Link>
      <Router>

        <ProductForm path='/products/new' />
        <ShowAllProducts path='/products/all' productList={productList} />
        <ProductDetails path='/products/:id' productList={productList} />

      </Router>
    </div>
  );
}

export default App;
