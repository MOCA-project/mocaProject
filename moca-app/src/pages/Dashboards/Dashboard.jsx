import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import "../../assets/css/style2.css";

function HomeDashboard() {
    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    // useStates para salvar os dados e exibir na tela
    const [saldo, setSaldo] = useState();
    const [receita, setReceita] = useState();
    const [despesa, setDespesa] = useState();
    const [saldoCartao, setSaldoCartao] = useState();

    // Constants para mes e ano que serão passadas na url
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    axios.get(`//localhost:8080/api/home/${idUsuario}/${mes}/${ano}`).then((response) => {
        console.log(response);
        setSaldo(response.data.saldo);
        setReceita(response.data.receita);
        setDespesa(response.data.despesas);
        setSaldoCartao(response.data.despesaCartao);
    });
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: 'pointer' }} htmlFor="nav-toggle">
                            <span className="material-symbols-outlined">menu</span>
                        </label>
                    </h2>

                    <div className="search-wrapper">
                        <span className="material-symbols-outlined">playlist_add_check</span>
                        <input type="text" />
                    </div>

                    <div className="user-wrapper">
                        <div>
                            <small>Bem vindo,</small>
                            <h4>{nomeUsuario}</h4>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <span>Saldo</span>
                                <h2>R${saldo}</h2>
                            </div>
                            <div>
                                <span id="money" className="material-symbols-outlined">attach_money</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Receita</span>
                                <h2>R${receita}</h2>
                            </div>
                            <span id="up" className="material-symbols-outlined">arrow_upward</span>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Despesa</span>
                                <h2>R${despesa}</h2>
                            </div>
                            <div>
                                <span id="down" className="material-symbols-outlined">arrow_downward</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Cartões</span>
                                <h2>R${saldoCartao}</h2>
                            </div>
                            <div>
                                <span id="cartao" className="material-symbols-outlined">credit_card</span>
                            </div>
                        </div>
                    </div>

                    <div className="cards-dash">
                        <div className="card-pos"></div>
                        <div className="card-pos"><h2>Receitas por categorias</h2></div>
                        <div className="card-pos"><h2>Cartões</h2></div>
                        <div className="card-pos"><h2>Despesa por categoria</h2></div>
                        <div className="card-pos"><h2>Porquinho</h2></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomeDashboard;