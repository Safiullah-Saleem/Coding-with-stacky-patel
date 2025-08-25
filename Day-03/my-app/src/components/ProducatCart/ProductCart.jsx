import React, { useState } from "react";
import SearchFilter from "../Button/SearchFilter";
import { Product } from "../Product/Product";
import { ListofProduct } from "../../utils/constant";
import "./ProductCart.css";

function ProductCart() {
  const [filteredProducts, setFilteredProducts] = useState(ListofProduct);

const handleSearch = (query) => {
  if (!query) {
    setFilteredProducts(ListofProduct); // show all if empty
    return;
  }

  const results = ListofProduct.filter(
    (product) => Number(product.rating) >= Number(query)
  );

  setFilteredProducts(results);
};


  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <div className="product-card">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductCart;
