import "./App.css";
import Header from "./components/Header/Header.jsx";
import MealsSummary from "./components/Header/Meals/MealSummary.jsx";
import MealShow from "./components/Header/Meals/MealShow.jsx";
import { useState } from "react";

function App() {
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

  return (
    <div>
      <Header />
      <MealsSummary />
      <MealShow itemList={itemList} />
    </div>
  );
}

export default App;
