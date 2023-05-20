import api from "../api.js";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router";

function PopUpCartao({ isOpen, setModalOpen }) {
    const idUsuario = localStorage.getItem("id");
    const [clicou, setClicou] = useState(false);
    const limite = document.getElementById("limite");
    const [tipo, setTipo] = useState();
    const [apelido, setApelido] = useState('');
    const [vencimento, setVencimento] = useState('')
    const [bandeira, setBandeira] = useState();
    const [cor, setCor] = useState();
    const navigate = useNavigate();
    const corCartao = [
        { id: 1, opcao: "Azul Royal", codigo: "#0071C5" },
        { id: 2, opcao: "Verde Esmeralda", codigo: "#50C878" },
        { id: 3, opcao: "Amarelo Sol", codigo: "#FFD700" },
        { id: 4, opcao: "Vermelho Cereja", codigo: "#DC143C" },
        { id: 5, opcao: "Roxo Violeta", codigo: "#8A2BE2" },
        { id: 6, opcao: "Laranja Coral", codigo: "#FF7F50" },
        { id: 7, opcao: "Cinza Prata", codigo: "#C0C0C0" },
    ];
    const bandeirasTipos = [
        { id: 1, opcao: "Visa" },
        { id: 2, opcao: "Elo" },
        { id: 3, opcao: "Mastercard" },
        { id: 4, opcao: "Hipercard" },
    ];
    const styles = {
        esconder: {
            display: 'none'
        },
        mostrar: {
            display: 'block'
        }
    };


    function requisicao() {
        api.post(`cartoes/`, {
            limite: limite.value,
            idCliente: idUsuario,
            idTipo: tipo,
            idCor: cor,
            bandeira: bandeira,
            apelido: apelido,
            vencimento: vencimento
        }).then((response) => {
            console.log(response);
            navigate('/dashboard/cartoes');
        })
        console.log(vencimento);

        setClicou(true);
    }


    // Se true ele vai abrir este POP UP
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
                        <label className="input-label">Tipo</label>
                        <select id="tipo" className="selecao" onChange={(event) => setTipo(event.target.value)}>
                            <option value="0">--Selecione--</option>
                            <option value="1">Débito</option>
                            <option value="2">Crédito</option>
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
                        <input type="text" placeholder="MM/AA" className="input" id="vencimento" onChange={(event) => { setVencimento(event.target.value) }} />
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

                    <div className="input-box">
                        <label className="input-label">Apelido</label>
                        <input type="text" className="input" onChange={(event) => setApelido(event.target.value)} />
                    </div>

                    <div className="modal__footer modal_footer_cartao">
                        <div><FaSpinner className="spinner" style={clicou ? styles.mostrar : styles.esconder} /></div>
                        <button style={clicou ? styles.esconder : styles.mostrar}
                            onClick={() => requisicao()}>Adicionar</button>
                    </div>

                    <span onClick={setModalOpen} className="modal__close">&times;</span>
                </div>
            </div>
        );
    }
    return null;
}

export default PopUpCartao;