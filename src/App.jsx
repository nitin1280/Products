import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Details from "./Details";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
  
  
  
  function App() {
    
  
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/productsDetails/:id" element={<Details/>}/>
        <Route path="/productSearch" element={<Search/>}/>
        
        
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App;
  