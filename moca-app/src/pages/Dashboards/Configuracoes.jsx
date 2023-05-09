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
                                <div class="toggler">
                                    <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
                                    <label for="toggler-1">
                                        <svg class="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <polyline class="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                        </svg>
                                        <svg class="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                            <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <div className="section-config">
                                <span>Ativar notificações SMS</span>
                                <div class="toggler">
                                    <input id="toggler-2" name="toggler-2" type="checkbox" value="2" />
                                    <label for="toggler-2">
                                        <svg class="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <polyline class="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                        </svg>
                                        <svg class="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                            <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                            <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                        </svg>
                                    </label>
                                </div>
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