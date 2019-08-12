import React, { useState } from "react";
import FormikRegForm from "./Components/Form";
import DataDisplay from "./Components/DataDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <FormikRegForm data={data} setData={setData} />
      <div>
        {data.map((data, i) => (
          <DataDisplay key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
