import { Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Bienvenida from "./pages/Bienvenida";

function App() {
  const location = useLocation();

  const email = location.state?.email || "";

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/bienvenida"
        element={<Bienvenida email={email} />}
      />
    </Routes>
  );
}

export default App;