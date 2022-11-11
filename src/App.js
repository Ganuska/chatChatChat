/* need to add ReactRouterDOM */
/* need to add firebase Auth */
/* need to connect to database */
/* need to add reactContext */

// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
<<<<<<< Updated upstream
function App() {
  return (
    <>
      <Home />
=======
import RegisterPage from "./pages/RegisterPage";
import { AuthContextProvider } from "./context/authContext";
import { DroneContextProvider } from "./context/scaledroneContext";
function App() {
  return (
    <>
      <DroneContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/RegisterPage" element={<RegisterPage />} />
            <Route exact path="/Home" element={<Home />} />
          </Routes>
        </AuthContextProvider>
      </DroneContextProvider>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
