import { useEffect } from "react";
import api from "../../api";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

function Configuracoes() {

    // Atributos
    const nomeUsuario = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id");
    const [configUsuario, setConfigUsuario] = useState([]);
    const [editar, setEditar] = useState(false);
    const [sms, setSms] = useState();
    const [enviaEmail, setEnviaEmail] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();
    const [senha, setSenha] = useState();
    const [confirmeSenha, setConfirmeSenha] = useState();

    function requisicao() {
        api.get(`usuarios/config/${idUsuario}`).then((response) => {
            console.log(response.data);
            setConfigUsuario(response.data);
        });
    }

    function salvarEdicao() {
        api.patch(`usuarios/config/${idUsuario}`, {

        }).then((response) => {
            console.log(response);
        })
    }

    useEffect(() => {
        requisicao();
    }, [])

    // Return do HTML
    return (
        <div>
            <Sidebar />
            <div className="main-content">
                <header className="header">
                    <h2>
                        <label style={{ cursor: "pointer" }} htmlFor="nav-toggle">
                            {/* <span className="material-symbols-outlined">menu</span> */}
                        </label>
                    </h2>
                    <div className="user-wrapper">
                        <div>
                            <small>Bem vindo,</small>
                            <h4>{nomeUsuario}</h4>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <div className="container-config">
                        <h1>Configurações</h1>
                        <div className="config">
                            <div className="section-config">
                                <span>Ativar lembretes (Notificações do APP)</span>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked={configUsuario.enviaSms} disabled={editar}/>
                                    <div className="toggle-switch-background">
                                        <div className="toggle-switch-handle"></div>
                                    </div>
                                </label>
                            </div>
                            <div className="section-config">
                                <span>Ativar notificações SMS</span>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked={configUsuario.enviaEmail} disabled={editar}/>
                                    <div className="toggle-switch-background">
                                        <div className="toggle-switch-handle"></div>
                                    </div>
                                </label>

                            </div>
                            <div className="section-config">
                                <span>Número celular</span>
                                <input type="text" className="input-text-config" defaultValue={configUsuario.telefone} disabled={editar}/>
                            </div>
                            <div className="section-config">
                                <span>E-mail</span>
                                <input type="text" className="input-text-config" defaultValue={configUsuario.email} disabled={editar}/>
                            </div>
                            <div className="section-config">
                                <span>Alterar senha</span>
                                <input type="password" className="input-text-config" disabled={editar} />
                            </div>
                            <div className="section-config">
                                <span>Confirmar senha</span>
                                <input type="password" className="input-text-config" disabled={editar}/>
                            </div>
                            {editar === false ? <button className="config-btn-editar" onClick={()=>setEditar(true)}><span className="material-symbols-outlined">edit</span> Editar</button> :
                            <button className="config-btn" onClick={()=>{setEditar(false)}}><span className="material-symbols-outlined">save</span> Salvar</button>}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Configuracoes;