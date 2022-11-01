/* need to add ReactRouterDOM */
/* need to add firebase Auth */
/* need to connect to database */
/* need to add reactContext */

import LoginPage from "./pages/LoginPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/RegisterPage" element={<RegisterPage />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
