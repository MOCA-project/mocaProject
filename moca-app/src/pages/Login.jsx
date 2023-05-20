import api from "../api.js";
import Header from "../components/Header";
import bolaAzul from "../assets/img/Vector (5).png";
import bolaPreta from "../assets/img/Vector (4).png";
import { armazenar } from "../LocalStorages";
import "../assets/css/style.css";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {

    // Atributos
    const [clicou, setClicou] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [senhaValue, setSenhaValue] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [senhaAlert, setSenhaAlert] = useState('');
    const navigate = useNavigate();
    const styles = {
        esconder: { display: 'none' },
        mostrar: { display: 'block' }
    };

    // Fução para logar o usuário
    function postLogin() {

        if (emailValue === "" || emailValue === " ") {
            setEmailAlert("Informe um email!");
        } else if (senhaValue === "" || senhaValue === " ") {
            setSenhaAlert("Digite a senha!");
        } else {
            console.log(emailValue, senhaValue);
            api.post("usuarios/login", {
                email: emailValue,
                senha: senhaValue
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    armazenar("nome", response.data.nome);
                    armazenar("id", response.data.id);
                    armazenar("token", response.data.token);
                    navigate("/dashboard");
                }
            }).catch((err) => {
                if (err.response.status === 404) {
                    alert("Email do usuário não cadastrado!");
                }
            });
        }
    }

    // Return do HTML
    return (
        <div>
            <Header />
            <div className="texto-login">
                <p>Hora de se organizar</p>
                <h2>Controle suas despesas e receitas de forma simples e eficiente.</h2>
            </div>
            <section className="container-login">
                <img className="bolaAzul" src={bolaAzul} alt="" />
                <div className="card-login">
                    <h1>Login</h1>
                    <form className="cont-login">
                        <div className="input-login">
                            <input type="text" onChange={(event) => setEmailValue(event.target.value)} placeholder="Email" />
                            <small>{emailAlert}</small>
                        </div>
                        <div className="input-login">
                            <input type="password" onChange={(event) => setSenhaValue(event.target.value)} placeholder="Senha" />
                            <small>{senhaAlert}</small>
                        </div>
                        <div className="input-login">
                            <div><FaSpinner className="spinner" style={clicou ? styles.mostrar : styles.esconder} /></div>
                            <button type="button"
                                style={clicou ? styles.esconder : styles.mostrar}
                                className="btn-login"
                                onClick={() => { postLogin(); setClicou(true); }}>Login</button>
                        </div>
                    </form>
                </div>
                <img className="bolaPreta" src={bolaPreta} alt="" />
            </section>
        </div>
    );
}

export default Login;