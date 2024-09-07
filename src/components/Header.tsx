import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSearchQuery } from "../store/filters/filtersReducer";

function Header() {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="bg-base-color">
      <div className="container">
        <div className="header">
          <div className="font-extrabold text-2xl w-1/5">Eteration</div>
          <div className="w-3/5">
            <input
              type="text"
              placeholder="Search"
              className="text-black px-2 py-2 w-1/2"
              onChange={handleSearch}
            />
          </div>
          <div className="flex text-base gap-5 font-normal w-1/5 justify-end">
            <span className="cart-info">Cart: {totalAmount}₺</span>
            <span className="user-name">Kerem</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
