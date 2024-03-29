import React from "react";
import { mensData } from "./files/mensData";
import wdata from "./files/womens.json";
import kdata from "./files/kids.json";
import b1 from "../assets/banner1.jpg";
import b2 from "../assets/banner2.webp";
import b3 from "../assets/banner3.jpg";
import b4 from "../assets/banner4.webp";
import b5 from "../assets/banner5.jpg";
import b6 from "../assets/banner6.jpg";
import b7 from "../assets/banner7.jpg";
import b8 from "../assets/banner-men.avif";
import b9 from "../assets/banner-women.avif";
import b10 from "../assets/banner-kid.avif";
import "../css/Section.css";
import { Link } from "react-router-dom";

const Section = () => {
  const mfive = mensData.slice(0, 4);
  const wfive = wdata.slice(0, 4);
  const kfive = kdata.slice(0, 4);
  return (
    <div className="section">
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
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="3"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="4"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="5"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="6"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={b1} alt="Los Angeles" class="d-block" />
            </div>
            <div class="carousel-item">
              <img src={b2} alt="Chicago" class="d-block" />
            </div>
            <div class="carousel-item">
              <img
                src={b3}
                alt="Chicago"
                style={{ width: "100%" }}
                class="d-block"
              />
            </div>
            <div class="carousel-item">
              <img
                src={b4}
                alt="Chicago"
                style={{ width: "100%" }}
                class="d-block"
              />
            </div>
            <div class="carousel-item">
              <img
                src={b5}
                alt="women"
                style={{ width: "100%" }}
                class="d-block"
              />
            </div>
            <div class="carousel-item">
              <img
                src={b6}
                alt="Kids"
                style={{ width: "100%" }}
                class="d-block"
              />
            </div>
            <div class="carousel-item">
              <img
                src={b7}
                alt="Kids"
                style={{ width: "100%" }}
                class="d-block"
              />
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

      <section className="mx-auto my-5 d-xxl py-1">
        <div className="container mt-4">
          <p className="h3 m-4">___SHOP NEW COLLECTION___</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src={b8}
                    style={{ height: "290px" }}
                    className="card-img-top rounded"
                  />
                  <h5 className="card-title m-2">MENS</h5>
                  <Link to="/mens">
                    <button class="cta">
                      <span>Shop Now</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src={b9}
                    style={{ height: "290px" }}
                    className="card-img-top rounded"
                  />
                  <h5 className="card-title m-2">WOMENS</h5>
                  <Link to="/womens">
                    <button class="cta">
                      <span>Shop Now</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img
                    src={b10}
                    style={{ height: "290px" }}
                    className="card-img-top rounded"
                  />
                  <h5 className="card-title m-2">KIDS</h5>
                  <Link to="/kids">
                    <button class="cta">
                      <span>Shop Now</span>
                      <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-5 d-xxl py-1">
        <div className="container mt-4">
          <p className="h3 m-4">MENS POPULAR</p>
          <div className="row">
            {mfive.map((item) => (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={item.image}
                      style={{ height: "250px" }}
                      className="card-img-top rounded"
                    />
                    <h5 className="card-title m-2">{item.title}</h5>
                    <div className="card-text">Rs.{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4">
          <p className="h3 m-4">WOMENS POPULAR</p>
          <div className="row">
            {wfive.map((item) => (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={item.image}
                      style={{ height: "250px" }}
                      className="card-img-top rounded"
                    />
                    <h5 className="card-title m-2">{item.title}</h5>
                    <div className="card-text">Rs.{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4">
          <p className="h3 m-4">KIDS POPULAR</p>
          <div className="row">
            {kfive.map((item) => (
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={item.image}
                      style={{ height: "250px" }}
                      className="card-img-top rounded"
                    />
                    <h5 className="card-title m-2">{item.title}</h5>
                    <div className="card-text">Rs.{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="mx-auto my-5 d-xxl py-1">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 email">
              <h5 className="h5">Email:</h5>
              <input type="text" />
              <br />
              <button className="btn btn-success">Submit</button>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="h5">My sephora</li>
                <li>My Account</li>
                <li>Order Status</li>
                <li>Beauty Insider</li>
                <li>Rewards Bazzer</li>
                <li>Loves</li>
                <li>Flash Unlimited Shipping</li>
                <li>Subscribe Now</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="h5">Help & Faq</li>
                <li>Online Ordering</li>
                <li>Shipping</li>
                <li>Billing</li>
                <li>Returns & Exchanges</li>
                <li>International Shippments</li>
                <li>Customer Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li className="h5">Ways to Shop</li>
                <li>Just Arrived</li>
                <li>Best Sellers</li>
                <li>Beauty Offers</li>
                <li>Gift Cards</li>
                <li>Share locations,events & classes</li>
                <li>Book a reservation</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Section;
