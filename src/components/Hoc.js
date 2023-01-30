import React, { useState } from "react";

const Hoc = (OriginalComp) => {
  function NewComponent() {
    const [count, setCount] = useState(1000);
    const handleDecrease = () => {
      if (count <= 1000) {
        alert("Minimum amt is 1000rs");
      } else {
        setCount(count - 1000);
      }
    };
    const handleIncrease = () => {
      setCount(count + 1000);
    };
    return (
      <OriginalComp
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        count={count}
      />
    );
  }
  return NewComponent;
};

export default Hoc;
