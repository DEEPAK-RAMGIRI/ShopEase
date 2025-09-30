import React from 'react';
import '../styles/Menu.css';

export default function Menu(props) {
  const menuItems = [
    { name: "Ratatouile", price: 800, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f1.webp", stars: 5 },
    { name: "Lobster Soup", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f2.webp", stars: 4.5 },
    { name: "Crêpes", price: 830, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f3.webp", stars: 5 },
    { name: "Palmiers", price: 499, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f4.webp", stars: 4.5 },
    { name: "Upma", price: 150, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f5.webp", stars: 4.5 },
    { name: "Biryani", price: 750, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f6.webp", stars: 4.5 },
    { name: "Gulab Jamun", price: 1000, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f7.webp", stars: 5 },
    { name: "Palak Panner", price: 560, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f8.webp", stars: 5 },
    { name: "Onigiri", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f9.webp", stars: 4.5 },
    { name: "Tonkatsu", price: 700, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f10.webp", stars: 4.5 },
    { name: "Ramen", price: 500, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f11.webp", stars: 5 },
    { name: "Udon", price: 580, image: "https://raw.githubusercontent.com/DEEPAK-RAMGIRI/foodies/main/public/images/f12.webp", stars: 5 },
  ];

  const renderStars = (count) => {
    const fullStars = Math.floor(count);
    const halfStar = count % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="bx bxs-star"></i>
        ))}
        {halfStar && <i className="bx bxs-star-half"></i>}
      </>
    );
  };

  return (
    <div className="menu" id="menu">
      <h1>OUR<span> MENU</span></h1>
      <div className="menu_box">
        {menuItems.map((item, index) => (
          <div className="menu_card" key={index}>
            <div className="menu_img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu_info">
              <h2>{item.name}</h2>
              <h3>RS: {item.price}</h3>
              <div className="menu_star">{renderStars(item.stars)}</div>
              <div>
                <button
                  className="menu_btn"
                  data-item={item.name}
                  data-price={item.price}
                  onClick={() => props.handleCart(item.name, item.price)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
