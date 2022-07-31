import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./containers";
import { HomePage } from "./pages";

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:idFilme" />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
