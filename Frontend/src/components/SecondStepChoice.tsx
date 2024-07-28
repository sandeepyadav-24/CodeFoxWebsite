import React from "react";

const SecondStepChoice = () => {
  const handleClick = () => {
    alert("You just wanted to add more Rounds");
  };
  return (
    <div>
      <div>
        <h1>Round 1</h1>
        <h1>Short Listing Round</h1>
        <h1>Description of the Round</h1>
      </div>
      <div>
        <button
          className="border-dashed border-2 border-black"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SecondStepChoice;
