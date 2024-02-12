import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";
import {  useNavigate } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FaCartArrowDown, FaSearch } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();

  

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
   const handleSearch = () =>{
    navigate("/productSearch")
   }
  

  return (
    <div className="navbar">
      <div className="nav-box">
        <div className="navContainer">
          <span className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20210206/ourmid/pngtree-hottest-product-png-image_2890048.jpg"
              alt=""
              width="40%"
            />
          </span>
        </div>
        <div className="navItems">
          <div className="navBtn">
           
            <button className="navButton" onClick={handleSearch}> <strong> <FaSearch/></strong>
              Search
            </button>
            <button className="navButton">
              Cart <FaCartArrowDown/>
            </button>
          </div>
          <div className="user-dropdown">
            <div className="user" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} className="Font" />
              <FontAwesomeIcon
                icon={faCaretDown}
                className={`caret ${isOpen ? "open" : ""}`}
              />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <a href="">Logout</a>
             
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;