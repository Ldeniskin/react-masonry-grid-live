import React, {useEffect, useState} from 'react';
import './App.css';
import {MasonryItem} from "./types";
import {Masonry} from "./Masonry";

function App() {
  const [data, setData] = useState<MasonryItem[]>([])
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6303bf5ea1610e63860a5cf7?meta=false")
      .then((res) => res.json())
      .then((json) => setData(json.slice(0, 20)))
  })
  return (
    <div className="App">
      <Masonry items={data} />
    </div>
  );
}

export default App;
