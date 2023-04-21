import axios from "axios";
import PopupReceita from "../../components/PopupReceita";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../assets/css/style2.css";

function Extrato() {
    const idUsuario = localStorage.getItem("id");
    const data = new Date();
    const mes = data.getMonth() + 1;
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
            {/* <Sidebar /> */}
            <button onClick={cadReceita}>Cadastrar receita</button>
            {showModal && (
                <PopupReceita />
            )}
        </div>
    );
}

export default Extrato;