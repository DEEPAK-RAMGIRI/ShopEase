import React from "react";
import "./Review.css";

export default function Review() {
  const CustomerName = [
    {
      name: "Mp3",
      alt: "customer 1",
      image: "./images/c1.webp",
      stars:5,
      review:
        "The chicken in the biryani was incredibly tender and juicy, indicating careful marination and cooking. The rice grains were separate yet held together beautifully, showcasing the chef's skill in preparing this iconic dish.",
    },
    {
       name: "MINI UZI",
      alt: "customer 2",
      image: "./images/c1.webp",
      stars:5,
      review:"The Palak Paneer was warm, fluffy naan bread, which paired perfectly with the creamy texture of the dish. The naan helped to soak up the flavors of the spinach gravy, enhancing the overall dining experience.",
    },
    {
    name: "AWM",
    alt: "customer 3",
    image: "./images/c1.webp",
    stars:5,
    review: "The ramen is exceeded my expectations with its rich tonkotsu broth and perfectly textured noodles. Topped with tender chashu and a flavorful ajitsuke tamago, each bite was a delight. The cozy ambiance and attentive service further enhanced the dining experience.",
    },

    {
        name: "AK47",
        alt: "customer 4",
        image: "./images/c1.webp",
        stars:5,
        review:
            "The Lobster Bisque was a culinary masterpiece, with its velvety texture and rich, savory flavor. The generous chunks of lobster meat added a luxurious touch, making it a truly indulgent experience.",
    }
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
    <div className="review" id="review">
      <h1>
        CUSTOMER <span className="color">REVIEWS</span>
      </h1>
      <div className="reviewers">
        {CustomerName.map((customer, index) => (
          <div className="review-card" key={index}>
            <div className="profile">
              <img src={customer.image} alt={customer.alt} />
            </div>
            <div className="name">{customer.name}</div>
            <div className="reviews">
              {renderStars(customer.stars)}
            </div>
            <div className="opi">
              <p>{customer.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
