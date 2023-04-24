import { useState } from "react";
import PopUpCadastro from "../../components/PopupCadastro";
import Meses from "../../components/PaginacaoMeses";
import Sidebar from "../../components/Sidebar";
import LinhaTabla from "../../components/Tabela";

function Despesas() {

    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    // const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");
    const [ativo, setAtivo] = useState(true);
    const [despesa, setDespesa] = useState();
    const [mesAtual, setMesAtual] = useState(new Date().getMonth());

    // Validar se o usuario efetuou login antes de acessar a dashboard
    // function verificarAutenticacao(){
    //     if(idUsuario === ""){
    //         window.location.href = "/login";
    //     }
    // }
    // verificarAutenticacao();



    const [showModal, setShowModal] = useState(false);


    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            {ativo && <Sidebar />}
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle" onClick={() => ativo ? setAtivo(false) : setAtivo(true)}>
                            <span className="material-symbols-outlined">menu</span>
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
                    <div className="cards-despesas">
                        <div className="card-single-despesa">
                            <div>
                                <span>Despesa</span>
                                <h2>R${despesa}</h2>
                            </div>
                            <span id="down" className="material-symbols-outlined">
                                arrow_downward
                            </span>
                        </div>
                        <div className="card-despesa" onClick={() => { setShowModal(true) }}>
                            <div>
                                <span>Nova Receita</span> <br />
                                <h2 className="material-symbols-outlined">add</h2>
                            </div>
                        </div>
                        {/* {showModal && (<PopUpCadastro />)} */}
                    </div>
                    <Meses mesAtual={mesAtual} setMesAtual={setMesAtual} />
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
                            <LinhaTabla props={mesAtual}/>
                        </table>
                    </div>
                </main>
            </div>
            <PopUpCadastro isOpen={showModal} setModalOpen={() => {setShowModal(!showModal)}}>
                
            </PopUpCadastro>
        </div>
    );
}

export default Despesas;