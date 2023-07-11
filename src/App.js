import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const stepPlus = () => setStep((s) => s + 1);
  const stepMinus = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const countPlus = () => setCount((c) => c + step);
  const countMinus = () => setCount((c) => c - step);
  const days = count;
  const daysSec = Math.trunc(count * 86400);
  console.log(daysSec);

  let date = Date().slice(0, 15);
  let dateSec = Math.round(new Date().getTime() / 1000);

  console.log(dateSec);
  const dateFinal = new Date((dateSec + daysSec) * 1000)
    .toDateString()
    .slice(0, 15);
  console.log(dateFinal);
  return (
    <>
      <div>
        <button onClick={stepMinus}>-</button>Step: {step}
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button onClick={countMinus}>-</button>Count: {count}
        <button onClick={countPlus}>+</button>
      </div>
      <br />
      <p>
        {count > 0 && `${days} days from today is ${dateFinal}`}
        {count === 0 && `Today is ${date}`}
        {count < 0 && `${days} days ago was ${dateFinal}`}
      </p>
    </>
  );
}
