import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Páginas do site
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeDashboard from "./pages/Dashboards/Dashboard";
// CSS
import "./assets/css/style.css";
import "./assets/css/header.css";
import "./assets/css/style2.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/dashboard" element={<HomeDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;