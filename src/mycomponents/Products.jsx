import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Products</h1>

      <div className="row">
        {products.map((item) => (
          <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.images[0]}
                className="card-img-top product-img"
                alt={item.title}
              />

              <div className="card-body">
                <h6 className="card-title">
                  {item.title.slice(0, 40)}...
                </h6>

                <p className="fw-bold text-success mb-2">
                  ₹ {item.price}
                </p>

                <p className="card-text small">
                  {item.description.slice(0, 80)}...
                </p>

                <button className="btn btn-primary btn-sm">
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}