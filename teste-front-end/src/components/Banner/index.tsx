import './style.scss';

export function Banner() {
    return (
        <section className="banner">
            {/* Esta div overlay serve para dar aquele escurecimento em cima da foto */}
            <div className="banner-overlay">

                {/* Reutilizamos o container para manter tudo alinhado com o Header! */}
                <div className="container banner-content">
                    <h2>Venha conhecer nossas promoções</h2>
                    <p><span className="highlight">50% Off</span> nos produtos</p>
                    <button type="button">Ver produto</button>
                </div>

            </div>
        </section>
    );
}