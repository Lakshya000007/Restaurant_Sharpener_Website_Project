import { useState } from "react";
import "./Header.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = ({ handleCartShow, cartCnt }) => {
  const handleCartShowClick = () => {
    handleCartShow();
  };

  return (
    <>
      <header className="header-top">
        <h3 style={{ color: "white", marginLeft: "15%", margin: "auto" }}>
          ReactMeals
        </h3>
        <button className="cart" onClick={handleCartShowClick}>
          <BsFillCartPlusFill />
          <div>
            <b>Your Cart</b>
          </div>
          <div className="itemCount" style={{ color: "violet" }}>
            {cartCnt}
          </div>
        </button>
      </header>
      <div className="header-image">
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/code/02-adding-a-header-cmp/src/assets/meals.jpg?raw=true"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
