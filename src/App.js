import { useState } from "react";
import "./styles.css";

function ParaColorChange() {
  //  let color = "red";
  //  color = "blue";

  // const isColorRed = true;
  // iscolorRed = false;
  const [isColorRed, setColorRed] = useState(false);
  const [isDisplay, setDisplay] = useState(true);

  function getColor() {
    if (isColorRed) {
      return { backgroundColor: "red" };
    }
    return {};
  }

  function ChangeHandler() {
    setColorRed(true);
  }
  // const isDisplay = true;
  // isDisplay= false;

  function getHide() {
    if (isDisplay) {
      return { display: "" };
    }
    return { display: "none" };
  }

  function hideHandler() {
    setDisplay(false);
  }

  return (
    <div>
      <div style={getHide()}>
        <p style={getColor()}>
          It began in the 1960s as a US-army-funded research project, then
          evolved into a public infrastructure in the 1980s with the support of
          many public universities and private companies. The various
          technologies that support the Internet have evolved over time, but the
          way it works hasn't changed that much: Internet is a way to connect
          computers all together and ensure that, whatever happens, they find a
          way to stay connected.
        </p>
      </div>
      <button onClick={ChangeHandler}> change color </button>
      <button onClick={hideHandler}> Hide </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ParaColorChange />
    </div>
  );
}
