import './style.scss';

export function Header() {
    return (
        <header className="main-header">
            <div className="header-top-bar">
                <div className="container top-bar-content">
                    <span><span className="material-symbols-outlined">shield</span> Compra <b className="highlight">100% segura</b></span>
                    <span><span className="material-symbols-outlined">delivery_truck_speed</span><b className="highlight">Frete grátis</b> acima de R$ 200</span>
                    <span><span className="material-symbols-outlined">credit_card</span><b className="highlight">Parcele</b> suas compras</span>
                </div>
            </div>

            <div className="container">
                {/* Main Header - Logo, Search, Icons */}
                <div className="header-middle">
                    <div className="logo-container">
                        {/* Como não tens as imagens, podes usar um texto estilizado temporário ou uma tag img vazia */}

                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="O que você está buscando?" />
                        <button type="button" aria-label="Buscar">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="#9F9F9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="user-actions">
                        <span className="icon material-symbols-outlined">package_2</span>
                        <span className="icon material-symbols-outlined">favorite</span>
                        <span className="icon material-symbols-outlined">account_circle</span>
                        <span className="icon material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>

                <nav className="main-nav">
                    <ul>
                        <li>TODAS CATEGORIAS</li>
                        <li>SUPERMERCADO</li>
                        <li>LIVROS</li>
                        <li>MODA</li>
                        <li>LANÇAMENTOS</li>
                        <li className="highlight">OFERTAS DO DIA</li>
                        <li><span className="material-symbols-outlined">crown</span>ASSINATURA</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}