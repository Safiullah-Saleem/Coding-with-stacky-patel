function ProductCart({ product }) {
  const { title, price, image, rating } = product;
  return (
    <div className="product">
      <img className="product-img" src={image} alt={title} />
      <h1>{title}</h1>
      <p>⭐ {rating.rate} / 5</p>
      <p>({rating.count} reviews)</p>
      <p>Price: ${price}</p>
      <button>Buy Now</button>
    </div>
  );
}
export default ProductCart;
