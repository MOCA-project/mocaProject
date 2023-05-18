import { useEffect, useState } from "react";
import PopUpCadastro from "../../components/PopupCadastro";
import Meses from "../../components/PaginacaoMeses";
import Sidebar from "../../components/Sidebar";
import LinhaTabela from "../../components/Tabela";
import axios from "axios";
import { FaSpinner } from 'react-icons/fa';
import api from "../../api";

function Despesas() {
    const [loading, setLoading] = useState(false);
    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");
    const [ativo, setAtivo] = useState(true);
    const [despesa, setDespesa] = useState();
    const [mesAtual, setMesAtual] = useState(new Date().getMonth());
    const [listaDespesa, setListaDespesa] = useState([]);
    const data = new Date();
    const ano = data.getFullYear();

    // Validar se o usuario efetuou login antes de acessar a dashboard
    // function verificarAutenticacao() {
    //     if (idUsuario === "") {
    //         window.location.href = "/login";
    //     }
    // }
    useEffect(() => {
        // verificarAutenticacao();
        requisicao(mesAtual);
        requisicaoListaDespesa(mesAtual);
        setLoading(true);
    }, []);



    const [showModal, setShowModal] = useState(false);


    // Requisição do endpoint para mostrar as informações do usuário
    function requisicao(props) {
        api.get(`home/${idUsuario}/${props + 1}/${ano}`).then((response) => {
            console.log(response);
            setDespesa(response.data.despesas);
            setLoading(false);
        });
        // console.log(props);
    }

    function requisicaoListaDespesa(props) {

        api.get(`despesas/${idUsuario}/${props + 1}/${ano}`).then((response) => {
            setListaDespesa([...response.data]);
            console.log(response.data)
        });

    }

    // Extrato por mes 
    const atualizarMesSelecionado = (novoMes) => {
        setMesAtual(novoMes);
        requisicao(novoMes);
        requisicaoListaDespesa(novoMes);
    }

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            {ativo && <Sidebar />}
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle" onClick={() => ativo ? setAtivo(false) : setAtivo(true)}>
                            {/* <span className="material-symbols-outlined">menu</span> */}
                        </label>
                    </h2>
                    <div className="user-wrapper">
                        <div>
                            <small>Olá,</small>
                            <h4>{nomeUsuario}</h4>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="container-cards">
                        <div className="cards-despesas">
                            <div className="card-single-despesa">
                                <div>
                                    <span>Despesa</span>
                                    <h2>R$ {despesa === undefined ? <FaSpinner className="spinner" /> : despesa.toFixed(2).replace('.', ',')}</h2>

                                </div>
                                <span id="down" className="material-symbols-outlined">
                                    arrow_downward
                                </span>
                            </div>
                            <div className="card-despesa" onClick={() => { setShowModal(true) }}>
                                <div>
                                    <span>Nova Despesa</span> <br />
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
                            {listaDespesa.map((despesa) => {
                                return (
                                    <LinhaTabela despesa={despesa} key={despesa.idDespesa} idDespesa={despesa} />
                                )
                            })}
                        </table>
                    </div>
                </main>
            </div>
            <PopUpCadastro isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }} />
        </div>
    );
}

export default Despesas;