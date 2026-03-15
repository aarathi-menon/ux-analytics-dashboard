import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductPage() {

  const { id } = useParams();

  const product = products.find(
    p => p.id === parseInt(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="card">

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductPage;