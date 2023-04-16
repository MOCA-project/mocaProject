import axios from "axios";
import PopupReceita from "../../components/PopupReceita";
import { useState } from "react";

function Extrato() {
    const idUsuario = localStorage.getItem("id");
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const [showModal, setShowModal] = useState(false);

    axios.get(`//localhost:8080/api/extrato/${idUsuario}/${mes}/${ano}`).then((response) => {
        console.log(response);
    });

    function cadReceita() {
        setShowModal(true)
    }

    return (
        <div>
            <button onClick={cadReceita}>Cadastrar receita</button>
            {showModal && (
                <PopupReceita />
            )}
        </div>
    );
}

export default Extrato;