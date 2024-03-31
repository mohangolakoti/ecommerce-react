import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import kids from '../Components/files/kids.json'
import Navbar from '../Components/Navbar';
import { useCart } from '../context/CartContext';
import rating from "../assets/rating.png";

const KidsSingle = () => {

    const {addToCart,cartItems} = useCart();
    const { id } = useParams();
    const product = kids.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
      <div id="menSingle">
      <Navbar />
      <div className=" mx-auto my-5 py-1">
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
                  <img src={rating} alt="ratings" className="ratings"/>
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

export default KidsSingle;
