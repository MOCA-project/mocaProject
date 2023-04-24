import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function LinhaTabela(props) {

    // Constants para recuperar dados do localStorage
    // const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    const data = new Date();
    const ano = data.getFullYear();

    const [infoGastoReceita, setInfoGastoReceita] = useState([]);


    useEffect(() => {
        // verificarAutenticacao();
        requisicaoDespesaEReceita();
    }, []);


    function requisicaoDespesaEReceita() {
        if (window.location.pathname === '/dashboard/despesa') {
            axios.get(`//localhost:8080/api/despesas/${idUsuario}/${props.props + 1}/${ano}`).then((response) => {
                setInfoGastoReceita([...response.data]);
                console.log(response.data)
                // console.log('tabela')
            });
        } else {
            axios.get(`//localhost:8080/api/receitas/${idUsuario}/${props.props + 1}/${ano}`).then((response) => {
                setInfoGastoReceita([...response.data]);
                console.log(response.data)
                // console.log('tabela')
            });
        }
    }

    return (
        <tbody>
            {infoGastoReceita.map((valor) => (
                <tr key={window.location.pathname === '/dashboard/despesa' ? valor.idDespesa : valor.idReceita}>
                    <td data-label="Situação">
                        <span id="positivo" className="material-symbols-outlined">
                            close
                        </span>
                        <span id="negativo" className="material-symbols-outlined">
                            done
                        </span>
                    </td>
                    <td data-label="Data">{valor.data}</td>
                    <td data-label="Descrição">{valor.descricao}</td>
                    <td data-label="Categoria">{window.location.pathname === '/dashboard/despesa' ? valor.idTipoDespesa : valor.idTipoReceita}</td>
                    <td data-label="Valor">{valor.valor}</td>
                    <td data-label="Ações">
                        <button>
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default LinhaTabela;