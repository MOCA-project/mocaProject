import axios from "axios";
import Header from "../components/Header";
import bolaAzul from "../assets/img/Vector (5).png";
import bolaPreta from "../assets/img/Vector (4).png";
import { armazenar } from "../LocalStorages";
import "../assets/css/style.css";
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";

function Login() {

    const [clicou, setClicou] = useState(false);

    const styles = {
        esconder: {
            display: 'none'
        },
        mostrar: {
            display: 'block'
        }
    };

    function postLogin() {

        // Valor digitado no input de EMAIL
        const email = document.getElementById('email-login');
        const emailValue = email.value;

        // Valor digitado no input de SENHA
        const senha = document.getElementById('senha-login');
        const senhaValue = senha.value;

        if (emailValue === "" || emailValue === " ") {
            alert("Informe um email!");
        } else if (senhaValue === "" || senhaValue === " ") {
            alert("Digite a senha!");
        } else {
            console.log(emailValue, senhaValue);
            axios.post("http://localhost:8080/api/usuarios/login", {
                email: emailValue,
                senha: senhaValue
            }).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    armazenar("nome", response.data.nome);
                    armazenar("id", response.data.id);
                    armazenar("token", response.data.token);
                    window.location.href = "/dashboard";
                }
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Email do usuário não cadastrado!")
                }
            });
        }
    }

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
                            <input type="text" id="email-login" placeholder="Email" />
                        </div>
                        <div className="input-login">
                            <input type="password" id="senha-login" placeholder="Senha" />
                        </div>
                        <div className="input-login">
                            <div><FaSpinner className="spinner" style={clicou ? styles.mostrar : styles.esconder} /></div>
                            <button type="button" 
                            style={clicou ? styles.esconder : styles.mostrar}
                            className="btn-login"
                             onClick={() => {postLogin(); setClicou(true);}}>Login</button>
                        </div>
                    </form>
                </div>
                <img className="bolaPreta" src={bolaPreta} alt="" />
            </section>
        </div>
    );
}

export default Login;