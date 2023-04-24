import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import "../../assets/css/style2.css";

function Receitas() {


    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const [receita, setReceita] = useState();


    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao() {
        if (idUsuario === "") {
            window.location.href = "/login";
        }
    }
    verificarAutenticacao();



    // Constants para mes e ano que serão passadas na url
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear();



    // Requisição para buscar as receitas do usuario
    axios.get(`//localhost:8080/api/home/${idUsuario}/${mes}/${ano}`).then((response) => {
        console.log(response);
        setReceita(response.data.receita);
    });
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle">
                            <span className="material-symbols-outlined">menu</span>
                        </label>
                    </h2>
                    <div className="user-wrapper">
                        <div>
                            <small>Bem vindo,</small>
                            <h4>{nomeUsuario}</h4>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <div className="cards-receitas">
                        <div className="card-single-receita">
                            <div>
                                <span>Receita</span>
                                <h2>R${receita}</h2>
                            </div>
                            <span id="up" className="material-symbols-outlined">arrow_upward</span>
                        </div>
                        <div className="card-receita">
                            <div>
                                <span>Nova Receita</span> <br />
                                <h2 className="material-symbols-outlined">add</h2>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Receitas;