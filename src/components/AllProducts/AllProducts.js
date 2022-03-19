import React, { useEffect, useState } from "react";
import Product from "../SingleProduct/Product";

const AllProducts = ({ setCount }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteBtn = (id) => {
    const restItems = products.filter((pd) => pd.id !== id);
    setProducts(restItems);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">All Products</h2>
      <div className="row row-cols-lg-3 g-4">
        {products.map((product) => (
          <Product
            product={product}
            deleteBtn={deleteBtn}
            setCount={setCount}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
