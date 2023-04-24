import axios from "axios";
import { useState } from "react";

function LinhaTabla(props) {

    // Constants para recuperar dados do localStorage
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    const data = new Date();
    const ano = data.getFullYear();

    const [todasDespesas, setTodasDespesas] = useState([]);

    axios.get(`//localhost:8080/api/despesas/${idUsuario}/${props}/${ano}`).then((response) => {
        setTodasDespesas(response.data);
    })

    return (
        <tbody>
            {todasDespesas.map(() => (
                <tr>
                <td data-label="Situação">
                    <span id="positivo" className="material-symbols-outlined">close</span>
                    <span id="negativo" className="material-symbols-outlined">done</span>
                </td>
                <td data-label="Data">20/12/2023</td>
                <td data-label="Descrição">Compra feita em tabacaria</td>
                <td data-label="Categoria">Crédito</td>
                <td data-label="Valor">R$200</td>
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

export default LinhaTabla;