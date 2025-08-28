import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("lightblue");
  const arr = [
    "lightgreen","Crimson","cornflowerblue","silver","lavender","orange","pink","brown","gold","hotpink","lightskyblue","lightblue","black","gray","lightcoral","lightcyan","lightgoldenrodyellow","purple","violet"
  ];
  return (
    <div
      className=" w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {arr.map((arr) => (
            <div>
              <button
                className="outline-none px-3 py-2 rounded-full text-black text-shadow-xs shadow-sm font-medium border-2 cursor-pointer border-black"
                onClick={() => setColor(arr)}
                style={{ backgroundColor: arr }}
              >
                {arr}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// this is lengthy code of javascript only for demonstration purposes

{
  /* <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" onClick={() => setColor("green")}
          style={{ backgroundColor: "green" }}>Green</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" onClick={() => setColor("Crimson")}
          style={{ backgroundColor: "Crimson" }}>Crimson</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("cornflowerblue")}
          style={{ backgroundColor: "cornflowerblue" }}>cornflowerblue</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("silver")}
          style={{ backgroundColor: "silver" }}>silver</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("lavender")}
          style={{ backgroundColor: "lavender" }}>lavender</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange" }}>Orange</button>
          <button className="outline-none px-3 py-1 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("pink")}
          style={{ backgroundColor: "pink" }}>Pink</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("brown")}
          style={{ backgroundColor: "brown" }}>Brown</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("gold")}
          style={{ backgroundColor: "gold" }}>Gold</button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-sm font-medium border-2 cursor-pointer border-black" 
          onClick={() => setColor("hotpink")}
          style={{ backgroundColor: "hotpink" }}>Hotpink</button> */
}
