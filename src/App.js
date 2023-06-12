import "./App.css";
import Header from "./components/Header/Header.jsx";
import MealsSummary from "./components/Header/Meals/MealSummary.jsx";
import MealShow from "./components/Header/Meals/MealShow.jsx";
import { createContext, useState } from "react";
import Cart from "./components/Header/Cart/Cart";
import Modal from "./components/Header/Modal/Modal";

export const UserContext = createContext();

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartCnt, setCartCnt] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const [itemList] = useState([
    {
      itemName: "Sushi",
      itemDescription: "Finest Fish and Veggies",
      cost: 22.99,
    },
    {
      itemName: "Schnitzel",
      itemDescription: "A German Speciality",
      cost: 16.5,
    },
    {
      itemName: "Barbecue Burger",
      itemDescription: "American, raw, maeaty",
      cost: 12.99,
    },
    {
      itemName: "Green Bowl",
      itemDescription: "Healthy...and Green...",
      cost: 18.29,
    },
  ]);

  const [cartList, setCartList] = useState([]);

  const handleCartList = (count, newItem, cost) => {
    if (count > 0 && count < 6) {
      const newCost = Number(count) * Number(cost) + Number(totalCost);
      setTotalCost(newCost);
      setCartList([
        ...cartList,
        { name: newItem, count: count, id: Math.random().toString() },
      ]);
      const newCnt = Number(cartCnt) + Number(count);
      setCartCnt(newCnt);
    } else {
      alert("Not allowed more than 5 items");
    }

    // console.log(cartList);
    // console.log(newItem);
  };
  console.log(cartList);

  console.log(cartCnt);

  const handleCartShow = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={showCart && "container"}>
      <UserContext.Provider
        value={{ cartList: cartList, handleCartList: handleCartList }}
      >
        <Header handleCartShow={handleCartShow} cartCnt={cartCnt} />
        <MealsSummary />
        <MealShow itemList={itemList} />
        <Modal>
          <Cart
            showCart={showCart}
            handleCartShow={handleCartShow}
            totalCost={totalCost}
          />
        </Modal>
      </UserContext.Provider>
    </div>
  );
}

export default App;
