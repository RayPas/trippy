import React from "react";
import "./styles.css";
import { DateRangePicker } from "rsuite";

class RangePicker extends React.Component {
  state = {
    selectedDates: null,
  };

  handleDateChange = (dates) => {
    this.setState({ selectedDates: dates });
  };

  render() {
    return (
      <div>
        <DateRangePicker
          appearance="default"
          placeholder="Pick your dates"
          style={{ width: 230 }}
          onChange={this.handleDateChange}
        />
      </div>
    );
  }
}

export default RangePicker
