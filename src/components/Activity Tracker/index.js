import React, { useState } from "react";
import Scheduler from "../Scheduler/index";

const ActivityTracker = (selectedDates) => {
  const [inputValue, setInputValue] = useState("");
  const [activites, setActivites] = useState([]);
  console.log(selectedDates);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the inputValue
    setActivites([...activites, inputValue]);
    // console.log(inputValue);
    // console.log(activites)
    // Clear the input field
    setInputValue("");
    // console.log(activites);
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
      <Scheduler activites={activites} selectedDates={selectedDates} />
    </div>
  );
};

export default ActivityTracker;
