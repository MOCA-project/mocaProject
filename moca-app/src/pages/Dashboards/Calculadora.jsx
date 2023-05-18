import { useState } from "react";
import Sidebar from "../../components/Sidebar";

function Calculadora() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");
    const [valorInicial, setValorInicial] = useState();
    const [aporteMensal, setAporteMensal] = useState();
    const [taxaJuros, setTaxaJuros] = useState();
    const [periodoMeses, setPeriodoMeses] = useState();
    const [saldo, setSaldo] = useState()

    function calcular() {
        const taxaJurosDecimal = taxaJuros / 100;
        let saldo = valorInicial;

        for (let i = 1; i <= periodoMeses; i++) {
            saldo += aporteMensal;
            saldo *= 1 + taxaJurosDecimal;
        }
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
                    <div className="container-calculadora">
                        <h1>Calculadora de investimento</h1>
                        <div className="calculadora">
                            <div className="box-calculadora">
                                <span>Valor inicial</span>
                                <input type="text" className="input-calucladora-valores" onChange={(event => setValorInicial(event.target.value))} />
                            </div>
                            <div className="box-calculadora">
                                <span>Aportes mensais</span>
                                <input type="text" className="input-calucladora-valores" onChange={(event => setAporteMensal(event.target.value))} />
                            </div>
                            <div className="box-calculadora">
                                <span>Taxa de juros</span>
                                <div className="input-group">
                                    <input type="email" className="input-calculadora" onChange={(event => setTaxaJuros(event.target.value))} />
                                    <div className="button--submit">%Mensal</div>
                                </div>
                            </div>
                            <div className="box-calculadora">
                                <span>Período</span>
                                <div className="input-group">
                                    <input type="email" className="input-calculadora" onChange={(event => setPeriodoMeses(event.target.value))} />
                                    <div className="button--submit">Meses</div>
                                </div>
                            </div>
                        </div>
                        <div className="container-botao">
                            <button className="limpar-calculadora">Limpar</button>
                            <button className="calcular-calculadora" onClick={() => calcular()}>Calcular</button>
                        </div>
                        <div className="valor-estimado">
                            <h1>Valor total estimado</h1>
                            <div className="card-valor">
                                <span></span>
                            </div>
                        </div>
                        <div className="table-container-calculadora">
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
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Calculadora;