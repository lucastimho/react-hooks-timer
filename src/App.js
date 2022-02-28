import { useEffect, useState } from "react";
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
useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(caculateTimeLeft());
  }, 1000);
  return () => clearTimeout(timer);
});
function App() {
  return <div></div>;
}

export default App;
