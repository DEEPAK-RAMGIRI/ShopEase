import React from 'react';
import '../styles/Menu.css';

export default function Menu({products,handleAddToCart}) {
  
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
        {products && products.map((item, index) => (
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
                  onClick={() =>handleAddToCart(item._id,item.name)}
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
