import Mastercard from "../assets/img/Mastercard-Logo.png";

function CartoesCard(props) {
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
                    <div>Limite:<span>R$ 100,00</span></div>
                    <div>Venci.: <span>10/05</span></div>
                    <div>
                        <h5>74% utilizado</h5>
                        <div className="progresso">
                            <div className="barra-progresso" style={{ width: `74%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartoesCard;