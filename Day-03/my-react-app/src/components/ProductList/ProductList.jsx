import { ListofProduct } from "../../utils/contant";
import { useState } from "react";
import ProductCart from "../ProductCart/ProductCart";

function ProductList() {
  const [products, setProducts] = useState(ListofProduct);

  const filterTopRated = () => {
    const filteredProduct = ListofProduct.filter(
      (product) => product.rating.rate >= 4
    );
    setProducts(filteredProduct);
  };

  const showAllProducts = () => {
    setProducts(ListofProduct);
  };

  return (
    <div>
      <button
        onClick={filterTopRated}
        style={{ margin: "10px",  }}
      >
        Top Rated Products
      </button>
      <button onClick={showAllProducts} style={{ marginTop: "10px" }}>
        Show All Products
      </button>
      <div className="product-list">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
