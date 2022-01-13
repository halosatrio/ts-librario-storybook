import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/detailsPage";
import UserGuidePage from "./pages/userGuidePage";
import KatalogPage from "./pages/katalogPage";
import CheckoutPage from "./pages/checkoutPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

// import "./assets/scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={LandingPage}></Route>
        <Route path="/books/:id" element={DetailsPage}></Route>
        <Route path="/catalogue" element={KatalogPage}></Route>
        <Route path="/user-guide" element={UserGuidePage}></Route>
        <Route path="/checkout/:id" element={CheckoutPage}></Route>
        <Route path="/login" element={LoginPage}></Route>
        <Route path="/register" element={RegisterPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
