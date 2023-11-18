import React, { useState } from "react";

const DateFilter = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <input
        type="radio"
        id="day"
        name="dateFilter"
        value="day"
        checked={selectedOption === "day"}
        onChange={handleOptionChange}
      />
      <label htmlFor="day"> Posted today</label>
      <br />
      <input
        type="radio"
        id="week"
        name="dateFilter"
        value="week"
        checked={selectedOption === "week"}
        onChange={handleOptionChange}
      />
      <label htmlFor="week"> Posted this week</label>
      <br />
      <input
        type="radio"
        id="month"
        name="dateFilter"
        value="month"
        checked={selectedOption === "month"}
        onChange={handleOptionChange}
      />
      <label htmlFor="month"> Posted this month</label>
      <br />
    </>
  );
};

export default DateFilter;
