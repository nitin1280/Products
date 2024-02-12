import React, { useEffect, useState } from 'react';
import "./App.css"
import { useNavigate, useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import axios from 'axios';
// import { setlist } from './redux/ProductSlice';
import Navbar from './Pages/Nabvar';


const Details = ({  }) => {

  
  const {id} = useParams();
  console.log(id);
  const productlist = useSelector((state)=>state.productReducer.list);
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  console.log(product,"hello");
  const onClose = () =>{
   
   navigate("/");
  }
   
  // const dispatch = useDispatch();
  const initial = async () =>{ 
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    
    setProduct(response.data)
    
    
  }

  useEffect(() => {
    console.log(productlist,"productList",!productlist);
      
    
        initial();
      

    
  }, []);
  return (
    <>
    <Navbar/>
    <br/>
    <div className="product-details">
      
      <h1>{product?.title}</h1>
      <img src={product?.thumbnail} alt={product?.title} style={{ maxWidth: '300px' }} />
      <h3>Brand : {product?.brand}</h3>
      <h3>Price : {product?.price}</h3>
      <h3>Category : {product?.category}</h3>
      <h3>rating(/5) : {product?.rating}</h3>
      <h4>{product?.description}</h4>
      <button onClick={onClose}>Back to List</button>
    </div>
    </>
  );
};

export default Details;
