import { useSelector } from "react-redux";
import { RootState } from "../store";

function Header() {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  return (
    <header className="header-container">
      <div className="container">
        <div className="header">
          <div className="logo">Eteration</div>
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="user-info">
            <span className="cart-info">Cart: {totalAmount}₺</span>
            <span className="user-name">Kerem</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
