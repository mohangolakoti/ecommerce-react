import React, { useState } from "react";
import Navbar from "./Navbar";
import { mensData } from "./files/mensData";
import { Link } from "react-router-dom";
import "../css/ItemsPage.css";
import b1 from "../assets/banner1.jpg";
import b2 from "../assets/banner2.webp";
import Headroom from "react-headroom";
import { useCart } from "../context/CartContext";

const Mens = () => {
  const { addToCart, cartItems } = useCart();
  const [selectProd, setSelectProd] = useState([]);
  const prodHandler = (prod) => {
    if (selectProd.includes(prod)) {
      setSelectProd(selectProd.filter((item) => item !== prod));
    } else {
      setSelectProd([...selectProd, prod]);
    }
  };

  const filterprod =
    selectProd.length === 0
      ? mensData
      : mensData.filter((fil) => selectProd.includes(fil.title));

  return (
    <div id="items">
      <Headroom>
        <Navbar />
      </Headroom>
      <section>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              class="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={b1} alt="Los Angeles" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src={b2} alt="Chicago" class="d-block" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section className="mens mx-auto my-5 d-xxl py-1">
        <div className="d-flex">
          <div className="p-2 m-2">
            <h2 className="m-2">Filter</h2>
            {Array.from(new Set(mensData.map((product) => product.title))).map(
              (title) => {
                return (
                  <div key={title}>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                        checked={selectProd.includes(title)}
                        onChange={() => prodHandler(title)}
                      />
                      <label class="form-check-label">{title}</label>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="container mt-4 mens mx-auto my-5 d-xxl py-1">
            <div className="row">
              {filterprod.map((item) => (
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <Link to={`/mens/${item.id}`} className="card-title">
                        <img
                          src={item.image}
                          style={{ height: "290px" }}
                          className="card-img-top"
                        />
                        <h5 className="card-title m-2">{item.title}</h5>
                      </Link>
                      <div className="card-text m-2">Rs.{item.price}</div>
                     <button className="cartBtn" onClick={()=>addToCart(item)}>ADD TO CART</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mens;
