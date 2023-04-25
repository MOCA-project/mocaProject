import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function LinhaExtrato(props) {

    const idUsuario = localStorage.getItem("id");
    const [extrato, setExtrato] = useState([]);
    const dataAtual = new Date();

    useEffect(() => {
        // verificarAutenticacao();
        const ano = dataAtual.getFullYear();
        axios.get(`//localhost:8080/api/extrato/${idUsuario}/${props.props + 1}/${ano}`).then((response) => {
            setExtrato([...response.data.items]);
            console.log(response.data)
            // console.log('tabela')
        });
    }, [props.props]);
    return (
        <tbody>
            {extrato.map((valor) => (
                <tr key={valor.idReceita === null ? valor.idDespesa : valor.idReceita}>
                    <td data-label="Situação">
                        {valor.situacao === 'Recebida' ?
                            <span id="positivo" className="material-symbols-outlined">
                                done
                            </span> :
                            <span id="negativo" className="material-symbols-outlined">
                                close
                            </span>}
                    </td>
                    <td data-label="Data">{valor.data}</td>
                    <td data-label="Descrição">{valor.descricao}</td>
                    <td data-label="Categoria">{valor.categoria}</td>
                    <td data-label="Valor">{valor.valor}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default LinhaExtrato;