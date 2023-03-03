"use strict";

// COUNTDOWN CLOCK
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// Will update with the current year as time goes on
const currentYear = new Date().getFullYear();

const marchFifteen = new Date(`March 15 ${currentYear} 00:00:00`);

// Updating the CountdownTime
function updateCountdown() {
  const currentTime = new Date();
  const difference = marchFifteen - currentTime;

  // Calculating the days
  const day = Math.floor(difference / 1000 / 60 / 60 / 24);
  // Calculating the hours
  const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
  // Calculating the minutes
  const minute = Math.floor(difference / 1000 / 60) % 60;
  // Calculating the seconds
  const second = Math.floor(difference / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}
setInterval(updateCountdown, 1000);

// POPUP/MODAL
const popup = document.getElementById("popup");

// Showing the Popup
function showPopUp() {
  popup.style.display = "block";
}
setTimeout(showPopUp, 10000);

// Hiding the Popup
function hidePopUp() {
  popup.style.display = "none";
}
