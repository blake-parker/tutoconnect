import React, { useEffect, useState } from "react";
import Hello from "./Components/TestComponents/Hello";
import "./App.css";
import db from "./Components/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Text(props) {
  return <h1 color={props.color}>{props.text}</h1>;
}
function App() {
  const [colors, setColors] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <>
      <Hello />

      {colors.map((color) => (
        <h1 key={color.id} style={{ color: color.value }}>
          {color.name}
        </h1>
      ))}
    </>
  );
}

export default App;
