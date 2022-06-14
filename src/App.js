import './App.css';

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {StarRating({})}
    </div>
  );
}

const Star = ({ selected, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
)


const createArray = x => [...Array(x)];

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={i < selectedStars} onSelect={() => setSelectedStars(i+1)} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default App;
