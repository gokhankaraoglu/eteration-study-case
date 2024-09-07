import { useDispatch } from "react-redux";
import { Product } from "../services/product";
import Button from "./Button";
import { AppDispatch } from "../store";
import { addToCart } from "../store/cart/cartReducer";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch<AppDispatch>();
  const addProductToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <Link
      to={`/${product.id}`}
      className="bg-white p-2.5 text-center flex flex-col"
    >
      <img className="h-[150px] w-full bg-[#c4c4c4]" src={product.image} />
      <p className="text-base-color font-medium text-sm my-[15px] text-left">
        {Number(product.price)} ₺
      </p>
      <p className="font-medium text-sm mb-[15px] text-left">{product.name}</p>
      <div className="flex-grow" />
      <Button onClick={() => addProductToCart(product)}>Add to Cart</Button>
    </Link>
  );
}

export default ProductCard;
