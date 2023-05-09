import Sidebar from "../../components/Sidebar";

function Calculadora() {

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
                    <div className="container-calculadora">
                        <h2>Calculadora de investimento</h2>
                        <div className="calculadora">
                            <div className="box-calculadora">
                                <span></span>
                                <input type="text" />
                            </div>
                            <div className="box-calculadora">
                                <span></span>
                                <input type="text" />
                            </div>
                            <div className="box-calculadora">
                                <span></span>
                                <div class="input-group">
                                    <input type="email" class="input-calculadora"/>
                                    <div className="button--submit">%Mensal</div>
                                </div>
                            </div>
                            <div className="box-calculadora">
                                <span></span>
                                <div class="input-group">
                                    <input type="email" class="input-calculadora"/>
                                    <div className="button--submit">Meses</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Calculadora;