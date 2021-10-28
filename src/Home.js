import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/71-yif8IfmL._SX3000_.jpg"
          className="home__image"
          alt="amazon banner"
        />
      </div>
      <div className="home__row">
        <Product
          id="000001"
          title="The Lean Startup"
          image="https://kbimages1-a.akamaihd.net/11e082bf-9af2-45ed-a8ee-2b96613d6c78/353/569/90/False/the-lean-startup-3.jpg"
          price={29.99}
          rating={5}
        />
        <Product
          id="000002"
          title="OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black) (2021 Model)"
          image="https://m.media-amazon.com/images/I/61eTK1VEP0S._SL1500_.jpg"
          price={899.99}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="000003"
          title="LG 260L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-S292RDSX, Dazzle Steel, Convertible)"
          image="https://m.media-amazon.com/images/I/71nd0B5mhFL._SL1500_.jpg"
          price={199.99}
          rating={4}
        />
        <Product
          id="000004"
          title="AmazonBasics 1.5 Ton 3 Star 2021 Inverter Split AC, White"
          image="https://m.media-amazon.com/images/I/61i5I8Ym97L._SL1500_.jpg"
          price={399.99}
          rating={4}
        />
        <Product
          id="000005"
          title="Raymond Weil Analog Black Dial Men's Watch-2780-ST-20001"
          image="https://m.media-amazon.com/images/I/513Hznl5ZdL._UL1000_.jpg"
          price={1199.99}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="000006"
          title="Canon EOS 90D Digital SLR Camera (Body Only)"
          image="https://m.media-amazon.com/images/I/71N1AoQkw2S._SL1500_.jpg"
          price={1499.99}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
