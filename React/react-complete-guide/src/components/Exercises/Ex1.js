import React, { useState } from "react";

import './Ex1.css';

// don't change the Component name "App"
export default function App() {
  const [box, setBox] = useState("");

  const procesedHandler = () => {
    setBox("");
  };

  let warning = (
    <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={procesedHandler}>Proceed</button>
    </div>
  );

  const deleteHandler = () => {
    setBox(warning);
  };

  return (
    <div>
      {box}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
