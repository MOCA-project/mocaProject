import Sidebar from "../../components/Sidebar";

function HomeDashboard() {
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const tokenUsuario = localStorage.getItem("token");
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header>
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle">
                            <span className="material-symbols-outlined">menu</span>
                        </label>
                    </h2>

                    <div className="search-wrapper">
                        <span className="material-symbols-outlined">playlist_add_check</span>
                        <input type="" />
                    </div>

                    <div className="user-wrapper">
                        <div>
                            <h4>{nomeUsuario}</h4>
                            <small>Super Admin</small>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <span>Saldo</span>
                                <h2>R$548,56</h2>
                            </div>
                            <div>
                                <span id="money" className="material-symbols-outlined">
                                    attach_money
                                </span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Receita</span>
                                <h2>R$1200,00</h2>
                            </div>
                            <span id="up" className="material-symbols-outlined">arrow_upward</span>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Despesa</span>
                                <h2>R$651,44</h2>
                            </div>
                            <div>
                                <span id="down" className="material-symbols-outlined">
                                    arrow_downward
                                </span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Cartões</span>
                                <h2>R$352,25</h2>
                            </div>
                            <div>
                                <span id="cartao" className="material-symbols-outlined">
                                    credit_card
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="cards-dash">
                        <div className="card-pos"></div>
                        <div className="card-pos">
                            <h2>Receitas por categorias</h2>
                        </div>
                        <div className="card-pos">
                            <h2>Cartões</h2>
                        </div>
                        <div className="card-pos">
                            <h2>Despesa por categoria</h2>
                        </div>
                        <div className="card-pos">
                            <h2>Porquinho</h2>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomeDashboard;