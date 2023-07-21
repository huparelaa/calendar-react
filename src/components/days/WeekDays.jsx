import React from "react";
import "./weekDays.css";
function WeekDays({ today, year, month }) {
  const numericToday = today.getDate();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return (
    <>
      <ul className="days">
        {Array(firstDayOfMonth.getDay())
          .fill(null)
          .map((_, index) => (
            <li key={`empty-${index}`} className="empty">
              {""}
            </li>
          ))}
        {Array(lastDayOfMonth.getDate())
          .fill(null)
          .map((_, index) => {
            const day = index + 1;
            const isToday =
              day === numericToday &&
              month === today.getMonth() &&
              year === today.getFullYear();
            return (
              <li key={day} className={isToday ? "today" : "default-day"}>
                {day}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default WeekDays;
