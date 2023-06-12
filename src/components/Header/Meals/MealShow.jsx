import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import "./MealShow.css";

const MealShow = ({ itemList }) => {
  const cartList = useContext(UserContext);
  const [cnt, setCnt] = useState(0);

  console.log(itemList);

  const handleCnt = (cnt, name) => {
    setCnt(cnt);
    console.log(cnt);
  };

  const handleAdd = (cnt, name, cost) => {
    setCnt(cnt);

    cartList.handleCartList(cnt, name, cost);
    setCnt(0);
    console.log(name);
    console.log(cost);
  };

  return (
    <>
      <center style={{ fontSize: "18px" }}>
        <div className="item-center">
          {itemList.map((item) => {
            return (
              <>
                <div className="item">
                  <div className="left-side">
                    <div id="self" style={{ whiteSpace: "nowrap" }}>
                      <b>{item.itemName}</b>
                    </div>
                    <div id="self">
                      <div style={{ color: "grey", whiteSpace: "nowrap" }}>
                        {item.itemDescription}
                      </div>
                      <div id="self">
                        <b style={{ color: "red" }}>${item.cost}</b>
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="amount">
                      <label htmlFor="amt">Amount</label>
                      <input
                        type="number"
                        id="amt"
                        min="1"
                        max="5"
                        // value={cnt}
                        style={{
                          width: "50px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
                        onChange={(e) =>
                          handleCnt(e.target.value, item.itemName)
                        }
                      />
                    </div>
                    <div className="add">
                      <button
                        style={{
                          color: "white",
                          marginLeft: "50px",
                          width: "75px",
                          padding: "2px",
                          marginBottom: "5px",
                        }}
                        onClick={() => handleAdd(cnt, item.itemName, item.cost)}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </center>
    </>
  );
};

export default MealShow;
