import { FaSpinner } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

function PorquinhoExtrato() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");

    function voltar() {
        window.location.href = "/dashboard/porquinho";
    }

    // Return do HTML
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle" onClick={() => voltar()}>
                            <span class="material-symbols-outlined">arrow_back_ios</span>
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
                                    <h2>Viagem</h2>
                                </div>
                            </div>
                            <div className="card-single-receita">
                                <div>
                                    <span>Valor Guardado</span>
                                    <h2>{0 === undefined ? <FaSpinner className="spinner" /> : 0}</h2>

                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">savings</span>
                            </div>
                            <div className="card-single-receita">
                                <div>
                                    <span>Meta</span>
                                    <h2>{0 === undefined ? <FaSpinner className="spinner" /> : 0}</h2>

                                </div>
                                <span id="cartao-card" className="material-symbols-outlined">savings</span>
                            </div>
                        </div>
                    </div>
                    <div className="container-estado-extrato">
                        <div className="barra-estado">
                            <span>
                                <h3>70%</h3>
                                <span>Guardado</span>
                            </span>
                            <div className="barra-inteira">
                                <div className="barra-porcentagem" style={{width: "70%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-btns">
                        <div>
                            <button className="btn-adicionar">Adicionar</button>
                            <button className="btn-retirar">Retirar</button>
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
        </div>
    );
}

export default PorquinhoExtrato;