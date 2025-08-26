// Dom variables
let monthNameEl = document.getElementById("month-name");
let dayNameEl = document.getElementById("day-name");
let dayNumEl = document.getElementById("day-number");
let yearEl = document.getElementById("year");
let calendarContainer = document.querySelector(".calendar-container");

const date = new Date();
const today = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

function renderCalendar() {
  calendarContainer.innerHTML = "";
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayIndex = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  weekDays.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.classList.add("week-days");
    dayElement.innerText = day;
    calendarContainer.appendChild(dayElement);
  });

  // Create empty days for the beginning of the month
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("day", "empty");
    calendarContainer.appendChild(emptyDay);
  }

  // Create days for the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.innerText = i;

    if (
      i === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    calendarContainer.appendChild(dayElement);
  }
}

renderCalendar();
