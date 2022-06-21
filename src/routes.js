import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Registro from "./pages/Registro";

export const UserContext = React.createContext();

export default function AppRouter() {
  const [characterList, setCharacterList] = useState();

  return (
    <UserContext.Provider value={[characterList, setCharacterList]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Registro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
