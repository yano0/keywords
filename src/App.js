import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTabs from "./Tabpanel";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/keywords/" element={<BasicTabs />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
