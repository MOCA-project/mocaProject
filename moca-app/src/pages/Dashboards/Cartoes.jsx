import { FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import CartoesCard from "../../components/CardCartao";
import PopUpCartao from "../../components/PopUpCartao";
import axios from "axios";
import { useEffect } from "react";

function Cartoes() {
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const [showModal, setShowModal] = useState(false);
    const [saldoCartao, setSaldoCartao] = useState();
    const [loading, setLoading] = useState(false);
    const [dadosCartao, setDadosCartao] = useState([]);
    const data = new Date();
    const ano = data.getFullYear();

    function requisicao() {
        // Constants para mes e ano que serão passadas na url
        // Requisição para buscar as receitas do usuario
        axios.get(`//localhost:8080/api/home/${idUsuario}/${data.getMonth() + 1}/${ano}`).then((response) => {
            // console.log(response);
            setSaldoCartao(response.data.despesaCartao);
            setLoading(true);
        });

        axios.get(`//localhost:8080/api/cartoes/${idUsuario}/${data.getMonth() + 1}/${ano}`).then((response) => {
            console.log(response.data.cartoes);
            setDadosCartao(response.data.cartoes);
        })
    }

    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao() {
        if (idUsuario === "") {
            window.location.href = "/login";
        }
    }
    useEffect(() => {
        verificarAutenticacao();
        requisicao();
        setLoading(true);
    }, []);

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
                                    <span>Seus Cartões</span>
                                    <h2>R$ {saldoCartao === undefined ? <FaSpinner className="spinner" /> : saldoCartao}</h2>

                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">credit_card</span>
                            </div>
                            <div className="card-cartao" onClick={() => { setShowModal(true) }}>
                                <div>
                                    <span>Nova Despesa</span> <br />
                                    <h2 className="material-symbols-outlined">add</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartoes-usuario">
                        {dadosCartao.map((opcao) => (
                            <CartoesCard props={opcao} key={opcao.idCartao}/>
                        ))}
                    </div>
                </main>
            </div>
            <PopUpCartao isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }} />
        </div>
    );
}

export default Cartoes;