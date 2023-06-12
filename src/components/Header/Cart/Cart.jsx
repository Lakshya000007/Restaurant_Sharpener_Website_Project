import { useContext, useState } from "react";
import "./Cart.css";
import { UserContext } from "../../../App";

const Cart = ({ showCart, handleCartShow, totalCost }) => {
  const cartItemList = useContext(UserContext);
  // const [cartItemList, setCartItemList] = useState([
  //   {
  //     name: "Sushi",
  //   },
  //   {
  //     name: "Crisp Falero",
  //   },
  // ]);

  const closeCartShow = () => {
    handleCartShow();
  };

  if (showCart) {
    return (
      <>
        <div className="cart-overlay">
          {cartItemList.cartList.map((item) => {
            return (
              <>
                <div>
                  <small>
                    {item.name} - {item.count}
                  </small>
                </div>
              </>
            );
          })}

          <div className="cart-amt">
            <b>Total Amount</b>
            <b>{Number(totalCost)}$</b>
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
