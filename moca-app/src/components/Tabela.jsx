import axios from "axios";
import { useState } from "react";


function LinhaTabela(props) {

    // Constants para recuperar dados do localStorage
    // const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");

    // console.log(props);

    const [isEditando, setIsEditando] = useState(false);

    function pagarDespesa() {
        axios.patch(`//localhost:8080/api/despesas/pagar/${props.despesa.idDespesa}`).then((response) => {
            console.log(response.status);
        })
    }

    return (
        <tbody>
            <tr>
                <td data-label="Situação">
                    {window.location.pathname === '/dashboard/despesa' && props.despesa.paid === false ?
                        <span id="negativo" className="material-symbols-outlined" onClick={() => pagarDespesa()}>close</span>
                        :
                        <span id="positivo" className="material-symbols-outlined">done</span>
                    }
                    {window.location.pathname === '/dashboard/receita' ??
                        <span id="positivo" className="material-symbols-outlined">done</span>
                    }
                </td>
                <td data-label="Data">
                    <input type="text"
                        disabled={isEditando === false}
                        defaultValue={window.location.pathname === '/dashboard/despesa' ? props.despesa.data : props.receita.data} />
                </td>
                <td data-label="Descrição">
                    <input type="text"
                        disabled={isEditando === false}
                        defaultValue={window.location.pathname === '/dashboard/despesa' ? props.despesa.descricao : props.receita.descricao} />
                </td>
                <td data-label="Categoria">
                    <input type="text"
                        disabled={isEditando === false}
                        defaultValue={window.location.pathname === '/dashboard/despesa' ? props.despesa.idTipoDespesa : props.receita.idTipoReceita} />
                </td>
                <td data-label="Valor">
                    <input type="number"
                        disabled={isEditando === false}
                        defaultValue={window.location.pathname === '/dashboard/despesa' ? props.despesa.valor : props.receita.valor} />
                </td>
                <td data-label="Ações">
                    <button onClick={() => setIsEditando(!isEditando)}>
                        {isEditando ?
                            <span className="material-symbols-outlined">save</span>
                            :
                            <span className="material-symbols-outlined">edit</span>}
                    </button>
                    <button>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </td>
            </tr>
        </tbody>
    );
}

export default LinhaTabela;