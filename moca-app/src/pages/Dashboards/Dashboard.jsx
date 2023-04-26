import axios from "axios";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import "../../assets/css/style2.css";
import { FaSpinner } from 'react-icons/fa';


function HomeDashboard() {
    const [loading, setLoading] = useState(false);

    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");


    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao(){
        if(idUsuario === ""){
            window.location.href = "/login";
        }
    }
    useEffect(() => {
        verificarAutenticacao();
        requisicao();
        setLoading(true);
    }, []);



    // useStates para salvar os dados e exibir na tela
    const [saldo, setSaldo] = useState();
    const [receita, setReceita] = useState();
    const [despesa, setDespesa] = useState();
    const [saldoCartao, setSaldoCartao] = useState();
    const [ativo, setAtivo] = useState(true);



    // Constants para mes e ano que serão passadas no endpoint
    const [opcoes, setOpcoes] = useState([]);
    // const anoAtual = dataAtual.getFullYear();

    useEffect(() => {
        const dataAtual = new Date();
        const meses = [];
        for (let i = 0; i < 12; i++) {
          const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + i, 1);
          const mes = data.toLocaleString('pt-br', { month: 'long' }).toUpperCase();
          meses.push({ value: `${1 + data.getMonth()}`, label: `${mes}` });
       }
        setOpcoes(meses);
      }, []);



    // Requisição do endpoint para mostrar as informações do usuário
    function requisicao(props){
        const data = new Date();
        const ano = data.getFullYear();
        axios.get(`//localhost:8080/api/home/${idUsuario}/${props ? props : data.getMonth() + 1}/${ano}`).then((response) => {
        console.log(response);
        setSaldo(response.data.saldo);
        setReceita(response.data.receita);
        setDespesa(response.data.despesas);
        setSaldoCartao(response.data.despesaCartao);
        setLoading(false);
    });
    // console.log(props);
    }


    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            {ativo && <Sidebar />}
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: 'pointer' }} htmlFor="nav-toggle" onClick={() => ativo ? setAtivo(false) : setAtivo(true)}>
                            <span className="material-symbols-outlined">menu</span>
                        </label>
                    </h2>

                    <div className="search-wrapper">
                    <span className="material-symbols-outlined">calendar_month</span>
                        <select onChange={(event) => {requisicao(event.target.value)}}>
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="user-wrapper">
                        <div>
                            <small>Bem vindo,</small>
                            <h4>{nomeUsuario}</h4>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="cards">
                        <div className="card-single">
                            <div>
                                <span>Saldo</span>
                                <h2>R${saldo === undefined ? <FaSpinner className="spinner" /> : saldo}</h2>
                            </div>
                            <div>
                                <span id="money" className="material-symbols-outlined">attach_money</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Receita</span>
                                <h2>R${receita === undefined ? <FaSpinner className="spinner" /> : receita}</h2>
                            </div>
                            <span id="up" className="material-symbols-outlined">arrow_upward</span>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Despesa</span>
                                <h2>R${despesa === undefined ? <FaSpinner className="spinner" /> : despesa}</h2>
                            </div>
                            <div>
                                <span id="down" className="material-symbols-outlined">arrow_downward</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Cartões</span>
                                <h2>R${saldoCartao === undefined ? <FaSpinner className="spinner" /> : saldoCartao}</h2>
                            </div>
                            <div>
                                <span id="cartao" className="material-symbols-outlined">credit_card</span>
                            </div>
                        </div>
                    </div>

                    <div className="cards-dash">

                        <div className="card-pos"></div>
                        <div className="card-pos"><h2>Receitas por categorias</h2></div>
                        <div className="card-pos"><h2>Cartões</h2></div>
                        <div className="card-pos"><h2>Despesa por categoria</h2></div>
                        <div className="card-pos"><h2>Porquinho</h2></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomeDashboard;