import api from "../api.js";
import Header from "../components/Header";
import vetorCadastro1 from "../assets/img/vetorCadastro1.png";
import vetorCadastro2 from "../assets/img/vetorCadastro2.png";
import "../assets/css/style.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Cadastro() {

    // Atributos
    const [nomeValue, setNomeValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [telefoneValue, setTelefoneValue] = useState('');
    const [senhaValue, setSenhaValue] = useState('');
    const [confirmeSenhaValue, setConfirmeSenhaValue] = useState('');
    const navigate = useNavigate();
    // Consts para exibir frases de alertas
    const [nomeAlert, setNomeAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [telefoneAlert, setTelefoneAlert] = useState('');
    const [senhaAlert, setSenhaAlert] = useState('');
    const [confirmeSenhaAlert, setConfirmeSenhaAlert] = useState('');

    // Função chamada no botão para cadastrar o usuário
    function postCadastro() {

        // Regex
        let regexEmail = /\S+@\S+\.\S+/;

        // Fazendo as validações dos inputs e cadastrando
        if (nomeValue === "" || nomeValue === " ") {
            setNomeAlert("Informe um nome!");
        } else if (!regexEmail.test(emailValue)) {
            setEmailAlert("Digite um email válido!");
        } else if (telefoneValue === "" || telefoneValue === " ") {
            setTelefoneAlert('Telefone inválido! EX: (99) 12345-6789 ou 99 1234-5678');
        } else if (senhaValue === "" || senhaValue === " " || senhaValue.length < 6) {
            setSenhaAlert("Senha inválida! Mínimo de 6 caracteres.");
        } else if (senhaValue !== confirmeSenhaValue) {
            setConfirmeSenhaAlert("Senhas não conferem!");
        } else {

            // Chamando o axios para criar um cliente = usuario
            // e passando um json com o valor dos inputs
            api.post("usuarios/cadastrar/", {
                nome: nomeValue,
                email: emailValue,
                senha: senhaValue,
                telefone: telefoneValue,
                idTipoPerfil: 5,
            }).then(() => {
                navigate('/login');
            }).catch((err) => {
                if (err.response.status() === 409) {
                    alert("Usuário ja cadastrado!");
                } else if (err.response.status() === 404) {
                    alert("Página não encontrada!");
                }
            });
        }

    }


    // Retornando a estrutura do site de Cadastro
    return (
        <div className="cad-log">
            <Header />
            <div className="texto-cadastro">
                <p >Pronto para se organizar?</p>
                <h2>Quando você se organiza, consegue mais tempo para fazer as coisas que realmente importam.</h2>
            </div>

            <section className="container-cadastro">
                <img className="bolaAzulCadastro" src={vetorCadastro1} alt="" />
                <div className="card-cadastro">
                    <h1>Cadastre-se</h1>
                    <form className="cont-cadastro">
                        <div className="input-cadastro">
                            <input type="text" onChange={(event) => setNomeValue(event.target.value)} placeholder="Nome completo" />
                            <small>{nomeAlert}</small>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" onChange={(event) => setEmailValue(event.target.value)} placeholder="Email" />
                            <small>{emailAlert}</small>
                        </div>
                        <div className="input-cadastro">
                            <input type="text" onChange={(event) => setTelefoneValue(event.target.value)} placeholder="Telefone" />
                            <small>{telefoneAlert}</small>
                        </div>
                        <div className="input-cadastro">
                            <input type="password" onChange={(event) => setSenhaValue(event.target.value)} placeholder="Senha" />
                            <small>{senhaAlert}</small>
                        </div>
                        <div className="input-cadastro">
                            <input type="password" onChange={(event) => setConfirmeSenhaValue(event.target.value)} placeholder="Confirmar senha" />
                            <small>{confirmeSenhaAlert}</small>
                        </div>
                        <div className="input-cadastro">
                            <button type="button" className="btn-cadastro" onClick={() => postCadastro()}>Cadastrar</button>
                        </div>
                    </form>
                </div>
                <img className="bolaPretaCadastro" src={vetorCadastro2} alt="" />

            </section>
        </div>
    );
}

export default Cadastro;