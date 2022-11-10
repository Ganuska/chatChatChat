/* need to add ReactRouterDOM */
/* need to add firebase Auth */
/* need to connect to database */
/* need to add reactContext */

import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/RegisterPage" element={<RegisterPage />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
