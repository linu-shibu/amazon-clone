import React from "react";
import "./SecHeader.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function SecHeader() {
  return (
    <div className="secHeader">
      <Link to="/">
        <div className="optionAll option">
          <MenuIcon className="secHeader__menuIcon" />
          <span className="secHeader__option">All</span>
        </div>
      </Link>

      <Link to="/">
        <div className="option">
          <span className="secHeader__option">Gift cards</span>
        </div>
      </Link>

      <Link to="/">
        <div className="option">
          <span className="secHeader__option">Mobiles</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Best sellers</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Electronics</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Customer service</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Fashion</span>
        </div>
      </Link>
      <Link to="/">
        <div class="option__Prime">
          <span className="secHeader__option">Prime</span>
          <ArrowDropDownIcon className="secHeader__dropIcon" />
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Home & Kitchen</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Today's deals</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Amazon pay</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Computers</span>
        </div>
      </Link>
      <Link to="/">
        <div>
          <span className="secHeader__option">Books</span>
        </div>
      </Link>
      <Link to="/">
        <div className="secHeader__sideImg">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/chhori/launch/400x39-SWM_JPN._CB653075835_.jpg"
            alt="img"
            className="secHeader__img"
          />
        </div>
      </Link>
    </div>
  );
}

export default SecHeader;
