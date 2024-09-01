import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { add, sub } from "./slice/update";
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store.jsx";


function App() {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.update.value);
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const handleOnClickAdd = () => {
    dispatch(add());
  };
  const handleOnClickSub = () => {
    dispatch(sub());
  };
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>A Very Basic Counter🔄️🚀🚀🔄️</h1>

      <h2 className="card">
        <button onClick={handleOnClickAdd}>Increase</button>
      </h2>

      <div>
        <font color="white">
          <h1>Count is : {value}</h1>
        </font>
      </div>

      <h2 className="card">
        <button onClick={handleOnClickSub}>Decrease</button>
      </h2>
    </>
  );
}

export default App;
