import React from "react";
import "./styles.css";
import { DateRangePicker } from "rsuite";
import ActivityTracker from "../Activity Tracker";

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
      <ActivityTracker selectedDates={selectedDates} />
    </div>
  );
};

export default RangePicker;
