import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
import '../styles/global.css';


export default function Navbar(props) {
  const handleLength = () =>{
    if (props.cart && props.cart.length) {
      return props.cart.length;
    }
    return 0;
  }

  // const newWindow = (url) => {
  //   const width = 700;
  //   const height = 800;

  //   const left = (window.screen.width / 2) - (width / 2);
  //   const top = (window.screen.height / 2) - (height / 2);

  //   const popup = window.open(
  //     url,
  //     '_blank',
  //     `width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`
  // );

  // if (popup) popup.opener = null;
  // };
  return (
    <div>
      <nav>
  <div>
    <a href="#Chef" className="logo">
      <img src='./images/chef.webp' alt="chef pic" />
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
  // onClick={() => newWindow('https://www.google.com')}
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
  )
}
