import { MONTHS } from "../calendarInfo";
import nextSVG from "../../assets/next.svg";
import previousSVG from "../../assets/previous.svg";
import "./headerCalendar.css";
function HeaderCalendar({ year, month, setYear, setMonth }) {
  const monthName = MONTHS[month].name;
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  return (
    <>
      <header className="header">
        <button onClick={handlePreviousMonth} className="arrow">
          <img src={previousSVG} alt="<<" />
        </button>
        <h2>
          {monthName} {year}
        </h2>
        <button onClick={handleNextMonth} className="arrow">
          <img src={nextSVG} alt=">>" />
        </button>
      </header>
    </>
  );
}

export default HeaderCalendar;
