import moment from "moment/moment";
import React from "react";
import "./calendar.css";

const Calendar = ({ date, seNewtDate }) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const getDaysInMonth = () => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthInDays = getDaysInMonth();

  const getCellStyle = (currentDate) => {
    if (date.getDate() === currentDate) {
      return {
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#0a181d",
      };
    } else {
      return {};
    }
  };

  const getEmptyDaysInMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  return (
    <div className="main">
      <div className="month-year">{moment(date).format("MMMM YYYY")}</div>
      <div className="day-container">
        {daysOfWeek.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="month-days-container">
        {Array.from({
          length: getEmptyDaysInMonth(),
        }).map((val, index) => (
          <div key={index} style={{ height: "30px" }}></div>
        ))}
        {Array.from({ length: monthInDays }).map((val, index) => (
          <div
            key={index}
            style={{
              ...getCellStyle(index + 1),
            }}
            className="month-days"
            onClick={() => {
              let newDate = `${year}-${month + 1}-${index + 1}`;
              seNewtDate(new Date(newDate));
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
