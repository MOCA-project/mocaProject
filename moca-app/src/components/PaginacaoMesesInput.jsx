import { useEffect } from "react";
import { useState } from "react";

function PaginacaoMesesInput({ setMesAno }) {

    // Atributos
    const dataAtual = new Date();
    const [mes, setMes] = useState(dataAtual.getMonth());
    const [ano, setAno] = useState(dataAtual.getFullYear());

    const handleInputChange = (event) => {
        const value = event.target.value;
        const novoMes = value.substring(5, 7);
        const novoAno = value.substring(0, 4);
        setMesAno(novoMes, novoAno);
    };


    // Return do HTML
    return (
        <div>
            <input type="month" onChange={handleInputChange}/>
        </div>
    );
}

export default PaginacaoMesesInput;