import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg amazon-navbar">
        <div className="container-fluid">

          {/* Logo */}
          <a className="navbar-brand text-white fw-bold fs-4" href="https://www.amazon.in/">
            amazon
          </a>

          {/* Delivery */}
          <div className="text-white mx-3 d-none d-lg-block">
            <small>Deliver to</small>
            <br />
            <strong>India</strong>
          </div>

          {/* Search Bar */}
          <form className="d-flex flex-grow-1 mx-3">
            <select className="form-select search-select">
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Books</option>
            </select>

            <input
              className="form-control search-input"
              type="search"
              placeholder="Search Amazon"
            />

            <button className="btn search-btn">
              🔍
            </button>
          </form>

          {/* Right Side */}
          <div className="d-flex align-items-center">

            <div className="text-white mx-3">
              <small>Hello, Sign in</small>
              <br />
              <strong>Account & Lists</strong>
            </div>

            <div className="text-white mx-3">
              <small>Returns</small>
              <br />
              <strong>& Orders</strong>
            </div>

            <a className="text-white mx-3 fs-5" href="https://www.amazon.in/gp/cart">
              🛒 Cart
            </a>

          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <div className="bottom-navbar">
        <div className="container-fluid d-flex">

          <a href="#">☰ All</a>
          <a href="#">Today's Deals</a>
          <a href="#">Customer Service</a>
          <a href="#">Registry</a>
          <a href="#">Gift Cards</a>
          <a href="#">Sell</a>

        </div>
      </div>
    </>
  );
}