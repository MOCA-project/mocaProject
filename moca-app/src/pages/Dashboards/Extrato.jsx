import axios from "axios";

function Extrato() {
    const idUsuario = localStorage.getItem("id");
    const data = new Date();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    axios.get(`//localhost:8080/api/extrato/${ idUsuario }/${ mes }/${ ano }`).then((response) => {
        console.log(response);
    });

    function cadReceita(){

    }
    
    return ( 
        <div>
            <button onClick={cadReceita}></button>
        </div>
     );
}

export default Extrato;