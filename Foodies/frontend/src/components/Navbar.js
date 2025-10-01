import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/global.css';

export default function Navbar({ cart}) {
  const total = cart && cart.items ? cart.items.reduce((sum,item) => sum + item.quantity , 0): 0;

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
          <Link to ='/cart'
            className="btn btn-primary position-relative border-0 bg-transparent p-0"
            style={{ boxShadow: "none", lineHeight: 0}}   // may be i get problem in adding link style
          >
            <FaShoppingCart size={20} color="black" style={{ verticalAlign: "middle" }} />
            {total > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "10px", padding: "4px 6px" }}
            >
              {total}
            </span>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
}
