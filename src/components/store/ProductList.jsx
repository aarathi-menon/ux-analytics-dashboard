import { products } from "../../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div>
      <h2>Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default ProductList;