import { useEffect } from "react";
import ProductList from "../components/store/ProductList";
import { trackEvent } from "../utils/tracking";

function Home() {

  useEffect(() => {
    trackEvent("page_visit", "home");
  }, []);

  return (
    <div>
      <h1>Demo Store</h1>
      <p>Browse our products below.</p>

      <ProductList />
    </div>
  );
}

export default Home;
