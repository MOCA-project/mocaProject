import { useState, useEffect } from "react";
function Select() {
    const [opcoes, setOpcoes] = useState([]);
  
    useEffect(() => {
      const dataAtual = new Date();
      const meses = [];
      for (let i = 0; i < 12; i++) {
        const data = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + i, 1);
        const mes = data.toLocaleString('pt-br', { month: 'long' });
        meses.push({ value: `${i + 1}`, label: `${mes}` });
     }
      setOpcoes(meses);
    }, []);
  
    return (
      <select>
        {opcoes.map((opcao) => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
    );
  }

  export default Select;
  