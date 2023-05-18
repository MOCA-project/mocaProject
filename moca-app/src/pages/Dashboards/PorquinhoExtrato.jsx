import { FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useParams } from "react-router";
import api from "../../api.js";
import { useEffect } from "react";
import { useState } from "react";
import PopUpValorPorquinho from "../../components/PopUpValorPorquinho";

function PorquinhoExtrato() {

    // Atributos
    const idUsuario = localStorage.getItem("id");
    const nomeUsuario = localStorage.getItem("nome");
    const { idPorquinho } = useParams();
    const [dadosPorquinho, setDadosPorquinho] = useState([]);
    const [porcentagem, setPorcentagem] = useState();
    const [showModal, setShowModal] = useState(false);
    const [opcao, setOpcao] = useState('');

    function voltar() {
        window.location.href = "/dashboard/porquinho";
    }

    function requisicao() {
        api.get(`porquinhos/${idUsuario}/${idPorquinho}`).then((response) => {
            setDadosPorquinho(response.data);
            console.log(response.data)
        })

        api.get(`porquinhos/mostrarPorcentagem/${idUsuario}/${idPorquinho}`).then((response) => {
            setPorcentagem(response.data);
        })
    }

    useEffect(() => {
        requisicao();
    }, [])

    // Return do HTML
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle" onClick={() => voltar()}>
                            <span className="material-symbols-outlined">arrow_back_ios</span>
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
                        <div className="cards-porquinho">
                            <div className="card-single-receita">
                                <div>
                                    <span>Porquinho</span>
                                    <h2>{dadosPorquinho.nome}</h2>
                                </div>
                            </div>
                            <div className="card-single-receita">
                                <div>
                                    <span>Valor Guardado</span>
                                    <h2>{dadosPorquinho.valorAtual === undefined ? <FaSpinner className="spinner" /> : dadosPorquinho.valorAtual}</h2>
                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">savings</span>
                            </div>
                            <div className="card-single-receita">
                                <div>
                                    <span>Meta</span>
                                    <h2>{dadosPorquinho.valorFinal === undefined ? <FaSpinner className="spinner" /> : dadosPorquinho.valorFinal}</h2>

                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">savings</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-estado-extrato">
                        <div className="barra-estado">
                            <span>
                                <h3>{Math.floor(porcentagem)}%</h3>
                                <span>Guardado</span>
                            </span>
                            <div className="barra-inteira">
                                <div className="barra-porcentagem" style={{ width: `${porcentagem}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-btns">
                        <div>
                            <button className="btn-adicionar" onClick={() => { setShowModal(true); setOpcao("adicionar") }}>Adicionar</button>
                            <button className="btn-retirar" onClick={() => { setShowModal(true); setOpcao("retirar") }}>Retirar</button>
                        </div>
                    </div>
                    <div className="table-container-porquinho">
                        <h2 className="heading">
                        </h2>
                        <table className="table-porquinho">
                            <thead>
                                <tr>
                                    <th>Situação</th>
                                    <th>Data</th>
                                    <th>Valor</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            {/* {listaReceitas.map((receita) => {
                                return (
                                    <LinhaTabela receita={receita} key={receita.idReceita} />
                                )
                            })} */}
                        </table>
                    </div>
                </main>
            </div>
            <PopUpValorPorquinho isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }} mensagem={opcao} idPorquinho={idPorquinho} valorPorquinho={dadosPorquinho.valorAtual} />
        </div>
    );
}

export default PorquinhoExtrato;