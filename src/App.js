import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import { AuthContextProvider } from "./context/authContext";
import { DroneContextProvider } from "./context/scaledroneContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <DroneContextProvider>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route exact path="/RegisterPage" element={<RegisterPage />} />
              <Route exact path="/Home" element={<Home />} />
            </Routes>
          </Router>
        </AuthContextProvider>
      </DroneContextProvider>
    </>
  );
}

export default App;
