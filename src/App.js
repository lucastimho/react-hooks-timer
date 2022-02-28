import React, { useEffect, useState } from "react";
import "./App.css";
const caculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`10/01/${year}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor(((difference / 1000) * 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};
const [timeLeft, setTimeLeft] = useState(caculateTimeLeft());
const [year] = useState(new Date().getFullYear());
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(caculateTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});
const timerComponents = [];
Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return (
      <div>
        <h1>Hacktoberfest {year} Countdown</h1>
        <h2>With React Hooks!</h2>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  }
  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});
function App() {
  return <div></div>;
}

export default App;
