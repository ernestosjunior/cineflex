import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./containers";

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
