import { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./containers";
import { HomePage, SessionPage, SeatPage, SuccessPage } from "./pages";

export type Fields = {
  movieImg: string;
  movie: string;
  session: string;
  sessionDay: string;
  seats: number[];
  cpf: string;
  name: string;
};
export const initialState = {
  movieImg: "",
  movie: "",
  session: "",
  sessionDay: "",
  seats: [],
  cpf: "",
  name: "",
};

function App() {
  const [fields, setFields] = useState<Fields>(initialState);
  const [hasFooter, setFooter] = useState(false);

  useLayoutEffect(() => {
    setFields((prev) => ({ ...prev, session: "", sessionDay: "" }));
  }, [fields.movie]);

  const handleFields = (field: any, value: any) => {
    if (field === "seats") {
      return setFields((prev) => ({
        ...prev,
        [field]: [...prev.seats, value],
      }));
    }
    return setFields((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <BrowserRouter>
      <BaseLayout hasFooter={hasFooter} fields={fields}>
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
          <Route
            path="/sucesso"
            element={<SuccessPage fields={fields} setFooter={setFooter} />}
          />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
