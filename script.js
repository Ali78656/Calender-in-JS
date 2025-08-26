// Dom variables
let monthNameEl = document.getElementById("month-name");
let dayNameEl = document.getElementById("day-name");
let dayNumEl = document.getElementById("day-number");
let yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();