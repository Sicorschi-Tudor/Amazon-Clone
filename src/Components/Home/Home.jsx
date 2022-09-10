import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://c8.alamy.com/comp/2GTAYP6/modified-photo-of-parcel-with-amazon-logo-in-the-shopping-cart-on-a-blue-background-2GTAYP6.jpg"
          alt=""
        ></img>

        <div className="home_row">
          <Product
            id={1}
            title="The learn startup"
            price={209.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={4}
          />

          <Product
            id={2}
            title="The learn startup"
            price={229.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={3}
            title="The learn startup"
            price={29.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={2}
          />
          <Product
            id={4}
            title="The learn startup"
            price={290.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={4}
          />
          <Product
            id={5}
            title="The learn startup"
            price={299.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={1}
          />
        </div>

        <div className="home_row">
          <Product
            id={6}
            title="The learn startup"
            price={296.99}
            image="https://media.4rgos.it/i/Argos/9520608_R_Z001A?w=750&h=440&qlt=70"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
