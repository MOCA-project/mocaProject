import axios from "axios";
import Header from "../components/Header";
import vetorCadastro1 from "../assets/img/vetorCadastro1.png";
import vetorCadastro2 from "../assets/img/vetorCadastro2.png";
import { useState } from "react";

function Cadastro() {
    const [data, setData] = useState(null);

    // Função chamada no botão para cadastrar o usuário
    function postCadastro() {

        // Regex
        let regexSenha =
            /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
        let regexEmail = /\S+@\S+\.\S+/;

        // Valor digitado no input de NOME
        const nome = document.getElementById('nome-cadastro');
        const nomeValue = nome.value;

        // Valor digitado no input de EMAIL
        const email = document.getElementById('email-cadastro');
        const emailValue = email.value;

        // Valor digitado no input de SENHA
        const senha = document.getElementById('senha-cadastro');
        const senhaValue = senha.value;

        // Valor digitado no input de CONFIRME SENHA
        const confirmeSenha = document.getElementById('confirmeSenha-cadastro');
        const confirmeSenhaValue = confirmeSenha.value;

        // Fazendo as validações dos inputs e cadastrando
        if (nomeValue === "" || nomeValue === " ") {
            alert("Informe um nome!");
        } else if (!regexEmail.test(emailValue)) {
            alert("Digite um email válido!");
        } else if (!regexSenha.test(senhaValue)) {
            alert("Senha inválida!\nA senha deve ter entre 6 e 15 caracteres e incluir pelo menos uma letra maiúscula, um número e um caractere especial.")
        } else if (senhaValue !== confirmeSenhaValue) {
            alert("Senhas não conferem!");
        } else {

            // Chamando o axios para criar um cliente = usuario
            // e passando um json com o valor dos inputs
            axios.post("//localhost:8080/api/usuarios/cadastrar/", {
                nome: nomeValue,
                email: emailValue,
                senha: senhaValue,
                idTipoPerfil: 5,
            }).then((response) => {
                console.log(response);
                alert("Usuário cadastrado!")
                setData(response.data);
            }).catch((err) => {
                if (err.response.status() === 409) {
                    alert("Usuário ja cadastrado!");
                    console.log("email ja existente", err)
                } else if (err.response.status() === 404) {
                    alert("Página não encontrada!");
                }
            });
        }

        if(data === 200){
            window.location.href = "/login";
        }
    }

    // Retyornando a estrutura do site de Cadastro
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
                            <input type="text" id="nome-cadastro" placeholder="Nome completo" />
                        </div>
                        <div className="input-cadastro">
                            <input type="text" id="email-cadastro" placeholder="Email" />
                        </div>
                        <div className="input-cadastro">
                            <input type="password" id="senha-cadastro" placeholder="Senha" />
                        </div>
                        <div className="input-cadastro">
                            <input type="password" id="confirmeSenha-cadastro" placeholder="Confirmar senha" />
                        </div>
                        <div className="input-cadastro">
                            <button type="button" className="btn-cadastro" onClick={postCadastro}>Cadastrar</button>
                        </div>
                    </form>
                </div>
                <img className="bolaPretaCadastro" src={vetorCadastro2} alt="" />

            </section>
        </div>
    );
}

export default Cadastro;