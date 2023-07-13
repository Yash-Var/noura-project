import React from "react";
import Home from "./Home";
import Water from "./Water";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Water2 from "./Water2";
import { Water3 } from "./Water3";
const Routerr = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<Water />} />
          <Route path="/water2" element={<Water2 />} />
          <Route path="/water3" element={<Water3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routerr;
