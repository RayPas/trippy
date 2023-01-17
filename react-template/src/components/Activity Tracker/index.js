import React, { useState } from 'react';

const ActivityTracker = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the inputValue
    console.log(inputValue);
    // Clear the input field
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ActivityTracker;
