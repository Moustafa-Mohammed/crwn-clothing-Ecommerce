import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shoppage/ShopPage.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
