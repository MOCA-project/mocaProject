import Sidebar from "../../components/Sidebar";

function Configuracoes() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");

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
                    <div className="container-config">
                        <h1>Configurações</h1>
                        <div className="config">
                            <div className="section-config">
                                <span>Ativar lembretes (Notificações do APP)</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" />
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>

                            </div>
                            <div className="section-config">
                                <span>Ativar notificações SMS</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" />
                                    <div class="toggle-switch-background">
                                        <div class="toggle-switch-handle"></div>
                                    </div>
                                </label>

                            </div>
                            <div className="section-config">
                                <span>Número celular</span>
                                <input type="text" className="input-text-config" />
                            </div>
                            <div className="section-config">
                                <span>E-mail</span>
                                <input type="text" className="input-text-config" />
                            </div>
                            <div className="section-config">
                                <span>Alterar senha</span>
                                <input type="password" className="input-text-config" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Configuracoes;