import React,{useState} from 'react'
import '../styles/Order.css'

  export default function Order({cart,setCart}) {
    const inputFields = [
      { label: "Name", name: "name", type: "text", placeholder: "Enter your name here" },
      { label: "Email", name: "email", type: "email", placeholder: "Enter your email here" },
      { label: "Address", name: "address", type: "text", placeholder: "Enter your address here" },
      { label: "Phone Number", name: "phone", type: "text", placeholder: "Enter your phone number here" },
    ];
    const [data,setData] = useState({
      name :"",
      email :"",
      address :"",
      phone :"",
    });
    console.log("Cart at Order page:", cart);
    console.log("Form Data:", data);

    const handleInputs = (event) => {
      const { name, value } = event.target;
      setData((prev) => ({...prev, [name]: value }));
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const { name, email, address, phone } = data;
      if (name && email && address && phone && cart.length > 0) {
        let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Thank you for your order, ${name}! Your total price is RS: ${totalPrice}. We will deliver your food to ${address}.`);
        setData({ name: "", email: "", address: "", phone: "" });
        setCart([]);
      } else if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before ordering.');
      } else {
        alert('Please fill in all the fields.');
      }
    }

    return (
      <div className="order" id="order">
        <h1>ORDER <span className="color">NOW</span></h1>
        <div className="Baatha">
          <div className="order_img">
            <img src='./images/d.webp' alt="food delivery" />
          </div>
          <form onSubmit={handleSubmit}>
            {inputFields.map((input, index) => (
              <div className="input" key={index}>
                <p>{input.label}:</p>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value = {data[input.name]}
                  onChange={handleInputs}
                  required
                />
              </div>
            ))}
            <button type ="submit" className="submit">Order Now</button>
          </form>
        </div>
      </div>
    );
  }
