import { Link } from "react-router-dom";
import { trackEvent } from "../../utils/tracking";

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
        onClick={() =>
          trackEvent("product_click", `product_${product.id}`)
        }
      >
        View Product
      </Link>

    </div>
  );
}

export default ProductCard;