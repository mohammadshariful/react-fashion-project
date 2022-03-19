import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./Product.css";

const Product = ({ product, setCount, deleteBtn }) => {
  const { image, title, price, description, id } = product;
  return (
    <div data-aos="fade-up" className="col ">
      <div className="card h-100 shadow-box">
        <img src={image} className="mx-auto pt-3 product-img" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>Price : {price}</h6>
          <p>{description.slice(0, 80)}</p>
          <p className="card-text"></p>
        </div>
        <div className="d-flex justify-content-around pb-4">
          <button className="btn btn-primary" onClick={setCount}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={() => deleteBtn(id)}>
            Delete
          </button>
          <ReactModal product={product} />
          {/* <button className="btn btn-info text-white">Details</button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
