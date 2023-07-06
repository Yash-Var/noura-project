import React from "react";
import Home from "./Home";
import Water from "./Water";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const Routerr = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Water />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routerr;
