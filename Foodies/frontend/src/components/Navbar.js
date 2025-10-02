import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/global.css';

export default function Navbar({ cart }) {
  const total = cart && cart.items ? cart.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? 'active' : '';
  };

  return (
    <div>
      <nav>
        <div>
          
          <Link to="/" className="logo">
            <img src="./images/chef.webp" alt="chef pic" />
          </Link>
        </div>

        <ul>
          <li>
            <NavLink to="/" style={{ "--i": 1 }} className={getNavLinkClass}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/menu" style={{ "--i": 2 }} className={getNavLinkClass}>MENU</NavLink>
          </li>
          <li>
            <NavLink to="/order" style={{ "--i": 4 }} className={getNavLinkClass}>Order Now</NavLink>
          </li>
        </ul>

        <div className="icon">
          <Link to='/cart'
            className="btn btn-primary position-relative border-0 bg-transparent p-0"
            style={{ boxShadow: "none", lineHeight: 0 }}
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