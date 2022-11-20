import logo from '../../assets/img/logo.svg';
import './indesx.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                    </p>
                    <p>
                        Aluno 
                        <a href="linkedin.com/in/reinan-alves-3a364821a">@ReinanSantos</a>
                    </p>
                </div>
            </header>
            <h5 className='relatorio'>Relatório de Vendas</h5>
        </>

    );
}

export default Header;