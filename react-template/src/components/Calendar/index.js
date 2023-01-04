import React from "react";
import "./styles.css";
import { DateRangePicker } from "rsuite";

const RangePicker = (values) => {
  const [selectedDates, setSelectedDates] = React.useState(null);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    console.log(dates);
  };

  return (
    <div>
      <DateRangePicker
        appearance="default"
        placeholder="Pick your dates"
        style={{ width: 230 }}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default RangePicker;
