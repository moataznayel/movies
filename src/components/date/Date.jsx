import React from "react";
import "./date.css";
const Date = ({ data }) => {
  let date = data.split("-");
  const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="Date">
      <span>
        {monthNames[parseInt(date[1])]} {date[2]},{date[0]}
      </span>
    </div>
  );
};

export default Date;
