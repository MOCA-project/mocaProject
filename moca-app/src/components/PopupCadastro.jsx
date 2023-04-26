import axios from "axios";
import "../assets/css/popup.css";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function PopUpCadastro({ isOpen, setModalOpen, children }) {

    // Constants para recuperar dados do localStorage
    // const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    const styles = {
        esconder: {
            display: 'none'
        },
        mostrar: {
            display: 'block'
        }
    };

    const opcoesDespesa = [
        { id: 1, opcao: "Moradia" },
        { id: 2, opcao: "Alimentação" },
        { id: 3, opcao: "Transporte" },
        { id: 4, opcao: "Saúde" },
        { id: 5, opcao: "Educação" },
        { id: 6, opcao: "Lazer" },
        { id: 7, opcao: "Vestuário" },
        { id: 8, opcao: "Dívidas" },
        { id: 9, opcao: "Impostos" },
        { id: 10, opcao: "Outras" }
    ];

    const opcoesReceita = [
        { id: 1, opcao: "Salário" },
        { id: 2, opcao: "Rendimentos" },
        { id: 3, opcao: "Vendas de Bens" },
        { id: 4, opcao: "Freelance" },
        { id: 5, opcao: "Aluguel" },
        { id: 6, opcao: "Ajuda Financeira" },
        { id: 7, opcao: "ReembolsosReembolsos" },
        { id: 8, opcao: "Prêmios" },
        { id: 9, opcao: "Outras fontes de receita" }
    ];

    const dateSystem = new Date();
    const dataConvertPt = dateSystem.toLocaleDateString("pt-BR");
    const dataConvert = dateSystem.toLocaleDateString("sv-SE");


    // Categoria
    const [categoria, setCategoria] = useState();
    const [clicou, setClicou] = useState(false);



    function adicionarDespesa() {
        setClicou(true);
        // Valor
        const valor = document.getElementById("valor");
        const valorValue = valor.value;

        // Descrição
        const descricao = document.getElementById("descricao");
        const descricaoValue = descricao.value;

        //SE A PAGINA ESTIVER EM DESPESA IRA EXECUTAR A FUNCAO DESPESA
        console.log({
            valor: valorValue,
            categoria: categoria,
            descricao: descricaoValue,
            data: dataConvert,
        });
        axios.post("//localhost:8080/api/despesas/", {
            descricao: descricaoValue,
            valor: valorValue,
            data: dataConvert,
            isPaid: false,
            isParcela: false,
            idCliente: idUsuario,
            idTipoDespesa: categoria,
        }).then((response) => {
            console.log(response.data);
            window.location.href = '/dashboard/despesa'
        }).catch((err) => {
            if (err.response.status() === 404) {
                alert("Página não encontrada!");
            }
        });

        // if (valorValue <= 0) {
        //     alert("Informe um valor positivo!");
        // } else if (categoria === 0) {
        //     alert("Selecione uma categoria!");
        // } else if (descricaoValue === "" || descricaoValue === " ") {
        //     alert("Digite uma descrição!");
        // } else if (valorValue > 0 && categoria !== 0 && descricaoValue !== "" && descricaoValue !== " ") {

        // }

    }

    function adicionarReceita() {
        setClicou(true);
        // Valor
        const valor = document.getElementById("valor");
        const valorValue = valor.value;

        // Descrição
        const descricao = document.getElementById("descricao");
        const descricaoValue = descricao.value;

        console.log({
            valor: valorValue,
            categoria: categoria,
            descricao: descricaoValue,
            data: dataConvert,
        });

        axios.post("//localhost:8080/api/receitas/", {
            descricao: descricaoValue,
            valor: valorValue,
            data: dataConvert,
            idCliente: idUsuario,
            idTipoReceita: categoria,
        })
            .then((response) => {
                console.log(response.data);
                window.location.href = '/dashboard/receita'
            })
            .catch((err) => {
                if (err.response.status() === 404) {
                    alert("Página não encontrada!");
                }
            });
        // if (valorValue > 0 && categoria !== 0 && descricaoValue !== "" && descricaoValue !== " ") {
        //     // console

        // } else if (valorValue <= 0) {
        //     alert("Informe um valor positivo!");
        // } else if (categoria === 0) {
        //     alert("Selecione uma categoria!");
        // } else if (descricaoValue === "" || descricaoValue === " ") {
        //     alert("Digite uma descrição!");
        // }



    }




    if (isOpen) {
        return (
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>{window.location.pathname === '/dashboard/despesa' ? 'Nova Despesa' : 'Nova Receita'}</h1>

                    <div className="input-box">
                        <label className="input-label">Valor</label>
                        <input placeholder="00,00" id="valor" className="input" type="number" />
                    </div>

                    <div className="input-box">
                        <label className="input-label">Categoria</label>
                        <select id="categoria" className="selecao" onChange={(event) => { setCategoria(event.target.value) }}>
                            <option value="0">-- Selecione --</option>
                            {window.location.pathname === '/dashboard/despesa' ?
                                opcoesDespesa.map(opcao => (
                                    <option key={opcao.id} value={opcao.id}>
                                        {opcao.opcao}
                                    </option>
                                )) :
                                opcoesReceita.map(opcao => (
                                    <option key={opcao.id} value={opcao.id}>
                                        {opcao.opcao}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="input-box">
                        <label className="input-label">Descrição</label>
                        <input id="descricao" className="input" type="text" />
                    </div>

                    <div className="input-box">
                        <label className="input-label">Data</label>
                        <input placeholder={dataConvertPt} className="input" type="text" disabled />
                    </div>

                    <div className={window.location.pathname === '/dashboard/despesa' ? "modal__footer modal_footer_depesa" : "modal__footer modal_footer_receita"}>
                        <div><FaSpinner className="spinner" style={clicou ? styles.mostrar : styles.esconder} /></div>
                        <button style={clicou ? styles.esconder : styles.mostrar}
                            onClick={window.location.pathname === '/dashboard/despesa' ? () => adicionarDespesa() : () => adicionarReceita()}>Adicionar</button>
                    </div>

                    <span onClick={setModalOpen} className="modal__close">&times;</span>
                </div>
            </div>
        );
    }

    return null;
}

export default PopUpCadastro;