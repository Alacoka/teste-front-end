import './style.scss';

export function Header() {
    return (
        <header className="main-header">
            <div className="container">
                <h1>Econverse</h1>
                <nav>
                    <ul>
                        <li>Todas as Categorias</li>
                        <li>Supermercado</li>
                        <li>Livros</li>
                        <li>Moda</li>
                        <li>Lançamentos</li>
                        <li>Ofertas do Dia</li>
                        <li>Assinaturas</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}