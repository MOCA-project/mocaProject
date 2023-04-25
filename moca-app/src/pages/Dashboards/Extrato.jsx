import axios from "axios";
import Sidebar from "../../components/Sidebar";
import "../../assets/css/style2.css";
import Meses from "../../components/PaginacaoMeses";
import { useState } from "react";
import { useEffect } from "react";
import LinhaExtrato from "../../components/TabelaExtrato";

function Extrato() {


    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    const [saldo, setSaldo] = useState();
    const [receita, setReceita] = useState();
    const [despesa, setDespesa] = useState();
    const [ativo, setAtivo] = useState(true);
    const [mesAtual, setMesAtual] = useState(new Date().getMonth());


    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao() {
        if (idUsuario === "") {
            window.location.href = "/login";
        }
    }
    verificarAutenticacao();

    useEffect(() => {
        verificarAutenticacao();
        requisicao();
    }, []);


    // Requisição do endpoint para mostrar as informações do usuário
    function requisicao(props) {
        const data = new Date();
        const ano = data.getFullYear();
        axios.get(`//localhost:8080/api/home/${idUsuario}/${props ? props : data.getMonth() + 1}/${ano}`).then((response) => {
            console.log(response);
            setSaldo(response.data.saldo);
            setReceita(response.data.receita);
            setDespesa(response.data.despesas);
        });
        // console.log(props);
    }

    function download() {

        axios.get(`//localhost:8080/api/extrato/arquivo/75/04/2023`, {

            responseType: 'arraybuffer'

        }).then(response => {

            // Cria um blob a partir dos dados recebidos

            const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });



            // Cria uma URL temporária para o blob

            const url = window.URL.createObjectURL(blob);



            // Cria um elemento <a> no DOM

            const link = document.createElement('a');

            link.href = url;

            link.setAttribute('download', 'extrato.csv');



            // Simula um clique no elemento <a> para iniciar o download

            document.body.appendChild(link);

            link.click();

            link.remove();

        }).catch(error => {

            console.error('Erro ao baixar o arquivo:', error);

            // Exibe uma mensagem de erro para o usuário

        });

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
                                <h2>R${saldo}</h2>
                            </div>
                            <div>
                                <span id="money" className="material-symbols-outlined">attach_money</span>
                            </div>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Receita</span>
                                <h2>R${receita}</h2>
                            </div>
                            <span id="up" className="material-symbols-outlined">arrow_upward</span>
                        </div>
                        <div className="card-single">
                            <div>
                                <span>Despesa</span>
                                <h2>R${despesa}</h2>
                            </div>
                            <div>
                                <span id="down" className="material-symbols-outlined">arrow_downward</span>
                            </div>
                        </div>

                        <button type="button" class="button" onClick={() => download()}>
                            <span class="button__text">Add Item</span>
                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
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
                                    {/* <th>Ações</th> */}
                                </tr>
                            </thead>
                            <LinhaExtrato props={mesAtual} />
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Extrato;