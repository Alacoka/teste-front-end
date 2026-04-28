import './style.scss';

export function Categories() {
    return (
        <section className="categories-section">
            <div className="container categories-container">

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">devices</span>
                    </div>
                    <p>Tecnologia</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">storefront</span>
                    </div>
                    <p>Supermercado</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">liquor</span>
                    </div>
                    <p>Bebidas</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">construction</span>
                    </div>
                    <p>Ferramentas</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">health_metrics</span>
                    </div>
                    <p>Saúde</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">fitness_center</span>
                    </div>
                    <p>Esportes e Fitness</p>
                </div>

                <div className="category-item">
                    <div className="icon-box">
                        <span className="material-symbols-outlined">checkroom</span>
                    </div>
                    <p>Moda</p>
                </div>

            </div>
        </section>
    );
}