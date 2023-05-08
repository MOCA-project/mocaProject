import axios from "axios";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

function PopUpPorquinho({ isOpen, setModalOpen }) {
    const idUsuario = localStorage.getItem("id");
    const [clicou, setClicou] = useState(false);
    const [nomeMeta, setNomeMeta] = useState();
    const [valorMeta, setValorMeta] = useState();
    const styles = {
        esconder: {
            display: 'none'
        },
        mostrar: {
            display: 'block'
        }
    };
    function requisicao() {
        axios.post(`//localhost:8080/api/porquinhos/`, {
            nome: nomeMeta,
            valorFinal: valorMeta,
            valorAtual: 0,
            isConcluido: false,
            idCliente: idUsuario,
            concluido: false
        }).then((response) => {
            console.log(response);
        })
        setClicou(true);
    }
    
    if (isOpen) {
        return (
            <div id="demo-modal" className="modal">
                <div className="modal__content">
                    <h1>Novo Cartão</h1>

                    <div className="input-box">
                        <label className="input-label">Nome da meta</label>
                        <input className="input" type="text" onChange={(event) => setNomeMeta(event.target.value)} />
                    </div>

                    <div className="input-box">
                        <label className="input-label">Valor final da Meta</label>
                        <input placeholder="R$0,00" className="input" type="number" onChange={(event) => setValorMeta(event.target.value)} />
                    </div>

                    <div className="input-box">
                        <label className="input-label">Icone</label>
                        <select id="banco" className="selecao">
                            <option value="0">-- Selecione --</option>
                        </select>
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

export default PopUpPorquinho;