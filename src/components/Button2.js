import React from "react";
import Hoc from "./Hoc";

const Button2 = ({ handleDecrease, handleIncrease, count }) => {
  return (
    <div>
      <span>John Ready to Give Rs {count}/- </span>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default Hoc(Button2);
