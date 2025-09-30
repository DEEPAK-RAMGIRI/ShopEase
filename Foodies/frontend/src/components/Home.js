  import Typed from 'typed.js';
  import React, { useEffect } from 'react';

  import '../styles/global.css';
  import '../styles/Home.css';


  export default function Home() {
    useEffect(() => {
      const typed = new Typed('.text', {
        strings: [
          'ITALIAN CUISINE.',
          'CHINESE CUISINE.',
          'INDIAN CUISINE.',
          'JAPANESE CUISINE',
          'FRENCH CUISINE.',
        ],
        typeSpeed: 50,
        backSpeed: 80,
        loop: true,
      }); return () => {
      typed.destroy();
    };
  }, []);
    return (
      <>
      <div className="container" id="Home" >
      <div className="pics">
          <img src='./images/food1.webp' alt="Delicious Food"  />
      </div>


      <div>
          <h1><span>FOOD</span>IES</h1>
          <h2> MENU<span>: </span>
            <span
                style={{
                  display: "inline-block",
                  width: "220px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                }}
            >
            <span className="text"></span>
            </span>
          </h2>

          <p>
          Our five-star healthy food business, certified by international standards, features dishes prepared by world-class, certified chefs.
          </p>
          <div className="eat">
          <span>Bon appétit!</span>
          </div>
      </div>
      </div>
      </>
    )
  }
