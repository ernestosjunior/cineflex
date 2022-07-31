import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./containers";
import { HomePage, SessionPage } from "./pages";

function App() {
  const [hasFooter, setFooter] = useState(true);

  return (
    <BaseLayout hasFooter={hasFooter}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setFooter={setFooter} />} />
          <Route
            path="/sessoes/:idFilme"
            element={<SessionPage setFooter={setFooter} />}
          />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
