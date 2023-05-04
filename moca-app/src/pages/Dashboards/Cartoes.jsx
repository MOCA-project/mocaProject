import { FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import CartoesCard from "../../components/CardCartao";
import PopUpCartao from "../../components/PopUpCartao";

function Cartoes() {
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const [showModal, setShowModal] = useState(false);

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
                                    <h2>
                                        {/* R${receita === undefined ?  */}
                                        <FaSpinner className="spinner" />
                                        {/* : receita} */}
                                    </h2>

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
                        <CartoesCard idUsuario={idUsuario} nomeUsuario={nomeUsuario} />
                    </div>
                </main>
            </div>
            <PopUpCartao isOpen={showModal} setModalOpen={() => { setShowModal(!showModal) }}/>
        </div>
    );
}

export default Cartoes;