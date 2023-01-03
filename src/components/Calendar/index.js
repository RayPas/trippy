import React from "react";
import "./styles.css";
import { DateRangePicker } from "rsuite";

const RangePicker = () => (
  <>
    <DateRangePicker
      appearance="default"
      placeholder="Pick your dates"
      style={{ width: 230 }}
    />
  </>
);

export default RangePicker;
