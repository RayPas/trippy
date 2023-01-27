import React, { useState } from "react";

const ActivityTracker = () => {
  const [inputValue, setInputValue] = useState("");
  const [activites, setActivites] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the inputValue
    setActivites([...activites, inputValue]);
    // console.log(inputValue);
    // console.log(activites)
    // Clear the input field
    setInputValue("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <table>
          <ul>
            {activites.map((activity) => {
              return <li>{activity}</li>;
            })}
          </ul>
        </table>
      </div>
    </div>
  );
};

export default ActivityTracker;
