import axios from "axios";
import Mastercard from "../assets/img/Mastercard-Logo.png";
import { useState } from "react";
import { useEffect } from "react";

function CartoesCard(props) {
    const [dadosCartao, setDadosCartao] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = new Date();
    const ano = data.getFullYear();

    function requisicao() {
        axios.get(`//localhost:8080/api/cartoes/${props.idUsuario}/${data.getMonth() + 1}/${ano}`).then((response) => {
            console.log(response.data.cartoes);
            setDadosCartao(response.data.cartoes);
        })
    }
    useEffect(() => {
        requisicao();
        setLoading(true);
    }, []);

    return (
        <div className="card-credit">
            <div className="cartao">
                <div className="tipo-cartao">
                    <div className="tipo">Crédito</div>
                    <div className="bandeira"><img src={Mastercard} alt="" /></div>
                    <div className="nome-usuario">{props.nomeUsuario}</div>
                </div>
            </div>
            <div className="informacoes-cartao">
                <h2>Nubank</h2>
                <div className="informacoes">
                    <div>Limite:<span>R$ {dadosCartao.limite}</span></div>
                    <div>Venci.: <span>{dadosCartao.vencimento}</span></div>
                    <div>
                        <h5>{dadosCartao.porcentagemUtilizado}% utilizado</h5>
                        <div className="progresso">
                            <div className="barra-progresso" style={{ width: `${dadosCartao.porcentagemUtilizado}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartoesCard;