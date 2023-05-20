import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function LinhaExtrato(props) {


    return (
        <tr>
            <td data-label="Situação">
                {props.props.situacao === 'Recebida' ?
                    <span id="positivo" className="material-symbols-outlined">
                        done
                    </span> :
                    <span id="negativo" className="material-symbols-outlined">
                        close
                    </span>}
            </td>
            <td data-label="Data">{props.props.data}</td>
            <td data-label="Descrição">{props.props.descricao}</td>
            <td data-label="Categoria">{props.props.categoria}</td>
            <td data-label="Valor">R$ {props.props.valor}</td>
        </tr>
    );
}

export default LinhaExtrato;