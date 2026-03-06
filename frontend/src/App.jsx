import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
=======
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
>>>>>>> e2c6b60c1cb06b18ab33f3cf3f668e607157e30d

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e2c6b60c1cb06b18ab33f3cf3f668e607157e30d
