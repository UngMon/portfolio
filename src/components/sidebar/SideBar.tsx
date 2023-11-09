import { useState } from "react";
import "./SideBar.scss";

const SideBar = () => {
  const [number, setNumber] = useState<number>(0);

  return (
    <nav className="side-bar">
      <ul>
        <li className="bar-lis">
          <button
            className={number === 1 ? "bar-clicked" : ""}
            onClick={() => setNumber(1)}
          ></button>
          <span id="bar-1">Intro</span>
        </li>
        <li className="bar-lis">
          <button
            className={number === 2 ? "bar-clicked" : ""}
            onClick={() => setNumber(2)}
          ></button>
          <span id="bar-2">Me</span>
        </li>
        <li className="bar-lis">
          <button
            className={number === 3 ? "bar-clicked" : ""}
            onClick={() => setNumber(3)}
          ></button>
          <span id="bar-3">Skils</span>
        </li>
        <li className="bar-lis">
          <button
            className={number === 4 ? "bar-clicked" : ""}
            onClick={() => setNumber(4)}
          ></button>
          <span id="bar-4">Projects</span>
        </li>
        <li className="bar-lis">
          <button
            className={number === 5 ? "bar-clicked" : ""}
            onClick={() => setNumber(5)}
          ></button>
          <span id="bar-5">Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
