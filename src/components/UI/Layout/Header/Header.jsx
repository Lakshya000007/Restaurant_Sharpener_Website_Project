import { useState } from "react";
import "./Header.css";
import { BsFillCartPlusFill } from "react-icons/bs";

const Header = () => {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <div className="header-top">
        <h3 style={{ color: "white", marginLeft: "15%", margin: "auto" }}>
          ReactMeals
        </h3>
        <div className="cart">
          <BsFillCartPlusFill />
          <div>
            <b>Your Cart</b>
          </div>
          <div className="itemCount" style={{ color: "violet" }}>
            {totalItems}
          </div>
        </div>
      </div>
      <div className="header-image">
        <img
          src="https://i.ibb.co/Y0BVtXB/meals.jpg"
          alt=""
          width="100%"
          height="100vh"
        />
      </div>
    </>
  );
};

export default Header;
