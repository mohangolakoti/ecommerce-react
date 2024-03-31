import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mensData } from "./mensData";
import Navbar from "../Components/Navbar";
import { useCart } from "../context/CartContext";
import "../css/MensSingle.css";
import rating from "../assets/rating.png";

const MensSingle = () => {
  //const {cart,setCart} = useContext(Cart);
  const { addToCart, cartItems } = useCart();
  const { id } = useParams();
  const product = mensData.find((item) => item.id === parseInt(id));
  // Convert id to the appropriate type if necessary for comparison
  // For example, if id in mensData is a number and id from useParams is a string
  // You may need to convert it to a number before comparison

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div id="menSingle">
      <Navbar />
      <div className="mx-auto my-5 py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-card">
                <div className="pose-main">
                  <img src={product.image} className="pose" />
                  <img src={product.image} className="pose" />
                  <img src={product.image} className="pose" />
                  <img src={product.image} className="pose1 pose" />
                </div>
                <div className="card-body">
                  <img src={product.image} className="card-img-top rounded" />
                </div>
              </div>
            </div>

            <div className="description col-md-6 container-md">
              <h5 className="title">{product.title}</h5>
              <div className="s-p">special offer</div>
              <div className="text">Rs.{product.price}</div>
              <img src={rating} alt="ratings" className="ratings" />
              <div className="rating-text">459 ratings & reviews</div>
              <div className="size">
                <div className="nums active">S</div>
                <div className="nums">M</div>
                <div className="nums">L</div>
                <div className="nums">XL</div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className=" btn btn-success"
              >
                <span>ADD TO CART</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensSingle;
