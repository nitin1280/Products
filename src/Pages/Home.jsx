import React, { useState, useEffect } from 'react';
import '../App.css';
import ProductDetails from '../Details';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setlist } from '../redux/ProductSlice';
import { FaCartArrowDown } from "react-icons/fa";
import Navbar from './Nabvar';
import Footer from './Footer';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const initial = async () =>{ 
    const response = await axios.get("https://dummyjson.com/products");
    
    setProducts(response.data.products);
    dispatch(setlist(response.data.products))
    setLoading(false);
  }

  useEffect(() => {

    initial();
  }, []);
  
 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    navigate(`/productsDetails/${product.id}`)
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
   const handleSearch = () =>{
    navigate("/productSearch");
   }
  return (
    <div>
        
      <Navbar/>
        
      <br/>
      <br/>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onClose={handleProductClose} />
      ) : (
        <div className="product-container">
          {products.map(product => (
            <div key={product.id} className="product-item" >
              <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '400px' }} onClick={() => handleProductClick(product)}/>
              <strong>{product.title}</strong> <strong>Category : {product.category}</strong> <strong>Brand : {product.brand}</strong> <strong>price-${product.price}</strong>
              <strong>Rating(/5) : {product.rating}</strong>
              <FaCartArrowDown onClick={() => handleProductClick(product)} className='tick1'/>
            </div>
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
