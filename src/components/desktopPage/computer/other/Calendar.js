import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

let Calendar = () => {
  const dateNow = new Date();
  const firstNumberOfCurrentMonth = new Date(
    dateNow.getFullYear(),
    dateNow.getMonth(),
    1
  );

  const [selectedDate, setSelectedDate] = React.useState(
    firstNumberOfCurrentMonth
  );
  const firstNumberOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );

  const clickDate = (number) => {};

  let dayWeek = firstNumberOfMonth.getDay();
  if (dayWeek === 0) {
    dayWeek = 7;
  }

  let rows = [];
  let passingValue = 0;

  for (let i = 0; i < 6; i++) {
    let cells = [];
    let searchDay = 1;

    if (i === 0) {
      cells = [...Array(7)].map((item, index) => {
        if (index + 1 === dayWeek) {
          if (index === 6) {
            passingValue = 1;
          }
          return (
            <td
              id={`${
                dateNow.getFullYear() === firstNumberOfMonth.getFullYear() &&
                dateNow.getMonth() === firstNumberOfMonth.getMonth() &&
                dateNow.getDate() === 1
                  ? "today"
                  : ""
              }`}
              key={index}
              onClick={() => clickDate(searchDay)}
            >
              1
            </td>
          );
        } else {
          let searchDate;
          if (index + 1 < dayWeek) {
            searchDate = new Date(
              firstNumberOfMonth.getFullYear(),
              firstNumberOfMonth.getMonth(),
              firstNumberOfMonth.getDate() - (dayWeek - (index + 1))
            );
          } else {
            searchDate = new Date(
              firstNumberOfMonth.getFullYear(),
              firstNumberOfMonth.getMonth(),
              firstNumberOfMonth.getDate() + (index + 1 - dayWeek)
            );
          }
          searchDay = searchDate.getDate();
          if (index === 6) {
            passingValue = searchDay;
          }
          return (
            <td
              key={index}
              id={`${
                dateNow.getFullYear() === firstNumberOfMonth.getFullYear() &&
                dateNow.getMonth() === firstNumberOfMonth.getMonth() &&
                dateNow.getDate() === searchDay
                  ? "today"
                  : ""
              }`}
              className={`${
                searchDate.getMonth() !== firstNumberOfMonth.getMonth()
                  ? "anotherMonth"
                  : ""
              }`}
            >
              {searchDay}
            </td>
          );
        }
      });
    } else {
      cells = [...Array(7)].map((item, index) => {
        let searchDate = new Date(
          firstNumberOfMonth.getFullYear(),
          firstNumberOfMonth.getMonth(),
          ++passingValue
        );
        const searchDay = searchDate.getDate();
        return (
          <td
            key={index}
            id={`${
              dateNow.getFullYear() === firstNumberOfMonth.getFullYear() &&
              dateNow.getMonth() === searchDate.getMonth() &&
              dateNow.getDate() === searchDay
                ? "today"
                : ""
            }`}
            className={`${
              searchDate.getMonth() !== firstNumberOfMonth.getMonth()
                ? "anotherMonth"
                : ""
            }`}
          >
            {searchDay}
          </td>
        );
      });
    }

    let row = <tr key={i}>{cells}</tr>;

    rows.push(row);
  }

  const tHead = (
    <thead>
      <tr>
        {daysOfTheWeek.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );

  const tBody = <tbody>{rows}</tbody>;

  return (
    <div className="display_calendar">
      <div id="calendar_header">
        <div>
          {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </div>

        <div>
          <span
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() + 1,
                  selectedDate.getDate()
                )
              )
            }
          >
            <SlArrowUp id="sortUp" fill="#000000" />
          </span>
          {"  "}
          <span
            onClick={() =>
              setSelectedDate(
                new Date(
                  selectedDate.getFullYear(),
                  selectedDate.getMonth() - 1,
                  selectedDate.getDate()
                )
              )
            }
          >
            <SlArrowDown id="sortDown" fill="#000000" />
          </span>
        </div>
      </div>
      <table className="calendar_table">
        {tHead}
        {tBody}
      </table>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Calendar = React.memo(Calendar);

export default Calendar;
