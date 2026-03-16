import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useEffect } from "react";
import { trackEvent } from "../utils/tracking";

function ProductPage() {

  const { id } = useParams();

  const product = products.find(
    p => p.id === parseInt(id)
  );

  useEffect(() => {
    trackEvent("product_view", `product_${id}`);
  }, [id]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="card">

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button
        className="button-primary"
        onClick={() =>
          trackEvent("add_to_cart", `product_${product.id}`)
        }
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductPage;