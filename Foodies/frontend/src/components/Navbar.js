import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import '../styles/Navbar.css';
import '../styles/global.css';

export default function Navbar({ cart, onCartToggle }) {
  const handleLength = () => {
    return cart && cart.length ? cart.length : 0;
  };

  return (
    <div>
      <nav>
        <div>
          <a href="#Chef" className="logo">
            <img src="./images/chef.webp" alt="chef pic" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#Home" style={{ "--i": 1 }} className="active">HOME</a>
          </li>
          <li>
            <a href="#menu" style={{ "--i": 2 }}>MENU</a>
          </li>
          <li>
            <a href="#about" style={{ "--i": 3 }}>ABOUT</a>
          </li>
          <li>
            <a href="#review" style={{ "--i": 3 }}>REVIEWS</a>
          </li>
          <li>
            <a href="#order" style={{ "--i": 4 }}>Order Now</a>
          </li>
        </ul>

        <div className="icon">
          <button
            className="btn btn-primary position-relative border-0 bg-transparent p-0"
            style={{ boxShadow: "none", lineHeight: 0 }}
            onClick={onCartToggle}   
          >
            <FaShoppingCart size={20} color="black" style={{ verticalAlign: "middle" }} />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px", padding: "4px 6px" }}
            >
              {handleLength()}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
