import axios from "axios";
import Sidebar from "../../components/Sidebar";
import "../../assets/css/style2.css";

function Extrato() {


    // Constants para recuperar dados do localStorage
    // const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    // const tokenUsuario = localStorage.getItem("token");
    

    // Validar se o usuario efetuou login antes de acessar a dashboard
    function verificarAutenticacao(){
        if(idUsuario === ""){
            window.location.href = "/login";
        }
    }
    verificarAutenticacao();


    const data = new Date();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();



    axios.get(`//localhost:8080/api/extrato/${idUsuario}/${mes}/${ano}`).then((response) => {
        console.log(response);
    });

    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default Extrato;