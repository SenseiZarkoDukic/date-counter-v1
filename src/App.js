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

  let date = Date().slice(0, 15);
  let dataSec = Math.round(new Date().getTime() / 1000);

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
        Today is {date} = {dataSec}
      </p>
    </>
  );
}
