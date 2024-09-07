import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import PanelCardLayout from "./PanelCardLayout";
import { RootState } from "../store";
import {
  CartProduct,
  addToCart,
  clearCart,
  removeFromCart,
} from "../store/cart/cartReducer";

function CartSummary() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleIncrement = (cartItem: CartProduct) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecrement = (cartItem: CartProduct) => {
    dispatch(removeFromCart(cartItem.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <aside className="w-1/5">
      <PanelCardLayout name="Cart">
        <ul className="flex flex-col gap-[15px]">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <li
                key={cartItem.id}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-normal">{cartItem.name}</p>
                  <p className="text-base-color text-[10px] font-medium">
                    {cartItem.price}₺
                  </p>
                </div>
                <div className="flex items-center h-7">
                  <button
                    className="bg-gray-200 w-6 px-2 py-1 h-full text-gray-text-color font-semibold rounded-l-sm "
                    onClick={() => handleDecrement(cartItem)}
                  >
                    -
                  </button>
                  <p className="bg-base-color text-white w-6 h-full text-center items-center text-lg font-normal">
                    {cartItem.quantity}
                  </p>
                  <button
                    className="bg-gray-200 w-6 h-full text-gray-text-color px-2 py-1 font-semibold rounded-r-sm"
                    onClick={() => handleIncrement(cartItem)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>
              <p className="px-2 py-1 text-gray-text-color">Cart is empty</p>
            </li>
          )}
        </ul>
      </PanelCardLayout>
      <PanelCardLayout name="Checkout" className="mt-8">
        <p className="text-sm">
          Total Price:{" "}
          <span className="text-base-color font-semibold">{totalAmount}₺</span>
        </p>
        <Button onClick={handleClearCart}>Checkout</Button>
      </PanelCardLayout>
    </aside>
  );
}

export default CartSummary;
