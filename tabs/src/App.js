import React, { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const [tabs, setTabs] = useState([
    { Tab: "Tab 1", Content: "Content for tab 1" },
    { Tab: "Tab 2", Content: "Content for tab 2" },
    { Tab: "Tab 3", Content: "Content for tab 3" },
  ]);

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
