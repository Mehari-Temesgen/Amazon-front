import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Bigzzia Gaming Racing Chair with Headrest and Lumbar Support, Adjustable Swivel Rolling for Office, Reclining High Back PU Leather Video Game Computer Desk Chair Ergonomic , Green"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71oW0ODEmLL._AC_SX522_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903888"
            title="Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8-Core CPU, 7-Core GPU, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera. Works with iPhone/iPad; Space Gray"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51KhexN7YkL._AC_UY218_.jpg"
          />
          <Product
            id="23445909"
            title="HyperX Cloud III – Wired Gaming Headset, PC, PS5, Xbox Series X|S, Angled 53mm Drivers, DTS, Memory Foam, Durable Frame, Ultra-Clear 10mm Mic, USB-C, USB-A, 3.5mm – Black/Red"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81rZCg017gL._AC_UY218_.jpg"
          />
          <Product
            id="3254354385"
            title="EEORY Valentine's Day Pillow Covers 18 x 18 Inch Set of 4, Valentines Decor Red Hearts Tree Love You More Decorative Pillowcases for Home Sofa Couch Cushion Decoration G443-18"
            price={198.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71VLHK7CX3L._AC_SX522_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
