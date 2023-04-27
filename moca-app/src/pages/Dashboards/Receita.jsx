import { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import "../../assets/css/style2.css";
import PopUpCadastro from "../../components/PopupCadastro";
import Meses from "../../components/PaginacaoMeses";
import { useEffect } from "react";
import LinhaTabela from "../../components/Tabela";
import { FaSpinner } from 'react-icons/fa';
function Receitas() {

    const [loading, setLoading] = useState(false);
    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const [receita, setReceita] = useState();
    const [mesAtual, setMesAtual] = useState(new Date().getMonth());
    const [showModal, setShowModal] = useState(false);
    const [listaReceitas, setListaReceitas] = useState([]);
    const data = new Date();
    const ano = data.getFullYear();


    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao() {
        if (idUsuario === "") {
            window.location.href = "/login";
        }
    }
    verificarAutenticacao();

    useEffect(() => {
        // verificarAutenticacao();
        requisicao(mesAtual);
        requisicaoListaReceita(mesAtual);
        setLoading(true);
    }, []);


    function requisicao(props) {
        // Constants para mes e ano que serão passadas na url
        // Requisição para buscar as receitas do usuario
        axios.get(`//localhost:8080/api/home/${idUsuario}/${props + 1}/${ano}`).then((response) => {
            console.log(response);
            setReceita(response.data.receita);
            setLoading(true);
        });
    }

    function requisicaoListaReceita(props) {

        axios.get(`//localhost:8080/api/receitas/${idUsuario}/${props + 1}/${ano}`).then((response) => {
            setListaReceitas([...response.data]);
            console.log(response.data)
        });

    }

    // Extrato por mes 
    const atualizarMesSelecionado = (novoMes) => {
        setMesAtual(novoMes);
        requisicao(novoMes);
        requisicaoListaReceita(novoMes);
    }

    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle">
                            {/* <span className="material-symbols-outlined">menu</span> */}
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
                    <div className="container-cards">
                        <div className="cards-receitas">
                            <div className="card-single-receita">
                                <div>
                                    <span>Receita</span>
                                    <h2>R${receita === undefined ? <FaSpinner className="spinner" /> : receita}</h2>

                                </div>
                                <span id="up" className="material-symbols-outlined">arrow_upward</span>
                            </div>
                            <div className="card-receita" onClick={() => { setShowModal(true) }}>
                                <div>
                                    <span>Nova Receita</span> <br />
                                    <h2 className="material-symbols-outlined">add</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Meses setMesAtual={atualizarMesSelecionado} />
                    <div className="table-container">
                        <h2 className="heading">
                        </h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Situação</th>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Categoria</th>
                                    <th>Valor</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            {listaReceitas.map((receita) => {
                                return (
                                    <LinhaTabela receita={receita} key={receita.idReceita} />
                                )
                            })}
                        </table>
                    </div>
                </main>
            </div>
            <PopUpCadastro isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }}></PopUpCadastro>
        </div>
    );
}

export default Receitas;