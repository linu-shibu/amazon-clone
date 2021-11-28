import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://png2png.com/wp-content/uploads/2021/08/images-9.png"
          className="header__logo"
        />
      </Link>

      <div className="header__option">
        <PlaceIcon className="header__addressIcon" />
        <span className="header__optionLine1">Hello</span>
        <span className="header__optionLine2">Select your address</span>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__flagIcon">
        <img
          src="https://media.istockphoto.com/vectors/flag-of-india-vector-id519611160?k=20&m=519611160&s=612x612&w=0&h=n8mmywhzMzcrRI4I50uKYEFVeS4wDfpOGQGEaCK6YPw="
          alt="img"
          className="header__flagImg"
        />
        <ArrowDropDownIcon className="header__dropIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLine1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLine1">Returns</span>
            <span className="header__optionLine2">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="shoppingBasket" />
            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
