import Button from "./Button";
import { addToCart } from "../store/cart/cartReducer";
import { useDispatch } from "react-redux";
import { Product } from "../services/product";

function ProductDetail({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const handleIncrement = (cartItem: Product) => {
    dispatch(addToCart(cartItem));
  };
  return (
    <div className="flex justify-between p-2 shadow-lg w-4/5 pb-6 bg-white">
      <div className="w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-full" />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-3xl">{product.name}</h2>
        <p className="text-2xl text-base-color mt-2">
          {Number(product.price)}₺
        </p>
        <Button onClick={() => handleIncrement(product)} className="mt-5">
          Add to Cart
        </Button>

        <p className="text-black mt-5">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
