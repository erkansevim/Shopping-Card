import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const initialValue = {
    name: "",
    price: 0,
    amount: 0,
    image: "",
    dampingRate: 0.8,
  };

  const [formVeri, setFormVeri] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://63f4e5583f99f5855db9e941.mockapi.io/products",
      formVeri
    );

    setFormVeri(initialValue);

    navigate("/products");
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>

        <form onSubmit={handleSubmit} className="p-2">
          <div className="mb-3">
            <label htmlFor="add-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formVeri.name}
              required
              onChange={(e) =>
                setFormVeri({ ...formVeri, name: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formVeri.price}
              required
              onChange={(e) =>
                setFormVeri({ ...formVeri, price: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="add-quantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              name="amount"
              value={formVeri.amount}
              required
              onChange={(e) =>
                setFormVeri({ ...formVeri, amount: e.target.value })
              }
            />
          </div>
          <label htmlFor="add-image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              name="image"
              value={formVeri.image}
              aria-describedby="basic-addon3"
              required
              onChange={(e) =>
                setFormVeri({ ...formVeri, image: e.target.value })
              }
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="add-to-cart btn btn-success btn-sm cursor-pointer"
            >
              <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default NewProduct;
