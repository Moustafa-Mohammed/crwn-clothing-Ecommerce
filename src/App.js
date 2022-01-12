import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shoppage/ShopPage.jsx";
import SignInAndSignUp from "./pages/signIn-and-signUp/SignInAndSignUp";

import "./App.css";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signIn" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
