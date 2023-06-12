import { useState } from "react";
import "./Cart.css";

const Cart = ({ showCart, handleCartShow }) => {
  const [cartItemList, setCartItemList] = useState([
    {
      name: "Sushi",
    },
    {
      name: "Crisp Falero",
    },
  ]);

  const closeCartShow = () => {
    handleCartShow();
  };

  if (showCart) {
    return (
      <>
        <div className="cart-overlay">
          {cartItemList.map((item) => {
            return (
              <>
                <div>
                  <small>{item.name}</small>
                </div>
              </>
            );
          })}

          <div className="cart-amt">
            <b>Total Amount</b>
            <b>35.62$</b>
          </div>
          <div className="order-cancel">
            <button
              style={{ backgroundColor: "grey", marginRight: "10px" }}
              onClick={closeCartShow}
            >
              Close
            </button>
            <button style={{ backgroundColor: "brown" }}>Order</button>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
