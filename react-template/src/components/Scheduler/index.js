import React, { useState } from "react";

const Scheduler = () => {
  const [data, setData] = useState(Array(49).fill(Array(8).fill("")));

  const handleCellChange = (e, rowIndex, colIndex) => {
    //Creates an array of all of the data change
    const updatedData = [...data];
    //Changes the value at row and col index
    updatedData[rowIndex][colIndex] = e.target.value;
    console.log(rowIndex, colIndex, updatedData);
    //Changes the data
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell}
                  onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scheduler;
