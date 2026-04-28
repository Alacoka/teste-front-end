import './style.scss';

export function Banner() {
    return (
        <section className="banner">
            <div className="banner-overlay">

                <div className="container banner-content">
                    <h2>Venha conhecer nossas promoções</h2>
                    <p><span className="highlight">50% Off</span> nos produtos</p>
                    <button type="button">Ver produto</button>
                </div>

            </div>
        </section>
    );
}