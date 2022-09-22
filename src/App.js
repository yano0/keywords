import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicTabs from "./Tabpanel";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/reponame" element={<BasicTabs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
