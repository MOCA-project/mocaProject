import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Páginas do site
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeDashboard from "./pages/Dashboards/Dashboard";
import Extrato from "./pages/Dashboards/Extrato";
// CSS
import "./assets/css/style.css";
import "./assets/css/header.css";
import "./assets/css/style2.css";
import "./assets/css/popup.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/dashboard" element={<HomeDashboard/>}/>
        <Route path="/dashboard/extrato" element={<Extrato/>}/>
      </Routes>
    </Router>
  );
}

export default App;