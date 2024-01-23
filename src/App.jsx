import { useState } from "react";
import "./App.css";

function App() {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoverStar, setHovertar] = useState(0);

  return (
    <div className="App">
      Star Rating
      <div className="starContainer">
        {[...Array(5)].map((val, idx) => {
          return (
            <span
              key={idx}
              className={`${idx + 1 <= selectedStar ? "selected" : ""} ${
                idx + 1 <= hoverStar ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedStar(idx + 1);
              }}
              onMouseOver={() => {
                setHovertar(idx + 1);
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p>Total Count : {selectedStar}</p>
      <p>Hover Count : {hoverStar}</p>
    </div>
  );
}

export default App;
