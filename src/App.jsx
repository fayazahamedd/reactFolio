import { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={<DefaultLayout active={active} setActive={setActive} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
