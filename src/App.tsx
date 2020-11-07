import React from "react";

import { Cards, Categories, Header, Campaigns } from "./display/components";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Cards />
      <Campaigns />
      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default App;
