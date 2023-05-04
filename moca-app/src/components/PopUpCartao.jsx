import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function PopUpCartao({ isOpen, setModalOpen }) {
    const [clicou, setClicou] = useState(false);
    const [banco, setBanco] = useState();
    const [bandeira, setBandeira] = useState();
    const [cor, setCor] = useState();
    const corCartao = [
        { id: 1, opcao: "Azul Royal", codigo: "#0071C5" },
        { id: 2, opcao: "Verde Esmeralda", codigo: "#50C878" },
        { id: 3, opcao: "Amarelo Sol", codigo: "#FFD700" },
        { id: 4, opcao: "Vermelho Cereja", codigo: "#DC143C" },
        { id: 5, opcao: "Roxo Violeta", codigo: "#8A2BE2" },
        { id: 6, opcao: "Laranja Coral", codigo: "#FF7F50" },
        { id: 7, opcao: "Cinza Prata", codigo: "#C0C0C0" },
    ];
    const bancosTipos = [
        {id: 1, opcao: "Santander"},
        {id: 2, opcao: "Itau"},
        {id: 3, opcao: "Banco do Brasil"},
        {id: 4, opcao: "C6 Bank"},
        {id: 5, opcao: "NuBank"},
        {id: 6, opcao: "Inter"},
        {id: 7, opcao: "Banco Pan"},
        {id: 8, opcao: "Caixa Econômica"},
        {id: 9, opcao: "Bradesco"},
        {id: 10, opcao: "Outros"},
    ];
    const bandeirasTipos = [
        {id: 1, opcao: "Visa"},
        {id: 2, opcao: "Elo"},
        {id: 3, opcao: "Mastercard"},
        {id: 4, opcao: "Hipercard"},
        {id: 5, opcao: "American Express"},
    ];

    const styles = {
        esconder: {
            display: 'none'
        },
        mostrar: {
            display: 'block'
        }
    };

    if (isOpen) {
        return (
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Novo Cartão</h1>

                    <div className="input-box">
                        <label className="input-label">Limite</label>
                        <input placeholder="00,00" id="limite" className="input" type="number" />
                    </div>

                    <div className="input-box">
                        <label className="input-label">Banco</label>
                        <select id="banco" className="selecao" onChange={(event) => { setBanco(event.target.value) }}>
                            <option value="0">-- Selecione --</option>
                            {bancosTipos.map( opcao => (
                                <option key={opcao.id} value={opcao.opcao}>{opcao.opcao}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-box">
                        <label className="input-label">Bandeira</label>
                        <select id="banderia" className="selecao" onChange={(event) => { setBandeira(event.target.value) }}>
                            <option value="0">-- Selecione --</option>
                            {bandeirasTipos.map(opcao => (
                                <option key={opcao.id} value={opcao.opcao}>{opcao.opcao}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-box">
                        <label className="input-label">Vencimento</label>
                        <div className="mes-ano">
                            <input placeholder="Mês" id="vencimento-mes" className="input" type="number" />
                            <input placeholder="Ano" id="vencimento-ano" className="input" type="number" />
                        </div>
                    </div>

                    <div className="input-box">
                        <label className="input-label">Cor</label>
                        <select id="cor" className="selecao" onChange={(event) => { setCor(event.target.value) }}>
                            <option value="0">-- Selecione --</option>
                            {corCartao.map(opcao => (
                                <option key={opcao.id} value={opcao.id}>
                                    {opcao.opcao}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="modal__footer modal_footer_cartao">
                        <div><FaSpinner className="spinner" style={clicou ? styles.mostrar : styles.esconder} /></div>
                        <button style={clicou ? styles.esconder : styles.mostrar}
                        >Adicionar</button>
                    </div>

                    <span onClick={setModalOpen} className="modal__close">&times;</span>
                </div>
            </div>
        );
    }
    return null;
}

export default PopUpCartao;