import "./MealShow.css";

const MealShow = ({ itemList }) => {
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
                        defaultValue="0"
                        style={{
                          width: "50px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
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
