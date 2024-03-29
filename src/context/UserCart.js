import React from "react";
import { useCart } from "./CartContext";
import Navbar from "../Components/Navbar";
import "../css/Cart.css";
import { Link } from "react-router-dom";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div id="cart">
      <Navbar />
      {cartItems != 0 ? (
        cartItems.map((item) => {
          return (
            <div>
              <section className="cart">
                <div className="eachImage">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card cart-body">
                        <div className="card-body">
                          <img
                            src={item.image}
                            style={{ height: "200px", width: "200px" }}
                            className="card-img-top rounded"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card cart-body">
                        <div className="card-body c-b">
                          <h5 className="card-title">{item.title}</h5>
                          <div className="card-text">Rs.{item.price}</div>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="button1 btn btn-primary"
                          >
                            <span>Remove</span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                stroke-miterlimit="2"
                                stroke-linejoin="round"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              >
                                <path
                                  fill-rule="nonzero"
                                  d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })
      ) : (
        <div className="cart-empty">
          <h4>Cart is empty!</h4>
          <Link to="/">
            <button className="button">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCart;
