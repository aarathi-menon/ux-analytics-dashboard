import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <h3>{product.name}</h3>

      <p className="product-price">
        ${product.price}
      </p>

      <Link
        className="button-primary"
        to={`/product/${product.id}`}
      >
        View Product
      </Link>

    </div>
  );
}

export default ProductCard;