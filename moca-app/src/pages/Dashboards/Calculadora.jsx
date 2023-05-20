import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

function Calculadora() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");
    const [valorInicial, setValorInicial] = useState('');
    const [aporteMensal, setAporteMensal] = useState('');
    const [taxaJuros, setTaxaJuros] = useState('');
    const [periodoMeses, setPeriodoMeses] = useState('');
    const [saldo, setSaldo] = useState(0);
    const [exibir, setExibir] = useState(0);
    const [tabelaValores, setTabelaValores] = useState([]);
    const [limparCampos, setLimparCampos] = useState(false);


    // Funcao para calcular e exibir na tabela
    function calcular() {
        const taxaJurosDecimal = taxaJuros / 100;
        let saldoAtual = parseFloat(valorInicial);
        const tabela = [];

        for (let i = 1; i <= periodoMeses; i++) {
            saldoAtual += parseFloat(aporteMensal);
            saldoAtual *= 1 + taxaJurosDecimal;

            tabela.push({
                mes: i,
                valor: saldoAtual.toFixed(2).replace('.', ',')
            });
        }

        setSaldo(saldoAtual);
        setExibir(saldoAtual);
        setTabelaValores(tabela);
    }

    function limparCalculadora() {
        setValorInicial('');
        setAporteMensal('');
        setTaxaJuros('');
        setPeriodoMeses('');
        setSaldo('');
        setExibir(0);
        setLimparCampos(true);
        setTabelaValores([]);
    }

    useEffect(() => {
        if (limparCampos) {
            setLimparCampos(false);
        }
    }, [limparCampos]);


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
                            <button className="limpar-calculadora" onClick={limparCalculadora}>Limpar</button>
                            <button className="calcular-calculadora" onClick={calcular}>Calcular</button>
                        </div>
                        <div className="valor-estimado">
                            <h1>Valor total estimado</h1>
                            <div className="card-valor">
                                <span>R$ {exibir.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                        <div className="table-container-calculadora">
                            <h2 className="heading">
                            </h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mês</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tabelaValores.map((item) => (
                                        <tr key={item.mes}>
                                            <td>{item.mes}</td>
                                            <td>{item.valor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Calculadora;