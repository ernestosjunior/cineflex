import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./containers";
import { HomePage, SessionPage, SeatPage } from "./pages";

export type Fields = {
  movie: string;
  session: string;
  seats: number[];
  cpf: string;
  name: string;
};

function App() {
  const [fields, setFields] = useState<Fields>({
    movie: "",
    session: "",
    seats: [],
    cpf: "",
    name: "",
  });
  const [hasFooter, setFooter] = useState(false);

  const handleFields = (field: any, value: any) => {
    if (field === "seats") {
      return setFields((prev) => ({
        ...prev,
        [field]: [...prev.seats, value],
      }));
    }
    return setFields((prev) => ({ ...prev, [field]: value }));
  };
  console.log(fields);
  return (
    <BrowserRouter>
      <BaseLayout hasFooter={hasFooter}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage handleFields={handleFields} setFooter={setFooter} />
            }
          />
          <Route
            path="/sessoes/:idMovie"
            element={
              <SessionPage setFooter={setFooter} handleFields={handleFields} />
            }
          />
          <Route
            path="/assentos/:idSession"
            element={
              <SeatPage
                fields={fields}
                handleFields={handleFields}
                setFooter={setFooter}
              />
            }
          />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
