import "./App.css";
import Header from "./components/Header/Header.jsx";
import MealsSummary from "./components/Header/Meals/MealSummary.jsx";
import MealShow from "./components/Header/Meals/MealShow.jsx";
import { useState } from "react";
import Cart from "./components/Header/Cart/Cart";
import Modal from "./components/Header/Modal/Modal";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [itemList, setItemList] = useState([
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

  const handleCartShow = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={showCart && "container"}>
      <Header handleCartShow={handleCartShow} />
      <MealsSummary />
      <MealShow itemList={itemList} />
      <Modal>
        <Cart showCart={showCart} handleCartShow={handleCartShow} />
      </Modal>
    </div>
  );
}

export default App;
