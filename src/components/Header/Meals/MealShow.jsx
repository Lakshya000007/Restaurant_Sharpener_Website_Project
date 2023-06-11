import "./MealShow.css";

const MealShow = ({ itemList }) => {
  return (
    <>
      <center>
        <div className="item-center">
          {itemList.map((item) => {
            return (
              <>
                <div id="self" style={{ whiteSpace: "nowrap" }}>
                  <b>{item.itemName}</b>
                </div>
                <div id="self">
                  <div style={{ color: "grey", whiteSpace: "nowrap" }}>
                    {item.itemDescription}
                  </div>
                </div>
                <div id="self">
                  <b style={{ color: "red" }}>${item.cost}</b>
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
