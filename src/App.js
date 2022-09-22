import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTabs from "./Tabpanel";

const App = () => (
  <BrowserRouter basename="process.env.PUBLIC_URL">
    <Routes>
      <Route exact path="/" element={<BasicTabs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
