import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { FaSpinner } from "react-icons/fa";
import PopUpPorquinho from "../../components/PopUpPorquinho"
import axios from "axios";
import { useEffect } from "react";
import CardPorquinho from "../../components/CardPorquinho";

function Porquinho() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");
    // const idUsuario = localStorage.getItem("id");
    const [porquinhosUsuario, setPorquinhosUsuario] = useState([]);
    const [showModal, setShowModal] = useState(false);

    
    // Funções
    function requisicao() {
        axios.get(`//localhost:8080/api/porquinhos/`).then((response) => {
            console.log(response.data);
            setPorquinhosUsuario(response.data);
        });
    }
    useEffect(() => {
        requisicao();
    }, []);

    function handleClick(idPorquinho) {
        console.log(`Clicou no porquinho ${idPorquinho}`);
        window.location.href = '/dashboard/porquinho/extrato';
    }


    // Return do HTML
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
                                    <span>Seus Porquinhos</span>
                                    <h2>{0 === undefined ? <FaSpinner className="spinner" /> : 0}</h2>

                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">savings</span>
                            </div>
                            <div className="card-cartao" onClick={() => { setShowModal(true) }}>
                                <div>
                                    <span>Novo Porquinho</span> <br />
                                    <h2 className="material-symbols-outlined">add</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartoes-usuario">
                        {porquinhosUsuario.map((opcao) => (
                            <CardPorquinho key={opcao.idPorquinho} opcao={opcao} onClick={() => handleClick(opcao.idPorquinho)} />
                        ))}
                    </div>

                    <div className="frase">Guardando dinheiro consistentemente, você está investindo em seu futuro e transformando seus sonhos em metas alcançáveis</div>

                </main>
            </div>
            <PopUpPorquinho isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }} />
        </div>
    );
}

export default Porquinho;