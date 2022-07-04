import Accueil from "./pages/Accueil";
import ItemCity from "./pages/ItemCity";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Accueil" />} />
        <Route exact path="/Accueil" element={<Accueil />} />

        <Route path="*" element={<Navigate to="/" />} />
        <Route exact path="/ItemCity/:enteredSearch" element={<ItemCity />} />
      </Routes>
    </div>
  );
}

export default App;
