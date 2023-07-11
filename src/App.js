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
  let date = Date().slice(0, 15);
  let dataSec = Math.round(new Date().getTime() / 1000);

  return (
    <>
      <div>
        <button onClick={stepMinus}>-</button>Step: {step}
        <button onClick={stepPlus}>+</button>
      </div>
      <div>
        <button>-</button>Count: {count}
        <button>+</button>
      </div>
      <br />
      <p>
        Today is {date} = {dataSec}
      </p>
    </>
  );
}
