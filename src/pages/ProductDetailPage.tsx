import { useEffect, useState } from "react";
import { Product, getProduct } from "../services/product";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import CartSummary from "../components/CartSummary";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const product = await getProduct(+id);
      setProduct(product);
    };

    fetchProduct();
  }, [id]);
  return (
    <main className="container">
      <div className="main-content">
        {product ? <ProductDetail product={product} /> : <div />}
        <CartSummary />
      </div>
    </main>
  );
}

export default ProductDetailPage;
