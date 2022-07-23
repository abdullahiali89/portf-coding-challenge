import React from "react";

function DateFilter({
  startDate,
  endDate,
  handleEndDateChange,
  handleStartDateChange,
}) {
  return (
    <div>
      <h3>First brew Date</h3>
      <div>
        <label htmlFor="start">Start date:</label>
        <input
          type="month"
          name="startDate"
          id="start"
          value={startDate}
          onChange={(e) => {
            handleStartDateChange(e);
          }}
        />
        <label htmlFor="end">End Date:</label>
        <input
          type="month"
          name="endDate"
          id="end"
          value={endDate}
          onChange={(e) => {
            handleEndDateChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default DateFilter;
