import logo from "../assets/img/logoMoca.png";

function Sidebar() {
    return (
        <div className="sidebar">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0" />
            <div className="sidebar-brand">
                <h2><img src={logo} width="30px" height="30px" alt="" /></h2>
                <span>moca</span>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="/dashboard" className="active"><span className="material-symbols-outlined">pie_chart</span><span>Dashboard</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">description</span><span>Extrato</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">arrow_upward</span><span>Receita</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">arrow_downward</span><span>Despesa</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">credit_card</span><span>Cartões</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">savings</span><span>Porquinho</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">calculate</span><span>Calculadora</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">settings</span><span>Configurações</span></a>
                    </li>
                    <li>
                        <a href="/dashboard"><span className="material-symbols-outlined">keyboard_backspace</span><span>Sair</span></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;